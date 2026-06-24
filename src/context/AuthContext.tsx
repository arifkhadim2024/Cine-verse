import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "@/lib/api";
import { Movie } from "@/data/movies";

type UserType = {
  id: string;
  name: string;
  email: string;
  watchlist: Movie[];
  favorites: Movie[];
};

type AuthContextType = {
  user: UserType | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      if (typeof window === "undefined") {
        setLoading(false);
        return;
      }

      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const userData = await api.auth.me();
        setUser({
          id: userData._id || userData.id || "",
          name: userData.name,
          email: userData.email,
          watchlist: userData.watchlist || [],
          favorites: userData.favorites || [],
        });
      } catch (error) {
        console.error("Failed to load user profile:", error);
        localStorage.removeItem("cineverse_token");
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await api.auth.login({ email, password });
      localStorage.setItem("cineverse_token", res.token);
      setUser({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        watchlist: res.user.watchlist || [],
        favorites: res.user.favorites || [],
      });
    } catch (error) {
      setLoading(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const res = await api.auth.register({ name, email, password });
      localStorage.setItem("cineverse_token", res.token);
      setUser({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        watchlist: res.user.watchlist || [],
        favorites: res.user.favorites || [],
      });
    } catch (error) {
      setLoading(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("cineverse_token");
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
