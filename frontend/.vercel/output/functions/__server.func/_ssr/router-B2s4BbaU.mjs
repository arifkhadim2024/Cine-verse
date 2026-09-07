import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-RIV9wopF.css";
const movies = [
  {
    "id": "netflix-s126-q-force",
    "title": "Q-Force",
    "year": 2021,
    "genres": [
      "Action",
      "Comedy",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 87,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Sean Hayes",
      "Wanda Sykes",
      "Laurie Metcalf",
      "David Harbour",
      "Gary Cole"
    ],
    "description": "A gay superspy and his scrappy LGBTQ squad fight to prove themselves to the agency that underestimated them. Today, West Hollywood… tomorrow, the world!",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(6, 60%, 8%) 0%, hsl(66, 45%, 15%) 50%, hsl(6, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(6, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "Way9Dexny3w",
    "netflixUrl": "https://www.netflix.com/search?q=Q-Force"
  },
  {
    "id": "netflix-s581-mobile-suit-gundam-hathaway",
    "title": "Mobile Suit Gundam Hathaway",
    "year": 2021,
    "genres": [
      "Action",
      "Anime",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "1h 36m",
    "director": "Shuko Murase",
    "cast": [
      "Kensho Ono",
      "Reina Ueda",
      "Junichi Suwabe"
    ],
    "description": "After Char’s rebellion, Hathaway Noa leads an insurgency against Earth Federation, but meeting an enemy officer and a mysterious woman alters his fate.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(30, 60%, 8%) 0%, hsl(90, 45%, 15%) 50%, hsl(30, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(30, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "dQw4w9WgXcQ",
    "netflixUrl": "https://www.netflix.com/search?q=Mobile%20Suit%20Gundam%20Hathaway"
  },
  {
    "id": "netflix-s713-silver-skates",
    "title": "Silver Skates",
    "year": 2020,
    "genres": [
      "Action",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "2h 18m",
    "director": "Michael Lockshin",
    "cast": [
      "Fedor Fedotov",
      "Sonya Priss",
      "Yury Borisov",
      "Kirill Zaitsev",
      "Aleksey Guskov"
    ],
    "description": "On the frozen rivers and canals of St. Petersburg, a petty thief on skates warms the heart of an aristocrat’s daughter as forces try to keep them apart.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(279, 60%, 8%) 0%, hsl(339, 45%, 15%) 50%, hsl(279, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(279, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=Silver%20Skates"
  },
  {
    "id": "netflix-s1903-all-because-of-you",
    "title": "All Because of You",
    "year": 2020,
    "genres": [
      "Action",
      "Comedy",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 87,
    "duration": "1h 42m",
    "director": "Adrian Teh",
    "cast": [
      "Hairul Azreen",
      "Janna Nick",
      "Amerul Affendi",
      "Henley Hii",
      "Nam Ron"
    ],
    "description": "After falling for a guest, an unsuspecting hotel staff becomes embroiled in a hostage scheme and discovers true love in an unlikely place.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(197, 60%, 8%) 0%, hsl(257, 45%, 15%) 50%, hsl(197, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(197, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "TcMBFSGVi1c",
    "netflixUrl": "https://www.netflix.com/search?q=All%20Because%20of%20You"
  },
  {
    "id": "netflix-s2191-the-umbrella-academy",
    "title": "The Umbrella Academy",
    "year": 2020,
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "2 Seasons",
    "director": "Unknown",
    "cast": [],
    "description": "Reunited by their father's death, estranged siblings with extraordinary powers uncover shocking family secrets – and a looming threat to humanity.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(249, 60%, 8%) 0%, hsl(309, 45%, 15%) 50%, hsl(249, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(249, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Umbrella%20Academy"
  },
  {
    "id": "netflix-s1138-the-knight-and-the-princess",
    "title": "The Knight and the Princess",
    "year": 2019,
    "genres": [
      "Action",
      "Drama",
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 90,
    "duration": "1h 36m",
    "director": "Bashir El Deek",
    "cast": [
      "Sedky Sakhr",
      "Hashem El Garhy",
      "Shahira Kamal",
      "Aiemzy",
      "Hani R. Eskander"
    ],
    "description": "A fictional account of the heroic quests of a 7th-century knight, from rescuing hostages abducted by pirates in the Indian Sea to taking on a tyrant.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(323, 60%, 8%) 0%, hsl(23, 45%, 15%) 50%, hsl(323, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(323, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "8Qn_spdM5Zg",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Knight%20and%20the%20Princess"
  },
  {
    "id": "netflix-s388-mimi",
    "title": "Mimi",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 86,
    "duration": "2h 12m",
    "director": "Laxman Utekar",
    "cast": [
      "Kriti Sanon",
      "Pankaj Tripathi",
      "Sai Tamhankar",
      "Manoj Pahwa",
      "Supriya Pathak"
    ],
    "description": "An aspiring actress in a small town agrees to bear a child for a visiting couple seeking a surrogate mother, but her experience takes unexpected turns.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(309, 60%, 8%) 0%, hsl(9, 45%, 15%) 50%, hsl(309, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(309, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=Mimi"
  },
  {
    "id": "netflix-s453-a-perfect-fit",
    "title": "A Perfect Fit",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "1h 53m",
    "director": "Hadrah Daeng Ratu",
    "cast": [
      "Nadya Arina",
      "Refal Hady",
      "Giorgino Abraham",
      "Anggika Bolsterli",
      "Laura Theux"
    ],
    "description": "Sparks fly when a fashion blogger in Bali meets a gifted shoemaker, leading her to question her commitment to her fiancé.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(112, 60%, 8%) 0%, hsl(172, 45%, 15%) 50%, hsl(112, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(112, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "YoHD9XEInc0",
    "netflixUrl": "https://www.netflix.com/search?q=A%20Perfect%20Fit"
  },
  {
    "id": "netflix-s521-i-think-you-should-leave-with-tim-robinson",
    "title": "I Think You Should Leave with Tim Robinson",
    "year": 2021,
    "genres": [
      "Comedy"
    ],
    "imdb": 8.9,
    "rt": 89,
    "duration": "2 Seasons",
    "director": "Unknown",
    "cast": [
      "Tim Robinson",
      "Andy Samberg",
      "Sam Richardson",
      "Will Forte",
      "Fred Willard"
    ],
    "description": "There is no such thing as an ordinary interaction in this offbeat sketch comedy series that features a deep roster of guest stars.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(118, 60%, 8%) 0%, hsl(178, 45%, 15%) 50%, hsl(118, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(118, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "d9MyW72ELq0",
    "netflixUrl": "https://www.netflix.com/search?q=I%20Think%20You%20Should%20Leave%20with%20Tim%20Robinson"
  },
  {
    "id": "netflix-s806-racket-boys",
    "title": "Racket Boys",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 85,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Kim Sang-kyung",
      "Oh Na-ra",
      "Tang Jun-sang",
      "Son Sang-yeon",
      "Choi Hyun-wook"
    ],
    "description": "A city kid is brought to the countryside by his father's new coaching gig: reviving a ragtag middle school badminton team on the brink of extinction.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(341, 60%, 8%) 0%, hsl(41, 45%, 15%) 50%, hsl(341, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(341, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=Racket%20Boys"
  },
  {
    "id": "netflix-s1038-tuesdays-fridays",
    "title": "Tuesdays & Fridays",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 86,
    "duration": "1h 46m",
    "director": "Taranveer Singh",
    "cast": [
      "Anmol Thakeria Dhillon",
      "Jhataleka",
      "Niki Walia",
      "Kamini Khanna",
      "Zoa Morani"
    ],
    "description": "To avoid the burden of commitment, a young lawyer and a writer agree to be romantic partners only two days a week. That won’t get complicated — right?",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(314, 60%, 8%) 0%, hsl(14, 45%, 15%) 50%, hsl(314, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(314, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "2QKg5SZ_35I",
    "netflixUrl": "https://www.netflix.com/search?q=Tuesdays%20%26%20Fridays"
  },
  {
    "id": "netflix-s9-the-great-british-baking-show",
    "title": "The Great British Baking Show",
    "year": 2021,
    "genres": [
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 88,
    "duration": "9 Seasons",
    "director": "Andy Devonshire",
    "cast": [
      "Mel Giedroyc",
      "Sue Perkins",
      "Mary Berry",
      "Paul Hollywood"
    ],
    "description": "A talented batch of amateur bakers face off in a 10-week competition, whipping up their best dishes in the hopes of being named the U.K.'s best.",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(250, 60%, 8%) 0%, hsl(310, 45%, 15%) 50%, hsl(250, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(250, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "dQw4w9WgXcQ",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Great%20British%20Baking%20Show"
  },
  {
    "id": "netflix-s276-the-kingdom",
    "title": "The Kingdom",
    "year": 2021,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 88,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Chino Darín",
      "Nancy Dupláa",
      "Joaquín Furriel",
      "Peter Lanzani",
      "Mercedes Morán"
    ],
    "description": "After his running mate's murder, a controversial televangelist becomes Argentina's presidential candidate. But nothing about him is as holy as he seems.",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(124, 60%, 8%) 0%, hsl(184, 45%, 15%) 50%, hsl(124, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(124, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "2QKg5SZ_35I",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Kingdom"
  },
  {
    "id": "netflix-s298-navarasa",
    "title": "Navarasa",
    "year": 2021,
    "genres": [
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "1 Season",
    "director": "Bejoy Nambiar, Priyadarshan, Karthik Narain, Vasanth Sai, Karthik Subbaraj, Arvind Swamy, Rathindran R Prasad, Sarjun, Gautham Vasudev Menon",
    "cast": [
      "Suriya",
      "Vijay Sethupathi",
      "Revathy",
      "Prakash Raj",
      "Siddarth"
    ],
    "description": "From amusement to awe, the nine human emotions of Indian aesthetic theory are explored in this anthology series.",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(290, 60%, 8%) 0%, hsl(350, 45%, 15%) 50%, hsl(290, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(290, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "dQw4w9WgXcQ",
    "netflixUrl": "https://www.netflix.com/search?q=Navarasa"
  },
  {
    "id": "netflix-s305-lady-boss-the-jackie-collins-story",
    "title": "Lady Boss: The Jackie Collins Story",
    "year": 2021,
    "genres": [
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 91,
    "duration": "1h 37m",
    "director": "Laura Fairrie",
    "cast": [
      "Jackie Collins"
    ],
    "description": '"Queen of Sleaze" or feminist pioneer? Powerhouse novelist Jackie Collins created a brash sex-positive persona while hiding her private struggles.',
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(313, 60%, 8%) 0%, hsl(13, 45%, 15%) 50%, hsl(313, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(313, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "8Qn_spdM5Zg",
    "netflixUrl": "https://www.netflix.com/search?q=Lady%20Boss%3A%20The%20Jackie%20Collins%20Story"
  },
  {
    "id": "netflix-s382-the-snitch-cartel-origins",
    "title": "The Snitch Cartel: Origins",
    "year": 2021,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 91,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Juan Pablo Urrego",
      "Sebastián Osorio",
      "Patricia Tamayo",
      "Verónica Velásquez",
      "María Camila Zárate"
    ],
    "description": "Over four decades, two brothers in Cali juggle family duties, multiple romances and illegal businesses, transforming from poor kids to cocaine kingpins.",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(356, 60%, 8%) 0%, hsl(56, 45%, 15%) 50%, hsl(356, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(356, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "Way9Dexny3w",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Snitch%20Cartel%3A%20Origins"
  },
  {
    "id": "netflix-s464-a-classic-horror-story",
    "title": "A Classic Horror Story",
    "year": 2021,
    "genres": [
      "Drama",
      "Horror"
    ],
    "imdb": 8.9,
    "rt": 87,
    "duration": "1h 35m",
    "director": "Roberto De Feo, Paolo Strippoli",
    "cast": [
      "Matilda Lutz",
      "Francesco Russo",
      "Peppino Mazzotta",
      "Will Merrick",
      "Yuliia Sobol"
    ],
    "description": "In this gruesome suspense film, strangers traveling in southern Italy become stranded in the woods, where they must fight desperately to get out alive.",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(355, 60%, 8%) 0%, hsl(55, 45%, 15%) 50%, hsl(355, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(355, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "b9EkMc79ZSU",
    "netflixUrl": "https://www.netflix.com/search?q=A%20Classic%20Horror%20Story"
  },
  {
    "id": "netflix-s1482-the-rope-curse-2",
    "title": "The Rope Curse 2",
    "year": 2020,
    "genres": [
      "Drama",
      "Horror"
    ],
    "imdb": 8.9,
    "rt": 88,
    "duration": "1h 45m",
    "director": "Liao Shih-han",
    "cast": [
      "Lee Kang-sheng",
      "Wilson Hsu",
      "Vera Chen",
      "Yen Cheng-kuo",
      "Chen Bor-jeng"
    ],
    "description": "After a purification ritual unravels, a conflicted Taoist priest attempts to help a lonely young psychic whose aunt is possessed by a powerful demon.",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(286, 60%, 8%) 0%, hsl(346, 45%, 15%) 50%, hsl(286, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(286, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "Way9Dexny3w",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Rope%20Curse%202"
  },
  {
    "id": "netflix-s2030-the-babysitter-killer-queen",
    "title": "The Babysitter: Killer Queen",
    "year": 2020,
    "genres": [
      "Comedy",
      "Horror"
    ],
    "imdb": 8.9,
    "rt": 90,
    "duration": "1h 42m",
    "director": "McG",
    "cast": [
      "Judah Lewis",
      "Jenna Ortega",
      "Emily Alyn Lind",
      "Andrew Bachelor",
      "Robbie Amell"
    ],
    "description": "Two years after Cole survived a satanic blood cult, he's living another nightmare: high school. And the demons from his past? Still making his life hell.",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(233, 60%, 8%) 0%, hsl(293, 45%, 15%) 50%, hsl(233, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(233, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "8Qn_spdM5Zg",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Babysitter%3A%20Killer%20Queen"
  },
  {
    "id": "netflix-s4148-hantu-kak-limah",
    "title": "Hantu Kak Limah",
    "year": 2018,
    "genres": [
      "Comedy",
      "Drama",
      "Horror"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "1h 50m",
    "director": "Mamat Khalid",
    "cast": [
      "Awie",
      "Arab Khalid",
      "Sharwani Ns",
      "Tj Isa",
      "Delimawati"
    ],
    "description": "When Kak Limah turns up dead shortly after her marriage to a much younger man, her pesky ghost haunts the villagers, who can't seem to get rid of her.",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(93, 60%, 8%) 0%, hsl(153, 45%, 15%) 50%, hsl(93, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(93, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "8Qn_spdM5Zg",
    "netflixUrl": "https://www.netflix.com/search?q=Hantu%20Kak%20Limah"
  },
  {
    "id": "netflix-s4242-secrets-in-the-hot-spring",
    "title": "Secrets in the Hot Spring",
    "year": 2018,
    "genres": [
      "Comedy",
      "Drama",
      "Horror"
    ],
    "imdb": 8.9,
    "rt": 90,
    "duration": "1h 48m",
    "director": "Unknown",
    "cast": [
      "Chang Ting-hu",
      "Hong Yan-xiang",
      "Lin He Xuan",
      "Kuo Shu-yao",
      "Law Kar-Ying"
    ],
    "description": "When three teen outcasts arrive at a hot springs hotel to help run things, creepy incidents prompt comical efforts to find what lurks in their midst.",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(211, 60%, 8%) 0%, hsl(271, 45%, 15%) 50%, hsl(211, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(211, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=Secrets%20in%20the%20Hot%20Spring"
  },
  {
    "id": "netflix-s4516-kuntilanak",
    "title": "Kuntilanak",
    "year": 2018,
    "genres": [
      "Drama",
      "Horror"
    ],
    "imdb": 8.9,
    "rt": 91,
    "duration": "1h 46m",
    "director": "Rizal Mantovani",
    "cast": [
      "Sandrinna M Skornicki",
      "Aurélie Moeremans",
      "Fero Walandouw",
      "Andryan Bima",
      "Ciara Nadine Brosnan"
    ],
    "description": "Five youngsters discover that an antique mirror found in their orphanage is home to an evil ghost who kidnaps children and imprisons them inside it.",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(325, 60%, 8%) 0%, hsl(25, 45%, 15%) 50%, hsl(325, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(325, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "b9EkMc79ZSU",
    "netflixUrl": "https://www.netflix.com/search?q=Kuntilanak"
  },
  {
    "id": "netflix-s1095-the-wedding-coach",
    "title": "The Wedding Coach",
    "year": 2021,
    "genres": [
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 88,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [],
    "description": "Former bride and forever comedian Jamie Lee shares her irreverent yet practical tips and tricks for wedding planning with struggling lovebirds.",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(258, 60%, 8%) 0%, hsl(318, 45%, 15%) 50%, hsl(258, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(258, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "d9MyW72ELq0",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Wedding%20Coach"
  },
  {
    "id": "netflix-s1349-firefly-lane",
    "title": "Firefly Lane",
    "year": 2021,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 86,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Katherine Heigl",
      "Sarah Chalke",
      "Ben Lawson",
      "Beau Garrett",
      "Ali Skovbye"
    ],
    "description": "Best friends Tully and Kate support each other through good times and bad with an unbreakable bond that carries them from their teens to their 40s.",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(105, 60%, 8%) 0%, hsl(165, 45%, 15%) 50%, hsl(105, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(105, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "b9EkMc79ZSU",
    "netflixUrl": "https://www.netflix.com/search?q=Firefly%20Lane"
  },
  {
    "id": "netflix-s1186-who-s-the-boss",
    "title": "Who's the Boss",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 86,
    "duration": "1h 46m",
    "director": "Chinaza Onuzo",
    "cast": [
      "Funke Akindele",
      "Blossom Chukwujekwu",
      "Sharon Ooja",
      "Ini Dima-Okojie",
      "Segun Arinze"
    ],
    "description": "A young, overworked ad executive with an overbearing boss starts her own side hustle and invents an employer once her business begins to flourish.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(151, 60%, 8%) 0%, hsl(211, 45%, 15%) 50%, hsl(151, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(151, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=Who%27s%20the%20Boss"
  },
  {
    "id": "netflix-s1835-start-up",
    "title": "Start-Up",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Bae Suzy",
      "Nam Joo-hyuk",
      "Kim Seon-ho",
      "Kang Han-na",
      "Kim Do-wan"
    ],
    "description": "Young entrepreneurs aspiring to launch virtual dreams into reality compete for success and love in the cutthroat world of Korea's high-tech industry.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(239, 60%, 8%) 0%, hsl(299, 45%, 15%) 50%, hsl(239, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(239, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=Start-Up"
  },
  {
    "id": "netflix-s2276-hook",
    "title": "Hook",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "1 Season",
    "director": "Rachit Kusonkoonsiri",
    "cast": [
      "Peemapol Panichtamrong",
      "Phiravich Attachitsataporn",
      "Thime Pichitsurakit",
      "Jidapa Siribunchawan",
      "Yanin Opassathaworn"
    ],
    "description": "Despite their fathers' rivalry, two university students form a friendship at a boxing gym as they tackle family drama, romance and personal crises.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(297, 60%, 8%) 0%, hsl(357, 45%, 15%) 50%, hsl(297, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(297, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "TcMBFSGVi1c",
    "netflixUrl": "https://www.netflix.com/search?q=Hook"
  },
  {
    "id": "netflix-s2413-365-days",
    "title": "365 Days",
    "year": 2020,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 86,
    "duration": "1h 54m",
    "director": "Barbara Białowąs, Tomasz Mandes",
    "cast": [
      "Anna-Maria Sieklucka",
      "Michele Morrone",
      "Bronisław Wrocławski",
      "Otar Saralidze",
      "Magdalena Lamparska"
    ],
    "description": "A fiery executive in a spiritless relationship falls victim to a dominant mafia boss, who imprisons her and gives her one year to fall in love with him.",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(84, 60%, 8%) 0%, hsl(144, 45%, 15%) 50%, hsl(84, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(84, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "2QKg5SZ_35I",
    "netflixUrl": "https://www.netflix.com/search?q=365%20Days"
  },
  {
    "id": "netflix-s41-he-man-and-the-masters-of-the-universe",
    "title": "He-Man and the Masters of the Universe",
    "year": 2021,
    "genres": [
      "Adventure",
      "Sci-Fi"
    ],
    "imdb": 8.9,
    "rt": 89,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Yuri Lowenthal",
      "Kimberly Brooks",
      "Antony Del Rio",
      "Trevor Devall",
      "Ben Diskin"
    ],
    "description": "Mighty teen Adam and his heroic squad of misfits discover the legendary power of Grayskull — and their destiny to defend Eternia from sinister Skeletor.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(321, 60%, 8%) 0%, hsl(21, 45%, 15%) 50%, hsl(321, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(321, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=He-Man%20and%20the%20Masters%20of%20the%20Universe"
  },
  {
    "id": "netflix-s91-paradise-hills",
    "title": "Paradise Hills",
    "year": 2019,
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 93,
    "duration": "1h 35m",
    "director": "Alice Waddington",
    "cast": [
      "Emma Roberts",
      "Danielle Macdonald",
      "Awkwafina",
      "Eiza González",
      "Milla Jovovich"
    ],
    "description": "Uma wakes up in a lush tropical facility designed to turn willful girls into perfect ladies. That’s bad enough, but its real purpose is even worse.",
    "mood": [
      "mind bending",
      "futuristic",
      "epic"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(73, 60%, 8%) 0%, hsl(133, 45%, 15%) 50%, hsl(73, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(73, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "8Qn_spdM5Zg",
    "netflixUrl": "https://www.netflix.com/search?q=Paradise%20Hills"
  },
  {
    "id": "netflix-s3859-the-wandering-earth",
    "title": "The Wandering Earth",
    "year": 2019,
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "imdb": 8.9,
    "rt": 90,
    "duration": "2h 5m",
    "director": "Frant Gwo",
    "cast": [
      "Jing Wu",
      "Chuxiao Qu",
      "Jinmai Zhao",
      "Li Guangjie",
      "Ng Man-Tat"
    ],
    "description": "A looming collision with Jupiter threatens Earth as humans search for a new star. The planet's fate now lies in the hands of a few unexpected heroes.",
    "mood": [
      "mind bending",
      "futuristic",
      "epic"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(244, 60%, 8%) 0%, hsl(304, 45%, 15%) 50%, hsl(244, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(244, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "2QKg5SZ_35I",
    "netflixUrl": "https://www.netflix.com/search?q=The%20Wandering%20Earth"
  },
  {
    "id": "netflix-s8677-viking-destiny",
    "title": "Viking Destiny",
    "year": 2018,
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "imdb": 8.9,
    "rt": 93,
    "duration": "1h 31m",
    "director": "David L.G. Hughes",
    "cast": [
      "Anna Demetriou",
      "Timo Nieminen",
      "Will Mellor",
      "Andrew Whipp",
      "Paul Freeman"
    ],
    "description": "Framed for her father’s murder, an exiled Viking princess is guided by the god Odin as she prepares to return to her kingdom and reclaim the throne.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(351, 60%, 8%) 0%, hsl(51, 45%, 15%) 50%, hsl(351, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(351, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=Viking%20Destiny"
  },
  {
    "id": "netflix-s6601-devil-s-gate",
    "title": "Devil's Gate",
    "year": 2017,
    "genres": [
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 89,
    "duration": "1h 34m",
    "director": "Clay Staub",
    "cast": [
      "Amanda Schull",
      "Milo Ventimiglia",
      "Shawn Ashmore",
      "Bridget Regan",
      "Jonathan Frakes"
    ],
    "description": "Seeking a missing woman in North Dakota, an FBI agent and a sheriff focus on her religious zealot husband but discover something far more sinister.",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(36, 60%, 8%) 0%, hsl(96, 45%, 15%) 50%, hsl(36, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(36, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "Way9Dexny3w",
    "netflixUrl": "https://www.netflix.com/search?q=Devil%27s%20Gate"
  },
  {
    "id": "netflix-s2365-a-whisker-away",
    "title": "A Whisker Away",
    "year": 2020,
    "genres": [
      "Adventure",
      "Anime",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 88,
    "duration": "1h 44m",
    "director": "Junichi Sato, Tomotaka Shibayama",
    "cast": [
      "Mirai Shida",
      "Natsuki Hanae",
      "Hiroaki Ogi",
      "Koichi Yamadera",
      "Minako Kotobuki"
    ],
    "description": "A peculiar girl transforms into a cat to catch her crush's attention. But before she realizes it, the line between human and animal starts to blur.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(358, 60%, 8%) 0%, hsl(58, 45%, 15%) 50%, hsl(358, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(358, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "d9MyW72ELq0",
    "netflixUrl": "https://www.netflix.com/search?q=A%20Whisker%20Away"
  },
  {
    "id": "netflix-s2452-mirai",
    "title": "Mirai",
    "year": 2018,
    "genres": [
      "Action",
      "Adventure",
      "Anime"
    ],
    "imdb": 8.9,
    "rt": 91,
    "duration": "1h 38m",
    "director": "Mamoru Hosoda",
    "cast": [
      "Moka Kamishiraishi",
      "Haru Kuroki",
      "Gen Hoshino",
      "Kumiko Aso",
      "Mitsuo Yoshihara"
    ],
    "description": "Unhappy after his new baby sister displaces him, four-year-old Kun begins meeting people and pets from his family's history in their unique house.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(210, 60%, 8%) 0%, hsl(270, 45%, 15%) 50%, hsl(210, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(210, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "dQw4w9WgXcQ",
    "netflixUrl": "https://www.netflix.com/search?q=Mirai"
  },
  {
    "id": "netflix-s4532-lost-song",
    "title": "LOST SONG",
    "year": 2018,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 85,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Konomi Suzuki",
      "Yukari Tamura",
      "Misaki Kuno",
      "Chiaki Takahashi",
      "Seiichiro Yamashita"
    ],
    "description": "War looms over the kingdom of Neunatia, where two young women are both burdened and blessed by the power of song.",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(240, 60%, 8%) 0%, hsl(300, 45%, 15%) 50%, hsl(240, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(240, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "dQw4w9WgXcQ",
    "netflixUrl": "https://www.netflix.com/search?q=LOST%20SONG"
  },
  {
    "id": "netflix-s3785-march-comes-in-like-a-lion",
    "title": "March Comes in Like a Lion",
    "year": 2017,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 88,
    "duration": "2 Seasons",
    "director": "Unknown",
    "cast": [
      "Kengo Kawanishi",
      "Ai Kayano",
      "Kana Hanazawa",
      "Misaki Kuno",
      "Nobuhiko Okamoto"
    ],
    "description": "Orphaned young, a reclusive 17-year-old professional shogi player starts to come out of his shell when three sisters take him under their wing.",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(350, 60%, 8%) 0%, hsl(50, 45%, 15%) 50%, hsl(350, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(350, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "dQw4w9WgXcQ",
    "netflixUrl": "https://www.netflix.com/search?q=March%20Comes%20in%20Like%20a%20Lion"
  },
  {
    "id": "netflix-s5097-fullmetal-alchemist-brotherhood",
    "title": "Fullmetal Alchemist: Brotherhood",
    "year": 2010,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 86,
    "duration": "5 Seasons",
    "director": "Yasuhiro Irie",
    "cast": [
      "Romi Park",
      "Rie Kugimiya",
      "Megumi Takamoto",
      "Shinichiro Miki",
      "Fumiko Orikasa"
    ],
    "description": "After both suffer physical damage – brothers Edward and Alphonse battle nefarious forces to try to reclaim their bodies in this supernatural anime.",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(71, 60%, 8%) 0%, hsl(131, 45%, 15%) 50%, hsl(71, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(71, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=Fullmetal%20Alchemist%3A%20Brotherhood"
  },
  {
    "id": "netflix-s720-power-rangers-dino-fury",
    "title": "Power Rangers Dino Fury",
    "year": 2021,
    "genres": [
      "Adventure"
    ],
    "imdb": 8.9,
    "rt": 88,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Russell Curry",
      "Hunter Deno",
      "Kai Moya",
      "Tessa Rao",
      "Chance Perez"
    ],
    "description": "With the prehistoric force of the dinosaurs, a new crew of Power Rangers must deal with a menacing army of alien creatures attacking Earth.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(284, 60%, 8%) 0%, hsl(344, 45%, 15%) 50%, hsl(284, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(284, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "2QKg5SZ_35I",
    "netflixUrl": "https://www.netflix.com/search?q=Power%20Rangers%20Dino%20Fury"
  },
  {
    "id": "netflix-s786-cocomelon",
    "title": "Cocomelon",
    "year": 2021,
    "genres": [
      "Adventure"
    ],
    "imdb": 8.9,
    "rt": 88,
    "duration": "3 Seasons",
    "director": "Unknown",
    "cast": [],
    "description": "Learn letters, numbers, animal sounds and more with J.J. in this edutaining series that brings fun times with nursery rhymes for the whole family!",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(171, 60%, 8%) 0%, hsl(231, 45%, 15%) 50%, hsl(171, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(171, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=Cocomelon"
  },
  {
    "id": "netflix-s1370-finding-ohana",
    "title": "Finding ‘Ohana",
    "year": 2021,
    "genres": [
      "Adventure",
      "Comedy"
    ],
    "imdb": 8.9,
    "rt": 89,
    "duration": "2h 3m",
    "director": "Jude Weng",
    "cast": [
      "Kea Peahu",
      "Alex Aiono",
      "Lindsay Watson",
      "Owen Vaccaro",
      "Kelly Hu"
    ],
    "description": "In Oʻahu for the summer, two siblings from Brooklyn connect with their Hawaiian heritage — and their family — on a daring quest for long-lost treasure.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(196, 60%, 8%) 0%, hsl(256, 45%, 15%) 50%, hsl(196, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(196, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "Way9Dexny3w",
    "netflixUrl": "https://www.netflix.com/search?q=Finding%20%E2%80%98Ohana"
  },
  {
    "id": "netflix-s2081-thomas-and-friends",
    "title": "Thomas and Friends",
    "year": 2020,
    "genres": [
      "Adventure"
    ],
    "imdb": 8.9,
    "rt": 91,
    "duration": "2 Seasons",
    "director": "Greg Tiernan",
    "cast": [
      "Michael Angelis",
      "Ben Small",
      "Keith Wickham",
      "Kerry Shale"
    ],
    "description": "This animated children's series follows the adventures of Thomas, a cheerful blue tank engine who lives on the island of Sodor.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(172, 60%, 8%) 0%, hsl(232, 45%, 15%) 50%, hsl(172, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(172, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "YoHD9XEInc0",
    "netflixUrl": "https://www.netflix.com/search?q=Thomas%20and%20Friends"
  },
  {
    "id": "netflix-s2209-dragons-rescue-riders-secrets-of-the-songwing",
    "title": "Dragons: Rescue Riders: Secrets of the Songwing",
    "year": 2020,
    "genres": [
      "Adventure",
      "Comedy"
    ],
    "imdb": 8.9,
    "rt": 89,
    "duration": "46m",
    "director": "Greg Rankin, TJ Sullivan",
    "cast": [
      "Noah Kaye Bentley",
      "Brennley Brown",
      "Zach Callison",
      "Nicolas Cantu",
      "Skai Jackson"
    ],
    "description": "When a musical dragon with a beautiful voice hypnotizes the dragons and people of Huttsgalor, the Rescue Riders have to find a way to break the spell.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(289, 60%, 8%) 0%, hsl(349, 45%, 15%) 50%, hsl(289, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(289, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=Dragons%3A%20Rescue%20Riders%3A%20Secrets%20of%20the%20Songwing"
  },
  {
    "id": "netflix-s904-nayattu",
    "title": "Nayattu",
    "year": 2021,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 90,
    "duration": "2h 2m",
    "director": "Martin Prakkat",
    "cast": [
      "Kunchacko Boban",
      "Joju George",
      "Nimisha Sajayan",
      "Jaffer Idukki",
      "Yama Gilgamesh"
    ],
    "description": "Three police officers become pawns for unscrupulous lawmakers when they are framed in an incident amid political elections and must flee to evade arrest.",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(353, 60%, 8%) 0%, hsl(53, 45%, 15%) 50%, hsl(353, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(353, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "8Qn_spdM5Zg",
    "netflixUrl": "https://www.netflix.com/search?q=Nayattu"
  },
  {
    "id": "netflix-s1202-abla-fahita-drama-queen",
    "title": "Abla Fahita: Drama Queen",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 91,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Bassem Samra",
      "Donia Maher",
      "Zeina Mansour",
      "Osama Abdallah",
      "Mohamed El Swisi"
    ],
    "description": "Falsely incriminated, Abla Fahita is separated from her kids, but the self-indulgent diva will stop at nothing to redeem herself and reunite her family.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(19, 60%, 8%) 0%, hsl(79, 45%, 15%) 50%, hsl(19, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(19, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=Abla%20Fahita%3A%20Drama%20Queen"
  },
  {
    "id": "netflix-s1329-crime-scene-the-vanishing-at-the-cecil-hotel",
    "title": "Crime Scene: The Vanishing at the Cecil Hotel",
    "year": 2021,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 87,
    "duration": "1 Season",
    "director": "Joe Berlinger",
    "cast": [],
    "description": `The notorious Cecil Hotel grows in infamy when guest Elisa Lam vanishes. From the creator of "The Ted Bundy Tapes," a dive into crime's darkest places.`,
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(181, 60%, 8%) 0%, hsl(241, 45%, 15%) 50%, hsl(181, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(181, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=Crime%20Scene%3A%20The%20Vanishing%20at%20the%20Cecil%20Hotel"
  },
  {
    "id": "netflix-s1713-ludo",
    "title": "Ludo",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 93,
    "duration": "2h 30m",
    "director": "Anurag Basu",
    "cast": [
      "Abhishek Bachchan",
      "Aditya Roy Kapur",
      "Rajkummar Rao",
      "Sanya Malhotra",
      "Fatima Sana Shaikh"
    ],
    "description": "From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(99, 60%, 8%) 0%, hsl(159, 45%, 15%) 50%, hsl(99, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(99, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=Ludo"
  },
  {
    "id": "netflix-s2671-hasmukh",
    "title": "Hasmukh",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 85,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Vir Das",
      "Ranvir Shorey",
      "Manoj Pahwa",
      "Ravi Kishan",
      "Raza Murad"
    ],
    "description": "A timid, small-town comedian's long-awaited big break takes a dark turn when he realizes committing murder is the only way to keep his onstage mojo.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(112, 60%, 8%) 0%, hsl(172, 45%, 15%) 50%, hsl(112, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(112, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "YoHD9XEInc0",
    "netflixUrl": "https://www.netflix.com/search?q=Hasmukh"
  },
  {
    "id": "netflix-s2899-yeh-ballet",
    "title": "Yeh Ballet",
    "year": 2020,
    "genres": [
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 93,
    "duration": "1h 57m",
    "director": "Sooni Taraporevala",
    "cast": [
      "Julian Sands",
      "Manish Chauhan",
      "Achintya Bose",
      "Jim Sarbh",
      "Danish Husain"
    ],
    "description": "Discovered by an eccentric ballet master, two gifted but underprivileged Mumbai teens face bigotry and disapproval as they pursue their dancing dreams.",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(243, 60%, 8%) 0%, hsl(303, 45%, 15%) 50%, hsl(243, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(243, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "8Qn_spdM5Zg",
    "netflixUrl": "https://www.netflix.com/search?q=Yeh%20Ballet"
  },
  {
    "id": "netflix-s3037-jamtara-sabka-number-ayega",
    "title": "Jamtara - Sabka Number Ayega",
    "year": 2020,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 91,
    "duration": "1 Season",
    "director": "Soumendra Padhi",
    "cast": [
      "Amit Sial",
      "Dibyendu Bhattacharya",
      "Aksha Pardhasany",
      "Sparsh Shrivastava",
      "Monika Panwar"
    ],
    "description": "A group of small-town young men run a lucrative phishing operation, until a corrupt politician wants in on their scheme – and a cop wants to fight it.",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(44, 60%, 8%) 0%, hsl(104, 45%, 15%) 50%, hsl(44, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(44, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "2QKg5SZ_35I",
    "netflixUrl": "https://www.netflix.com/search?q=Jamtara%20-%20Sabka%20Number%20Ayega"
  },
  {
    "id": "netflix-s2941-jada",
    "title": "Jada",
    "year": 2019,
    "genres": [
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 89,
    "duration": "2h 4m",
    "director": "Kumaran",
    "cast": [
      "Kathir",
      "Kishore Kumar G.",
      "Roshini",
      "Yogi Babu",
      "Kishore"
    ],
    "description": "Wishing to settle an old score, a promising soccer player defies his coach’s wishes and leads his team to participate in a violent form of the sport.",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(96, 60%, 8%) 0%, hsl(156, 45%, 15%) 50%, hsl(96, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(96, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "Way9Dexny3w",
    "netflixUrl": "https://www.netflix.com/search?q=Jada"
  },
  {
    "id": "netflix-s1174-men-on-a-mission",
    "title": "Men on a Mission",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 93,
    "duration": "6 Seasons",
    "director": "Jung-ah Im",
    "cast": [
      "Ho-dong Kang",
      "Soo-geun Lee",
      "Sang-min Lee",
      "Young-chul Kim",
      "Jang-hoon Seo"
    ],
    "description": "Male celebs play make-believe as high schoolers, welcoming star transfer students every week and engaging in battles of witty humor and slapstick.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(77, 60%, 8%) 0%, hsl(137, 45%, 15%) 50%, hsl(77, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(77, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "TcMBFSGVi1c",
    "netflixUrl": "https://www.netflix.com/search?q=Men%20on%20a%20Mission"
  },
  {
    "id": "netflix-s2889-hi-bye-mama",
    "title": "Hi Bye, Mama!",
    "year": 2020,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 85,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Kim Tae-hee",
      "Lee Kyoo-hyung",
      "Go Bo-gyeol",
      "Shin Dong-mi",
      "Seo Woo-jin"
    ],
    "description": "When the ghost of a woman gains a second chance at life for 49 days, she reappears in front of her remarried husband and young daughter.",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(166, 60%, 8%) 0%, hsl(226, 45%, 15%) 50%, hsl(166, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(166, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "Way9Dexny3w",
    "netflixUrl": "https://www.netflix.com/search?q=Hi%20Bye%2C%20Mama%21"
  },
  {
    "id": "netflix-s4988-steel-rain",
    "title": "Steel Rain",
    "year": 2018,
    "genres": [
      "Action",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 87,
    "duration": "2h 20m",
    "director": "Yang Woo-seok",
    "cast": [
      "Woo-sung Jung",
      "Do-won Kwak",
      "Kap-soo Kim",
      "Woo-jin Jo",
      "Eui-sung Kim"
    ],
    "description": "Amid a coup, a North Korean agent escapes south with the country's injured leader in an attempt to keep him alive and prevent a Korean war.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(69, 60%, 8%) 0%, hsl(129, 45%, 15%) 50%, hsl(69, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(69, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=Steel%20Rain"
  },
  {
    "id": "netflix-s5023-",
    "title": "반드시 잡는다",
    "year": 2017,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "1h 50m",
    "director": "Hong-seon Kim",
    "cast": [
      "Baek Yoon-sik"
    ],
    "description": "After people in his town start turning up dead, a grumpy landlord is visited by a man who recounts an unsolved serial murder case from 30 years ago.",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(2, 60%, 8%) 0%, hsl(62, 45%, 15%) 50%, hsl(2, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(2, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "YoHD9XEInc0",
    "netflixUrl": "https://www.netflix.com/search?q=%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%9E%A1%EB%8A%94%EB%8B%A4"
  },
  {
    "id": "netflix-s5032-forgotten",
    "title": "Forgotten",
    "year": 2017,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 93,
    "duration": "1h 49m",
    "director": "Hang-Jun Jang",
    "cast": [
      "Ha-neul Kang",
      "Moo-Yul Kim",
      "Young-hee Na",
      "Seong-kun Mun",
      "Myung-Ryul Nam"
    ],
    "description": "When his abducted brother returns seemingly a different man with no memory of the past 19 days, Jin-seok chases after the truth behind the kidnapping.",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(213, 60%, 8%) 0%, hsl(273, 45%, 15%) 50%, hsl(213, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(213, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "8Qn_spdM5Zg",
    "netflixUrl": "https://www.netflix.com/search?q=Forgotten"
  },
  {
    "id": "netflix-s7441-memoir-of-a-murderer",
    "title": "Memoir of a Murderer",
    "year": 2017,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 8.9,
    "rt": 92,
    "duration": "1h 58m",
    "director": "Shin-yeon Won",
    "cast": [
      "Kyung-gu Seol",
      "Nam-gil Kim",
      "Seol-hyun Kim",
      "Dal-su Oh",
      "Seok-jeong Hwang"
    ],
    "description": "Hiding his own murderous past, a man suffering from Alzheimer's must protect his daughter from her boyfriend, who he suspects is also a serial killer.",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(108, 60%, 8%) 0%, hsl(168, 45%, 15%) 50%, hsl(108, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(108, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "d9MyW72ELq0",
    "netflixUrl": "https://www.netflix.com/search?q=Memoir%20of%20a%20Murderer"
  },
  {
    "id": "netflix-s5434-28-moons",
    "title": "28 Moons",
    "year": 2016,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 8.9,
    "rt": 89,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Jin-sung Yang",
      "Kyu-jong Kim",
      "Tae-hwan Kang",
      "Geummi"
    ],
    "description": "When her fiancé acts strangely upon receiving a mysterious invitation, a florist sets out to find out the truth behind the tiny scrap of paper.",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(64, 60%, 8%) 0%, hsl(124, 45%, 15%) 50%, hsl(64, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(64, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "2QKg5SZ_35I",
    "netflixUrl": "https://www.netflix.com/search?q=28%20Moons"
  },
  {
    "id": "netflix-s59-naruto-shipp-den-the-movie-the-will-of-fire",
    "title": "Naruto Shippûden the Movie: The Will of Fire",
    "year": 2009,
    "genres": [
      "Action",
      "Anime",
      "Drama"
    ],
    "imdb": 8.9,
    "rt": 86,
    "duration": "1h 36m",
    "director": "Masahiko Murata",
    "cast": [
      "Junko Takeuchi",
      "Chie Nakamura",
      "Kazuhiko Inoue",
      "Satoshi Hino",
      "Showtaro Morikubo"
    ],
    "description": "When four out of five ninja villages are destroyed, the leader of the one spared tries to find the true culprit and protect his land.",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(121, 60%, 8%) 0%, hsl(181, 45%, 15%) 50%, hsl(121, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(121, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "L6P3nI6VnlY",
    "netflixUrl": "https://www.netflix.com/search?q=Naruto%20Shipp%C3%BBden%20the%20Movie%3A%20The%20Will%20of%20Fire"
  },
  {
    "id": "netflix-s401-revelations-the-masters-of-the-universe-revelation-aftershow",
    "title": "Revelations: The Masters of the Universe: Revelation Aftershow",
    "year": 2021,
    "genres": [
      "Anime",
      "Comedy"
    ],
    "imdb": 8.8,
    "rt": 86,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Kevin Smith",
      "Tiffany Smith",
      "Robert David",
      "Sarah Michelle Gellar",
      "Chris Wood"
    ],
    "description": "Take a behind-the-scenes look at “Masters of the Universe: Revelation” as showrunner Kevin Smith and others interview the cast about their iconic roles.",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(39, 60%, 8%) 0%, hsl(99, 45%, 15%) 50%, hsl(39, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(39, 55%, 10%) 50%, #050000 100%)",
    "posterUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1600&auto=format&fit=crop",
    "trailerId": "ePbKGoIGAXY",
    "netflixUrl": "https://www.netflix.com/search?q=Revelations%3A%20The%20Masters%20of%20the%20Universe%3A%20Revelation%20Aftershow"
  }
];
const genres = [
  "Horror",
  "Comedy",
  "Action",
  "Thriller",
  "Romance",
  "Sci-Fi",
  "Anime",
  "Adventure",
  "Drama"
];
movies.slice(0, 10);
[...movies].sort((a, b) => b.imdb - a.imdb).slice(0, 10);
const continueWatching = movies.slice(2, 8);
const TMDB_API_KEY = typeof window !== "undefined" ? localStorage.getItem("cineverse_tmdb_key") || "" || "" : "";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Anime",
  35: "Comedy",
  80: "Thriller",
  99: "Drama",
  18: "Drama",
  10751: "Adventure",
  14: "Sci-Fi",
  36: "Drama",
  27: "Horror",
  10402: "Romance",
  9648: "Thriller",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "Thriller",
  53: "Thriller",
  10752: "Action",
  37: "Adventure"
};
const GENRE_IDS = {
  Action: 28,
  Horror: 27,
  Comedy: 35,
  Romance: 10749,
  Thriller: 53,
  "Sci-Fi": 878,
  Anime: 16
};
function generateGradients(title) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash % 360);
  const h2 = (h1 + 60) % 360;
  return {
    posterGradient: `linear-gradient(135deg, hsl(${h1}, 60%, 8%) 0%, hsl(${h2}, 45%, 15%) 50%, hsl(${h1}, 60%, 8%) 100%)`,
    backdropGradient: `linear-gradient(135deg, #050000 0%, hsl(${h1}, 55%, 10%) 50%, #050000 100%)`
  };
}
function mapTmdbMovie(m) {
  const gradients = generateGradients(m.title);
  const releaseYear = m.release_date ? new Date(m.release_date).getFullYear() : 2024;
  const genres2 = m.genre_ids ? m.genre_ids.map((id) => GENRE_MAP[id] || "Drama").filter((v, i, a) => a.indexOf(v) === i) : ["Drama"];
  return {
    id: String(m.id),
    title: m.title,
    year: releaseYear,
    genres: genres2.length > 0 ? genres2 : ["Drama"],
    imdb: m.vote_average ? Math.round(m.vote_average * 10) / 10 : 7.5,
    rt: m.vote_average ? Math.round(m.vote_average * 10) : 75,
    duration: m.runtime ? `${Math.floor(m.runtime / 60)}h ${m.runtime % 60}m` : "2h 05m",
    director: "Unknown",
    cast: [],
    description: m.overview || "No description available.",
    mood: ["tense", "stylish"],
    streaming: ["Netflix", "Prime"],
    posterGradient: gradients.posterGradient,
    backdropGradient: gradients.backdropGradient,
    posterUrl: m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : void 0,
    backdropUrl: m.backdrop_path ? `https://image.tmdb.org/t/p/w1280${m.backdrop_path}` : void 0
  };
}
async function fetchFromTmdb(path, params = {}) {
  const queryParams = new URLSearchParams({
    api_key: TMDB_API_KEY,
    ...params
  }).toString();
  const response = await fetch(`${TMDB_BASE_URL}${path}?${queryParams}`);
  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }
  return response.json();
}
async function searchMovies(query, page = 1) {
  const lower = (query || "").toLowerCase().trim();
  const datasetMatches = movies.filter(
    (m) => !lower || m.title.toLowerCase().includes(lower) || m.genres.some((g) => g.toLowerCase().includes(lower)) || m.cast.some((c) => c.toLowerCase().includes(lower)) || m.director.toLowerCase().includes(lower) || m.mood.some((md) => md.toLowerCase().includes(lower)) || m.description.toLowerCase().includes(lower)
  );
  if (!TMDB_API_KEY) {
    return datasetMatches.slice((page - 1) * 20, page * 20);
  }
  try {
    const data = await fetchFromTmdb("/search/movie", {
      query: query || "popular",
      page: String(page)
    });
    const tmdbResults = (data.results || []).map(mapTmdbMovie);
    const combined = [...datasetMatches.slice(0, 10)];
    const existingTitles = new Set(combined.map((m) => m.title.toLowerCase()));
    for (const m of tmdbResults) {
      if (!existingTitles.has(m.title.toLowerCase())) {
        combined.push(m);
      }
    }
    return combined;
  } catch (error) {
    console.error("Error searchMovies:", error);
    return datasetMatches.slice((page - 1) * 20, page * 20);
  }
}
async function getTrendingMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.slice(0, 6);
  try {
    const data = await fetchFromTmdb("/trending/movie/week", {
      page: String(page)
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getTrendingMovies:", error);
    return movies.slice(0, 6);
  }
}
async function getMovieDetails(id) {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    const movie = movies.find((m) => m.id === id);
    if (!movie) throw new Error("Movie not found");
    return movie;
  }
  try {
    const details = await fetchFromTmdb(`/movie/${id}`);
    const credits = await fetchFromTmdb(`/movie/${id}/credits`);
    const trailerKey = await getMovieVideos(id);
    let logoUrl;
    try {
      const images = await fetchFromTmdb(
        `/movie/${id}/images`,
        {
          include_image_language: "en,null"
        }
      );
      const logoObj = images.logos?.find((l) => l.file_path);
      if (logoObj) {
        logoUrl = `https://image.tmdb.org/t/p/w500${logoObj.file_path}`;
      }
    } catch (e) {
      console.warn("Failed to fetch movie logo", e);
    }
    const mapped = mapTmdbMovie(details);
    mapped.logoUrl = logoUrl;
    const crew = credits.crew || [];
    const cast = credits.cast || [];
    const directorObj = crew.find((member) => member.job === "Director");
    mapped.director = directorObj ? directorObj.name : "Unknown";
    mapped.cast = cast.slice(0, 5).map((member) => member.name);
    mapped.castDetails = cast.slice(0, 12).map((c) => ({
      name: c.name,
      character: c.character,
      profileUrl: c.profile_path ? `https://image.tmdb.org/t/p/w185${c.profile_path}` : void 0
    }));
    mapped.tagline = details.tagline || "";
    mapped.releaseDate = details.release_date ? new Date(details.release_date).toLocaleDateString(void 0, {
      year: "numeric",
      month: "long",
      day: "numeric"
    }) : void 0;
    mapped.popularity = details.popularity;
    if (details.production_companies) {
      mapped.productionCompanies = details.production_companies.map((c) => c.name);
    }
    if (details.spoken_languages) {
      mapped.spokenLanguages = details.spoken_languages.map((l) => l.english_name);
    }
    if (details.genres) {
      mapped.genres = details.genres.map((g) => g.name);
    }
    mapped.trailerId = trailerKey;
    return mapped;
  } catch (error) {
    console.error("Error getMovieDetails:", error);
    const movie = movies.find((m) => m.id === id);
    if (!movie) throw new Error("Movie not found");
    return movie;
  }
}
async function getMovieVideos(id) {
  if (!TMDB_API_KEY) {
    const movie = movies.find((m) => m.id === id);
    return movie?.trailerId;
  }
  try {
    const data = await fetchFromTmdb(`/movie/${id}/videos`);
    const results = data.results || [];
    const officialTrailer = results.find(
      (v) => v.type === "Trailer" && v.site === "YouTube" && v.name?.toLowerCase().includes("official")
    );
    if (officialTrailer) return officialTrailer.key;
    const generalTrailer = results.find((v) => v.type === "Trailer" && v.site === "YouTube");
    if (generalTrailer) return generalTrailer.key;
    const teaserOrClip = results.find(
      (v) => (v.type === "Teaser" || v.type === "Clip") && v.site === "YouTube"
    );
    if (teaserOrClip) return teaserOrClip.key;
    const firstYoutube = results.find((v) => v.site === "YouTube");
    return firstYoutube?.key;
  } catch (error) {
    console.error("Error getMovieVideos:", error);
    return void 0;
  }
}
async function getMoviesByGenre(genreId, page = 1) {
  if (!TMDB_API_KEY) {
    const genreName = GENRE_MAP[genreId];
    if (!genreName) return movies;
    return movies.filter((m) => m.genres.includes(genreName));
  }
  try {
    const data = await fetchFromTmdb("/discover/movie", {
      with_genres: String(genreId),
      sort_by: "popularity.desc",
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getMoviesByGenre:", error);
    const genreName = GENRE_MAP[genreId];
    return movies.filter((m) => m.genres.includes(genreName || ""));
  }
}
async function getBollywoodMovies(page = 1) {
  const bolly = movies.filter((m) => m.isBollywood || m.country?.toLowerCase().includes("india"));
  if (!TMDB_API_KEY) return bolly.length > 0 ? bolly.slice(0, 15) : movies.slice(0, 10);
  try {
    const data = await fetchFromTmdb("/discover/movie", {
      with_original_language: "hi",
      sort_by: "popularity.desc",
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getBollywoodMovies:", error);
    return bolly.length > 0 ? bolly.slice(0, 15) : movies.slice(0, 10);
  }
}
async function getKoreanMovies(page = 1) {
  const korean = movies.filter((m) => m.isKorean || m.country?.toLowerCase().includes("korea"));
  if (!TMDB_API_KEY) return korean.length > 0 ? korean.slice(0, 15) : movies.slice(0, 10);
  try {
    const data = await fetchFromTmdb("/discover/movie", {
      with_original_language: "ko",
      sort_by: "popularity.desc",
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getKoreanMovies:", error);
    return korean.length > 0 ? korean.slice(0, 15) : movies.slice(0, 10);
  }
}
async function getAnimeMovies(page = 1) {
  const anime = movies.filter((m) => m.isAnime || m.genres.includes("Anime"));
  if (!TMDB_API_KEY) return anime.length > 0 ? anime.slice(0, 15) : movies.slice(0, 10);
  try {
    const data = await fetchFromTmdb("/discover/movie", {
      with_genres: "16",
      with_original_language: "ja",
      sort_by: "popularity.desc",
      page: String(page)
    });
    return data.results.map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getAnimeMovies:", error);
    return anime.length > 0 ? anime.slice(0, 15) : movies.slice(0, 10);
  }
}
async function getPopularMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.slice(4, 10);
  try {
    const data = await fetchFromTmdb("/movie/popular", {
      page: String(page)
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getPopularMovies:", error);
    return movies.slice(4, 10);
  }
}
async function getTopRatedMovies(page = 1) {
  if (!TMDB_API_KEY)
    return movies.slice().sort((a, b) => b.imdb - a.imdb).slice(0, 8);
  try {
    const data = await fetchFromTmdb("/movie/top_rated", {
      page: String(page)
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getTopRatedMovies:", error);
    return movies.slice().sort((a, b) => b.imdb - a.imdb).slice(0, 8);
  }
}
async function getUpcomingMovies(page = 1) {
  if (!TMDB_API_KEY) return movies.slice(2, 8);
  try {
    const data = await fetchFromTmdb("/movie/upcoming", {
      page: String(page)
    });
    return data.results.slice(0, 10).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getUpcomingMovies:", error);
    return movies.slice(2, 8);
  }
}
async function getSimilarMovies(id) {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    const movie = movies.find((m) => m.id === id);
    if (!movie) return [];
    return movies.filter((x) => x.id !== id && x.genres.some((g) => movie.genres.includes(g))).slice(0, 6);
  }
  try {
    const data = await fetchFromTmdb(`/movie/${id}/similar`);
    return data.results.slice(0, 6).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getSimilarMovies:", error);
    return [];
  }
}
async function getMovieRecommendations(id) {
  const isMockId = isNaN(Number(id));
  if (isMockId || !TMDB_API_KEY) {
    return getSimilarMovies(id);
  }
  try {
    const data = await fetchFromTmdb(`/movie/${id}/recommendations`);
    return data.results.slice(0, 6).map(mapTmdbMovie);
  } catch (error) {
    console.error("Error getMovieRecommendations:", error);
    return [];
  }
}
const tmdb = {
  isConfigured: () => !!TMDB_API_KEY,
  getTrending: getTrendingMovies,
  getPopular: getPopularMovies,
  getTopRated: getTopRatedMovies,
  getUpcoming: getUpcomingMovies,
  getByGenre: getMoviesByGenre,
  getBollywood: getBollywoodMovies,
  getKorean: getKoreanMovies,
  getAnime: getAnimeMovies,
  search: searchMovies,
  getDetails: getMovieDetails,
  getSimilar: getSimilarMovies,
  getRecommendations: getMovieRecommendations
};
const API_BASE_URL = "/api";
const isClient = typeof window !== "undefined";
function getAuthHeader() {
  if (!isClient) return {};
  const token = localStorage.getItem("cineverse_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}
async function request(path, options = {}) {
  const customHeaders = {};
  if (isClient) {
    const tmdbKey = localStorage.getItem("cineverse_tmdb_key");
    if (tmdbKey) customHeaders["x-tmdb-key"] = tmdbKey;
    const geminiKey = localStorage.getItem("cineverse_gemini_key");
    if (geminiKey) customHeaders["x-gemini-key"] = geminiKey;
  }
  const headers = {
    "Content-Type": "application/json",
    ...getAuthHeader(),
    ...customHeaders,
    ...options.headers || {}
  };
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Request failed with status ${response.status}`);
  }
  return response.json();
}
function getLocalWatchlist() {
  if (!isClient) return [];
  return JSON.parse(localStorage.getItem("cineverse_watchlist") || "[]");
}
function saveLocalWatchlist(list) {
  if (!isClient) return;
  localStorage.setItem("cineverse_watchlist", JSON.stringify(list));
}
function getLocalFavorites() {
  if (!isClient) return [];
  return JSON.parse(localStorage.getItem("cineverse_favorites") || "[]");
}
function saveLocalFavorites(list) {
  if (!isClient) return;
  localStorage.setItem("cineverse_favorites", JSON.stringify(list));
}
const api = {
  // Authentication
  auth: {
    register: (data) => request("/auth/register", { method: "POST", body: JSON.stringify(data) }),
    login: (data) => request("/auth/login", { method: "POST", body: JSON.stringify(data) }),
    me: () => request("/auth/me")
  },
  // Movies (Client side TMDB API or Express backend routing)
  movies: {
    getTrending: (page) => tmdb.isConfigured() ? tmdb.getTrending(page) : request("/movies/trending").catch(() => tmdb.getTrending(page)),
    getTopRated: (page) => tmdb.isConfigured() ? tmdb.getTopRated(page) : request("/movies/top-rated").catch(() => tmdb.getTopRated(page)),
    getUpcoming: (page) => tmdb.isConfigured() ? tmdb.getUpcoming(page) : request("/movies/upcoming").catch(() => tmdb.getUpcoming(page)),
    search: (query, page) => tmdb.isConfigured() ? tmdb.search(query, page) : request(`/movies/search?q=${encodeURIComponent(query)}&page=${page || 1}`).catch(
      () => tmdb.search(query, page)
    ),
    getDetails: (id) => tmdb.isConfigured() ? tmdb.getDetails(id) : request(`/movies/${id}`).catch(() => tmdb.getDetails(id)),
    getSimilar: (id) => tmdb.isConfigured() ? tmdb.getSimilar(id) : request(`/movies/${id}/similar`).catch(() => tmdb.getSimilar(id)),
    getRecommendations: (id) => tmdb.isConfigured() ? tmdb.getRecommendations(id) : request(`/movies/${id}/recommendations`).catch(
      () => tmdb.getRecommendations(id)
    ),
    getByGenre: (genreId, page) => tmdb.isConfigured() ? tmdb.getByGenre(genreId, page) : request(`/movies/genre/${genreId}?page=${page || 1}`).catch(
      () => tmdb.getByGenre(genreId, page)
    ),
    getBollywood: (page) => tmdb.isConfigured() ? tmdb.getBollywood(page) : request(`/movies/bollywood?page=${page || 1}`).catch(
      () => tmdb.getBollywood(page)
    ),
    getKorean: (page) => tmdb.isConfigured() ? tmdb.getKorean(page) : request(`/movies/korean?page=${page || 1}`).catch(() => tmdb.getKorean(page)),
    getAnime: (page) => tmdb.isConfigured() ? tmdb.getAnime(page) : request(`/movies/anime?page=${page || 1}`).catch(() => tmdb.getAnime(page)),
    getNetflix: (page, genre, type) => request(
      `/movies/netflix?page=${page || 1}${genre ? `&genre=${encodeURIComponent(genre)}` : ""}${type ? `&type=${encodeURIComponent(type)}` : ""}`
    ).catch(() => {
      let results = mockMovies;
      if (genre) results = results.filter((m) => m.genres.some((g) => g.toLowerCase() === genre.toLowerCase()));
      if (type) results = results.filter((m) => m.type?.toLowerCase() === type.toLowerCase());
      return results.slice(((page || 1) - 1) * 20, (page || 1) * 20);
    })
  },
  // Watchlist & Favorites (syncs to MongoDB when logged in, or falls back to LocalStorage when guest)
  watchlist: {
    get: async () => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) return getLocalWatchlist();
      return request("/watchlist").catch(() => getLocalWatchlist());
    },
    add: async (movie) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        const list = getLocalWatchlist();
        if (!list.some((m) => String(m.id) === String(movie.id))) {
          list.push(movie);
          saveLocalWatchlist(list);
        }
        return list;
      }
      return request("/watchlist", { method: "POST", body: JSON.stringify(movie) });
    },
    remove: async (id) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        let list = getLocalWatchlist();
        list = list.filter((m) => String(m.id) !== String(id));
        saveLocalWatchlist(list);
        return list;
      }
      return request(`/watchlist/${id}`, { method: "DELETE" });
    }
  },
  favorites: {
    get: async () => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) return getLocalFavorites();
      return request("/favorites").catch(() => getLocalFavorites());
    },
    add: async (movie) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        const list = getLocalFavorites();
        if (!list.some((m) => String(m.id) === String(movie.id))) {
          list.push(movie);
          saveLocalFavorites(list);
        }
        return list;
      }
      return request("/favorites", { method: "POST", body: JSON.stringify(movie) });
    },
    remove: async (id) => {
      if (!isClient) return [];
      const token = localStorage.getItem("cineverse_token");
      if (!token) {
        let list = getLocalFavorites();
        list = list.filter((m) => String(m.id) !== String(id));
        saveLocalFavorites(list);
        return list;
      }
      return request(`/favorites/${id}`, { method: "DELETE" });
    }
  },
  // AI Assistant
  ai: {
    recommend: (prompt) => request("/ai/recommend", {
      method: "POST",
      body: JSON.stringify({ prompt })
    })
  }
};
const AuthContext = reactExports.createContext(void 0);
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
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
          favorites: userData.favorites || []
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
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.auth.login({ email, password });
      localStorage.setItem("cineverse_token", res.token);
      setUser({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        watchlist: res.user.watchlist || [],
        favorites: res.user.favorites || []
      });
    } catch (error) {
      setLoading(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const res = await api.auth.register({ name, email, password });
      localStorage.setItem("cineverse_token", res.token);
      setUser({
        id: res.user.id,
        name: res.user.name,
        email: res.user.email,
        watchlist: res.user.watchlist || [],
        favorites: res.user.favorites || []
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
    isAuthenticated: !!user
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  const context = reactExports.useContext(AuthContext);
  if (context === void 0) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-8xl text-gradient-red", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl", children: "Scene not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This reel doesn't exist in our cinematic universe." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "/",
        className: "mt-6 inline-flex items-center justify-center rounded-md gradient-red px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red",
        children: "Back to CineVerse"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Cut! Something broke." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try again or head back to the main stage." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-red",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-border px-4 py-2 text-sm", children: "Go home" })
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CineVerse AI — Discover movies that match your mood" },
      {
        name: "description",
        content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant."
      },
      { name: "theme-color", content: "#0a0000" },
      { property: "og:title", content: "CineVerse AI — Discover movies that match your mood" },
      {
        property: "og:description",
        content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CineVerse AI — Discover movies that match your mood" },
      {
        name: "twitter:description",
        content: "AI-powered movie recommendations. Search by genre, actor, or mood. Track your watchlist and chat with our cinematic AI assistant."
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
      },
      {
        name: "twitter:image",
        content: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
      }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$8 = () => import("./watchlist-WsPvX-vP.mjs");
const Route$8 = createFileRoute("/watchlist")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./search-BGlPKti6.mjs");
const Route$7 = createFileRoute("/search")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  validateSearch: (s) => ({
    q: typeof s.q === "string" ? s.q : void 0
  })
});
const $$splitComponentImporter$6 = () => import("./profile-DTczZoCg.mjs");
const Route$6 = createFileRoute("/profile")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./login-BnvM7dB1.mjs");
const Route$5 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./genres-B_sX7VXR.mjs");
const Route$4 = createFileRoute("/genres")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./ai-BUH60koC.mjs");
const Route$3 = createFileRoute("/ai")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-D8thtT8b.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitNotFoundComponentImporter = () => import("./movie._id-B00teHGx.mjs");
const $$splitComponentImporter$1 = () => import("./movie._id-DE4GS3q1.mjs");
const Route$1 = createFileRoute("/movie/$id")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter = () => import("./genre._id-Fs1ikaWj.mjs");
const Route = createFileRoute("/genre/$id")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WatchlistRoute = Route$8.update({
  id: "/watchlist",
  path: "/watchlist",
  getParentRoute: () => Route$9
});
const SearchRoute = Route$7.update({
  id: "/search",
  path: "/search",
  getParentRoute: () => Route$9
});
const ProfileRoute = Route$6.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$9
});
const LoginRoute = Route$5.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$9
});
const GenresRoute = Route$4.update({
  id: "/genres",
  path: "/genres",
  getParentRoute: () => Route$9
});
const AiRoute = Route$3.update({
  id: "/ai",
  path: "/ai",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const MovieIdRoute = Route$1.update({
  id: "/movie/$id",
  path: "/movie/$id",
  getParentRoute: () => Route$9
});
const GenreIdRoute = Route.update({
  id: "/genre/$id",
  path: "/genre/$id",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AiRoute,
  GenresRoute,
  LoginRoute,
  ProfileRoute,
  SearchRoute,
  WatchlistRoute,
  GenreIdRoute,
  MovieIdRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  GENRE_IDS as G,
  Route$7 as R,
  api as a,
  Route$1 as b,
  continueWatching as c,
  Route as d,
  GENRE_MAP as e,
  genres as g,
  movies as m,
  router as r,
  useAuth as u
};
