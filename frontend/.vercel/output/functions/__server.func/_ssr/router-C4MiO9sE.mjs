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
const appCss = "/assets/styles-B6QFrIOb.css";
const movies = [
  {
    "id": "netflix-s126-q-force",
    "showId": "s126",
    "title": "Q-Force",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Action",
      "Comedy",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 89,
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
    "country": "United States",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s581-mobile-suit-gundam-hathaway",
    "showId": "s581",
    "title": "Mobile Suit Gundam Hathaway",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Action",
      "Anime",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "1h 36m",
    "director": "Shuko Murase",
    "cast": [
      "Kensho Ono",
      "Reina Ueda",
      "Junichi Suwabe"
    ],
    "description": "After Char’s rebellion, Hathaway Noa leads an insurgency against Earth Federation, but meeting an enemy officer and a mysterious woman alters his fate.",
    "country": "Unknown",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s713-silver-skates",
    "showId": "s713",
    "title": "Silver Skates",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Action",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 94,
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
    "country": "Unknown",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1903-all-because-of-you",
    "showId": "s1903",
    "title": "All Because of You",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Action",
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 89,
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
    "country": "Malaysia",
    "rating": "TV-PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2191-the-umbrella-academy",
    "showId": "s2191",
    "title": "The Umbrella Academy",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "2 Seasons",
    "director": "Unknown",
    "cast": [],
    "description": "Reunited by their father's death, estranged siblings with extraordinary powers uncover shocking family secrets – and a looming threat to humanity.",
    "country": "United States, Canada",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1138-the-knight-and-the-princess",
    "showId": "s1138",
    "title": "The Knight and the Princess",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Action",
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 92,
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
    "country": "Egypt, Saudi Arabia",
    "rating": "TV-PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3101-jarhead-law-of-return",
    "showId": "s3101",
    "title": "Jarhead: Law of Return",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Action",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 91,
    "duration": "1h 43m",
    "director": "Don Michael Paul",
    "cast": [
      "Amaury Nolasco",
      "Devon Sawa",
      "Robert Patrick",
      "Jeff Pierre",
      "Ben Cross"
    ],
    "description": "When a U.S. senator’s son is held captive by Hezbollah militiamen, a group of highly trained soldiers ventures into enemy territory to bring him home.",
    "country": "Israel, United States",
    "rating": "R",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(31, 60%, 8%) 0%, hsl(91, 45%, 15%) 50%, hsl(31, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(31, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1378-outlander",
    "showId": "s1378",
    "title": "Outlander",
    "type": "TV Show",
    "year": 2018,
    "genres": [
      "Action",
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 89,
    "duration": "4 Seasons",
    "director": "Unknown",
    "cast": [
      "Caitriona Balfe",
      "Sam Heughan",
      "Tobias Menzies",
      "Gary Lewis",
      "Graham McTavish"
    ],
    "description": "This epic tale adapted from Diana Gabaldon's popular series of fantasy-romance novels focuses on the drama of two time-crossed lovers.",
    "country": "United States",
    "rating": "TV-MA",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(116, 60%, 8%) 0%, hsl(176, 45%, 15%) 50%, hsl(116, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(116, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2452-mirai",
    "showId": "s2452",
    "title": "Mirai",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Action",
      "Adventure",
      "Anime"
    ],
    "imdb": 9.1,
    "rt": 93,
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
    "country": "Japan, United States",
    "rating": "PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s3303-shadow",
    "showId": "s3303",
    "title": "Shadow",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Action",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 93,
    "duration": "1h 56m",
    "director": "Zhang Yimou",
    "cast": [
      "Deng Chao",
      "Sun Li",
      "Ryan Cheng",
      "Wang Qianyuan",
      "Hu Jun"
    ],
    "description": "As three kingdoms struggle for control of a walled city, a figure with a rare power spins a web of intrigue that entangles a king's court.",
    "country": "China, Hong Kong",
    "rating": "TV-14",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(208, 60%, 8%) 0%, hsl(268, 45%, 15%) 50%, hsl(208, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(208, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3726-shooter",
    "showId": "s3726",
    "title": "Shooter",
    "type": "TV Show",
    "year": 2018,
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 93,
    "duration": "3 Seasons",
    "director": "Unknown",
    "cast": [
      "Ryan Phillippe",
      "Omar Epps",
      "David Marciano",
      "Cynthia Addai-Robinson",
      "Shantel VanSanten"
    ],
    "description": "A highly decorated ex-Marine sniper returns to action to foil an assassination plot targeting the president, but soon finds himself framed for murder.",
    "country": "United States",
    "rating": "TV-14",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(103, 60%, 8%) 0%, hsl(163, 45%, 15%) 50%, hsl(103, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(103, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4988-steel-rain",
    "showId": "s4988",
    "title": "Steel Rain",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Action",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 89,
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
    "country": "South Korea",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s388-mimi",
    "showId": "s388",
    "title": "Mimi",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 88,
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
    "country": "Unknown",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s453-a-perfect-fit",
    "showId": "s453",
    "title": "A Perfect Fit",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 94,
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
    "country": "Indonesia",
    "rating": "TV-PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s521-i-think-you-should-leave-with-tim-robinson",
    "showId": "s521",
    "title": "I Think You Should Leave with Tim Robinson",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Comedy"
    ],
    "imdb": 9.1,
    "rt": 91,
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
    "country": "United States",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s806-racket-boys",
    "showId": "s806",
    "title": "Racket Boys",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 87,
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
    "country": "Unknown",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1038-tuesdays-fridays",
    "showId": "s1038",
    "title": "Tuesdays & Fridays",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 88,
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
    "country": "India",
    "rating": "TV-14",
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
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1174-men-on-a-mission",
    "showId": "s1174",
    "title": "Men on a Mission",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 95,
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
    "country": "South Korea",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s1202-abla-fahita-drama-queen",
    "showId": "s1202",
    "title": "Abla Fahita: Drama Queen",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 93,
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
    "country": "Egypt",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1233-dogwashers",
    "showId": "s1233",
    "title": "Dogwashers",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "1h 48m",
    "director": "Carlos Moreno",
    "cast": [
      "Christian Tappan",
      "Anderson Ballesteros",
      "John Álex Toro",
      "Ulises González",
      "Leonor López"
    ],
    "description": "When a narco past his prime refuses to pay a debt to an upstart, only a secret stash of money can save his men. But guess what the gardener just found?",
    "country": "Colombia",
    "rating": "TV-MA",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(247, 60%, 8%) 0%, hsl(307, 45%, 15%) 50%, hsl(247, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(247, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1370-finding-ohana",
    "showId": "s1370",
    "title": "Finding ‘Ohana",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Adventure",
      "Comedy"
    ],
    "imdb": 9.1,
    "rt": 91,
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
    "country": "United States",
    "rating": "PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1186-who-s-the-boss",
    "showId": "s1186",
    "title": "Who's the Boss",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 88,
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
    "country": "Nigeria",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1591-big-mouth",
    "showId": "s1591",
    "title": "Big Mouth",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Comedy"
    ],
    "imdb": 9.1,
    "rt": 92,
    "duration": "4 Seasons",
    "director": "Unknown",
    "cast": [
      "Nick Kroll",
      "John Mulaney",
      "Jessi Klein",
      "Jason Mantzoukas",
      "Jenny Slate"
    ],
    "description": "Teenage friends find their lives upended by the wonders and horrors of puberty in this edgy comedy from real-life pals Nick Kroll and Andrew Goldberg.",
    "country": "United States",
    "rating": "TV-MA",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(150, 60%, 8%) 0%, hsl(210, 45%, 15%) 50%, hsl(150, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(150, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s9-the-great-british-baking-show",
    "showId": "s9",
    "title": "The Great British Baking Show",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "9 Seasons",
    "director": "Andy Devonshire",
    "cast": [
      "Mel Giedroyc",
      "Sue Perkins",
      "Mary Berry",
      "Paul Hollywood"
    ],
    "description": "A talented batch of amateur bakers face off in a 10-week competition, whipping up their best dishes in the hopes of being named the U.K.'s best.",
    "country": "United Kingdom",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s276-the-kingdom",
    "showId": "s276",
    "title": "The Kingdom",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 90,
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
    "country": "Argentina",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s298-navarasa",
    "showId": "s298",
    "title": "Navarasa",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 94,
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
    "country": "India",
    "rating": "TV-MA",
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
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s305-lady-boss-the-jackie-collins-story",
    "showId": "s305",
    "title": "Lady Boss: The Jackie Collins Story",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 93,
    "duration": "1h 37m",
    "director": "Laura Fairrie",
    "cast": [
      "Jackie Collins"
    ],
    "description": '"Queen of Sleaze" or feminist pioneer? Powerhouse novelist Jackie Collins created a brash sex-positive persona while hiding her private struggles.',
    "country": "United Kingdom",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s382-the-snitch-cartel-origins",
    "showId": "s382",
    "title": "The Snitch Cartel: Origins",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 93,
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
    "country": "Unknown",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s464-a-classic-horror-story",
    "showId": "s464",
    "title": "A Classic Horror Story",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Drama",
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 89,
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
    "country": "Italy",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s561-audible",
    "showId": "s561",
    "title": "Audible",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 87,
    "duration": "39m",
    "director": "Matt Ogens",
    "cast": [],
    "description": "Shaken by a friend's suicide, a Deaf high school football player copes with family and relationships while anticipating his final homecoming game.",
    "country": "Unknown",
    "rating": "PG-13",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(124, 60%, 8%) 0%, hsl(184, 45%, 15%) 50%, hsl(124, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(124, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s648-the-parisian-agency-exclusive-properties",
    "showId": "s648",
    "title": "The Parisian Agency: Exclusive Properties",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 87,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Olivier Kretz",
      "Sandrine Kretz",
      "Valentin Kretz",
      "Martin Kretz",
      "Louis Kretz"
    ],
    "description": "This reality series follows the Kretz family and their luxury property business as they help clients buy and sell fabulous homes in France and abroad.",
    "country": "Unknown",
    "rating": "TV-G",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1482-the-rope-curse-2",
    "showId": "s1482",
    "title": "The Rope Curse 2",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Drama",
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 90,
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
    "country": "Taiwan",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2030-the-babysitter-killer-queen",
    "showId": "s2030",
    "title": "The Babysitter: Killer Queen",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Comedy",
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 92,
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
    "country": "United States",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4148-hantu-kak-limah",
    "showId": "s4148",
    "title": "Hantu Kak Limah",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Comedy",
      "Drama",
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 94,
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
    "country": "Malaysia",
    "rating": "TV-PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4242-secrets-in-the-hot-spring",
    "showId": "s4242",
    "title": "Secrets in the Hot Spring",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Comedy",
      "Drama",
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 92,
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
    "country": "Taiwan",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4516-kuntilanak",
    "showId": "s4516",
    "title": "Kuntilanak",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Drama",
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 93,
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
    "country": "Indonesia",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4533-malevolent",
    "showId": "s4533",
    "title": "Malevolent",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "1h 29m",
    "director": "Olaf de Fleur",
    "cast": [
      "Florence Pugh",
      "Ben Lloyd-Hughes",
      "Celia Imrie",
      "James Cosmo",
      "Scott Chambers"
    ],
    "description": "A brother-sister team who fake paranormal encounters for cash get more than they bargained for when a job at a haunted estate turns very, very real.",
    "country": "United Kingdom",
    "rating": "TV-MA",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(280, 60%, 8%) 0%, hsl(340, 45%, 15%) 50%, hsl(280, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(280, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s6591-delirium",
    "showId": "s6591",
    "title": "Delirium",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "1h 36m",
    "director": "Dennis Iliadis",
    "cast": [
      "Topher Grace",
      "Genesis Rodriguez",
      "Patricia Clarkson",
      "Callan Mulvey",
      "Robin Thomas"
    ],
    "description": "A man with a history of mental issues moves into his late parents' mansion and comes to suspect his new home may be haunted.",
    "country": "United States",
    "rating": "R",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(66, 60%, 8%) 0%, hsl(126, 45%, 15%) 50%, hsl(66, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(66, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s7685-our-house",
    "showId": "s7685",
    "title": "Our House",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 87,
    "duration": "1h 30m",
    "director": "Anthony Scott Burns",
    "cast": [
      "Thomas Mann",
      "Nicola Peltz",
      "Percy Hynes White",
      "Kate Moyer",
      "Carlyn Burchell"
    ],
    "description": "A young man invents a device he hopes will generate wireless energy, but instead, it proves to spark sinister, supernatural activity in his home.",
    "country": "Canada, United States, Germany",
    "rating": "PG-13",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(32, 60%, 8%) 0%, hsl(92, 45%, 15%) 50%, hsl(32, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(32, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s8079-st-agatha",
    "showId": "s8079",
    "title": "St. Agatha",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 92,
    "duration": "1h 43m",
    "director": "Darren Lynn Bousman",
    "cast": [
      "Sabrina Kern",
      "Carolyn Hennesy",
      "Courtney Halverson",
      "Shaun Fletcher",
      "Lindsay Seim"
    ],
    "description": "Unwed and pregnant, a young woman flees her abusive home in 1950s Georgia and takes refuge at a mysterious convent with a terrible secret.",
    "country": "United States",
    "rating": "TV-MA",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(87, 60%, 8%) 0%, hsl(147, 45%, 15%) 50%, hsl(87, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(87, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3163-it-comes-at-night",
    "showId": "s3163",
    "title": "It Comes at Night",
    "type": "Movie",
    "year": 2017,
    "genres": [
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "1h 32m",
    "director": "Trey Edward Shults",
    "cast": [
      "Joel Edgerton",
      "Christopher Abbott",
      "Carmen Ejogo",
      "Riley Keough",
      "Kelvin Harrison Jr."
    ],
    "description": "As danger stalks the world outside his isolated home, an overprotective father faces a tough decision when another family shows up seeking help.",
    "country": "United States",
    "rating": "R",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(243, 60%, 8%) 0%, hsl(303, 45%, 15%) 50%, hsl(243, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(243, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s5976-g-man-ig",
    "showId": "s5976",
    "title": "Ég man þig",
    "type": "Movie",
    "year": 2017,
    "genres": [
      "Drama",
      "Horror"
    ],
    "imdb": 9.1,
    "rt": 89,
    "duration": "1h 46m",
    "director": "Óskar Thór Axelsson",
    "cast": [
      "Jóhannes Haukur Jóhannesson",
      "Ágústa Eva Erlendsdóttir",
      "Elma Stefania Agustsdottir",
      "Thor Kristjansson",
      "Anna Gunndís Guðmundsdóttir"
    ],
    "description": "Young urbanites renovating a rundown house, and a psychiatrist grieving his son's disappearance, are connected to a supernatural, decades-old secret.",
    "country": "Iceland",
    "rating": "TV-MA",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(53, 60%, 8%) 0%, hsl(113, 45%, 15%) 50%, hsl(53, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(53, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1095-the-wedding-coach",
    "showId": "s1095",
    "title": "The Wedding Coach",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [],
    "description": "Former bride and forever comedian Jamie Lee shares her irreverent yet practical tips and tricks for wedding planning with struggling lovebirds.",
    "country": "Unknown",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1349-firefly-lane",
    "showId": "s1349",
    "title": "Firefly Lane",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 88,
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
    "country": "United States",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1835-start-up",
    "showId": "s1835",
    "title": "Start-Up",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 94,
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
    "country": "South Korea",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s2276-hook",
    "showId": "s2276",
    "title": "Hook",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 94,
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
    "country": "Thailand",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2413-365-days",
    "showId": "s2413",
    "title": "365 Days",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 88,
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
    "country": "Poland",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2889-hi-bye-mama",
    "showId": "s2889",
    "title": "Hi Bye, Mama!",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 87,
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
    "country": "South Korea",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s335-five-feet-apart",
    "showId": "s335",
    "title": "Five Feet Apart",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 95,
    "duration": "1h 56m",
    "director": "Justin Baldoni",
    "cast": [
      "Haley Lu Richardson",
      "Cole Sprouse",
      "Moisés Arias",
      "Kimberly Hébert Gregory",
      "Parminder Nagra"
    ],
    "description": "A teen with cystic fibrosis shakes up her daily routine and challenges hospital protocol when she falls for a fellow patient.",
    "country": "United States",
    "rating": "PG-13",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(331, 60%, 8%) 0%, hsl(31, 45%, 15%) 50%, hsl(331, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(331, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1957-zulu-man-in-japan",
    "showId": "s1957",
    "title": "Zulu Man in Japan",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 93,
    "duration": "44m",
    "director": "Unknown",
    "cast": [
      "Nasty C"
    ],
    "description": "In this documentary, South African rapper Nasty C hits the stage and streets of Tokyo, introducing himself to the city's sights, sounds and culture.",
    "country": "Unknown",
    "rating": "TV-MA",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(30, 60%, 8%) 0%, hsl(90, 45%, 15%) 50%, hsl(30, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(30, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3217-the-charming-stepmom",
    "showId": "s3217",
    "title": "The Charming Stepmom",
    "type": "TV Show",
    "year": 2019,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 91,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Shahkrit Yamnarm",
      "View Wannarot Sontichai",
      "Krittanai Arsalprakit",
      "Ployshompoo Supasap",
      "Boriboon Chanrueng"
    ],
    "description": "A quirky fashion student becomes the nanny of a handsome widower’s three kids, experiencing a series of silly antics and schemes.",
    "country": "Unknown",
    "rating": "TV-14",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(2, 60%, 8%) 0%, hsl(62, 45%, 15%) 50%, hsl(2, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(2, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3384-echo-in-the-canyon",
    "showId": "s3384",
    "title": "Echo in the Canyon",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "1h 22m",
    "director": "Andrew Slater",
    "cast": [
      "Jakob Dylan",
      "Ringo Starr",
      "Michelle Phillips",
      "Stephen Stills",
      "Regina Spektor"
    ],
    "description": "An affectionate documentary looks back at the mid-1960s, when Hollywood’s Laurel Canyon was a creative nexus for young, innovative musicians.",
    "country": "United States",
    "rating": "PG-13",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(61, 60%, 8%) 0%, hsl(121, 45%, 15%) 50%, hsl(61, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(61, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s41-he-man-and-the-masters-of-the-universe",
    "showId": "s41",
    "title": "He-Man and the Masters of the Universe",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Adventure",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 91,
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
    "country": "United States",
    "rating": "TV-Y7",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s91-paradise-hills",
    "showId": "s91",
    "title": "Paradise Hills",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 95,
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
    "country": "Spain, United States",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3859-the-wandering-earth",
    "showId": "s3859",
    "title": "The Wandering Earth",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 92,
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
    "country": "China",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s8677-viking-destiny",
    "showId": "s8677",
    "title": "Viking Destiny",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 95,
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
    "country": "United Kingdom, Belgium",
    "rating": "R",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s6601-devil-s-gate",
    "showId": "s6601",
    "title": "Devil's Gate",
    "type": "Movie",
    "year": 2017,
    "genres": [
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 91,
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
    "country": "Canada",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s5671-ice-fantasy",
    "showId": "s5671",
    "title": "Ice Fantasy",
    "type": "TV Show",
    "year": 2016,
    "genres": [
      "Action",
      "Drama",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Feng Shaofeng",
      "Victoria Song",
      "Ma Tianyu",
      "Zhang Meng",
      "Hee-seon Kim"
    ],
    "description": "The Ice Tribe prince journeys to a sacred mountain to vanquish evil but soon finds himself at war with the Fire Tribe, led by his long-lost brother.",
    "country": "China",
    "rating": "TV-14",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(21, 60%, 8%) 0%, hsl(81, 45%, 15%) 50%, hsl(21, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(21, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s6336-blood-treasures",
    "showId": "s6336",
    "title": "Blood & Treasures",
    "type": "TV Show",
    "year": 2016,
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 95,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Nawat Kulrattanarak",
      "Woranuch Wongsawan",
      "Jespipat Tilapornputt",
      "Paramej Noiam",
      "Phutharit Prombandal"
    ],
    "description": "Condemned by a centuries-old vow to protect her kingdom's treasures, an embittered spirit returns to seek justice against the man who wronged her.",
    "country": "Thailand",
    "rating": "TV-14",
    "mood": [
      "mind bending",
      "futuristic",
      "epic"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(213, 60%, 8%) 0%, hsl(273, 45%, 15%) 50%, hsl(213, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(213, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s6703-equals",
    "showId": "s6703",
    "title": "Equals",
    "type": "Movie",
    "year": 2015,
    "genres": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "1h 42m",
    "director": "Drake Doremus",
    "cast": [
      "Nicholas Hoult",
      "Kristen Stewart",
      "Jacki Weaver",
      "Guy Pearce",
      "Rebecca Hazlewood"
    ],
    "description": "Two young lovers depart from the norm simply by having romantic feelings for each other in a society where humans have been relieved of all emotions.",
    "country": "United States, Indonesia",
    "rating": "PG-13",
    "mood": [
      "mind bending",
      "futuristic",
      "epic"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(63, 60%, 8%) 0%, hsl(123, 45%, 15%) 50%, hsl(63, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(63, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s7858-resident-evil-afterlife",
    "showId": "s7858",
    "title": "Resident Evil: Afterlife",
    "type": "Movie",
    "year": 2010,
    "genres": [
      "Action",
      "Horror",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 95,
    "duration": "1h 37m",
    "director": "Paul W.S. Anderson",
    "cast": [
      "Milla Jovovich",
      "Ali Larter",
      "Kim Coates",
      "Shawn Roberts",
      "Sergio Peris-Mencheta"
    ],
    "description": "The Undead Apocalypse continues as super-soldier Alice finds her way to a supposed sanctuary in Los Angeles, which may just be a deadly trap.",
    "country": "Germany, France, United States, Canada, United Kingdom",
    "rating": "R",
    "mood": [
      "dark",
      "tense",
      "atmospheric"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(249, 60%, 8%) 0%, hsl(309, 45%, 15%) 50%, hsl(249, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(249, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s7079-inkheart",
    "showId": "s7079",
    "title": "Inkheart",
    "type": "Movie",
    "year": 2008,
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 95,
    "duration": "1h 46m",
    "director": "Iain Softley",
    "cast": [
      "Brendan Fraser",
      "Paul Bettany",
      "Helen Mirren",
      "Jim Broadbent",
      "Andy Serkis"
    ],
    "description": "Unbeknownst to his 12-year-old daughter, a bookbinder has a secret ability to bring characters to life by reading their stories out loud.",
    "country": "Germany, United Kingdom, United States",
    "rating": "PG",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(60, 60%, 8%) 0%, hsl(120, 45%, 15%) 50%, hsl(60, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(60, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s8308-the-forbidden-kingdom",
    "showId": "s8308",
    "title": "The Forbidden Kingdom",
    "type": "Movie",
    "year": 2008,
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "imdb": 9.1,
    "rt": 93,
    "duration": "1h 44m",
    "director": "Rob Minkoff",
    "cast": [
      "Jackie Chan",
      "Jet Li",
      "Collin Chou",
      "Liu Yifei",
      "Li Bingbing"
    ],
    "description": "Jackie Chan and Jet Li star in this rousing adventure about a martial arts movie fan who finds a mystical staff that transports him to ancient China.",
    "country": "United States, China",
    "rating": "PG-13",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(340, 60%, 8%) 0%, hsl(40, 45%, 15%) 50%, hsl(340, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(340, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2365-a-whisker-away",
    "showId": "s2365",
    "title": "A Whisker Away",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Adventure",
      "Anime",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 90,
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
    "country": "Japan",
    "rating": "TV-PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s4532-lost-song",
    "showId": "s4532",
    "title": "LOST SONG",
    "type": "TV Show",
    "year": 2018,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 87,
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
    "country": "Japan",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s3785-march-comes-in-like-a-lion",
    "showId": "s3785",
    "title": "March Comes in Like a Lion",
    "type": "TV Show",
    "year": 2017,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 90,
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
    "country": "Japan",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s5097-fullmetal-alchemist-brotherhood",
    "showId": "s5097",
    "title": "Fullmetal Alchemist: Brotherhood",
    "type": "TV Show",
    "year": 2010,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 88,
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
    "country": "Japan",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s59-naruto-shipp-den-the-movie-the-will-of-fire",
    "showId": "s59",
    "title": "Naruto Shippûden the Movie: The Will of Fire",
    "type": "Movie",
    "year": 2009,
    "genres": [
      "Action",
      "Anime",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 88,
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
    "country": "Japan",
    "rating": "TV-PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s401-revelations-the-masters-of-the-universe-revelation",
    "showId": "s401",
    "title": "Revelations: The Masters of the Universe: Revelation Aftershow",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Anime",
      "Comedy"
    ],
    "imdb": 9,
    "rt": 88,
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
    "country": "Unknown",
    "rating": "TV-PG",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s1433-the-idhun-chronicles",
    "showId": "s1433",
    "title": "The Idhun Chronicles",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 9,
    "rt": 93,
    "duration": "2 Seasons",
    "director": "Maite Ruiz De Austri",
    "cast": [
      "Michelle Jenner",
      "Itzan Escamilla",
      "Sergio Mur",
      "Nico Romero",
      "Carlos Cuevas"
    ],
    "description": "A boy suddenly orphaned fights his parents' killer to save a planet, and discovers a new world of danger — and wonder.",
    "country": "Spain",
    "rating": "TV-14",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(114, 60%, 8%) 0%, hsl(174, 45%, 15%) 50%, hsl(114, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(114, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s266-rascal-does-not-dream-of-bunny-girl-senpai",
    "showId": "s266",
    "title": "Rascal Does Not Dream of Bunny Girl Senpai",
    "type": "TV Show",
    "year": 2018,
    "genres": [
      "Anime",
      "Drama",
      "Romance"
    ],
    "imdb": 9,
    "rt": 91,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Kaito Ishikawa",
      "Asami Seto",
      "Nao Toyama",
      "Atsumi Tanezaki",
      "Maaya Uchida"
    ],
    "description": 'After experiencing "puberty syndrome" himself, high school pariah Sakuta keeps meeting girls suffering from it, including his sister and actor Mai.',
    "country": "Japan",
    "rating": "TV-14",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(61, 60%, 8%) 0%, hsl(121, 45%, 15%) 50%, hsl(61, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(61, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s2967-pop-team-epic",
    "showId": "s2967",
    "title": "Pop Team Epic",
    "type": "TV Show",
    "year": 2018,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 9,
    "rt": 91,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [],
    "description": "This animated adaptation of the quirky four-panel comic brings the random exploits of Popuko and Pipimi to life.",
    "country": "Japan",
    "rating": "TV-14",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s3070-pok-mon-the-movie-power-of-us",
    "showId": "s3070",
    "title": "Pokémon the Movie: Power of Us",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Adventure",
      "Anime"
    ],
    "imdb": 9,
    "rt": 89,
    "duration": "1h 38m",
    "director": "Tetsuo Yajima",
    "cast": [
      "Gim Yeong-seon",
      "Ikue Otani",
      "O Inseong",
      "I Sen-ho",
      "Jeong-shin Woo"
    ],
    "description": "Ash and Pikachu journey to Fula City for its Wind Festival. When disaster looms, they must work together with a group of misfits to save the day!",
    "country": "Japan",
    "rating": "TV-Y7",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(342, 60%, 8%) 0%, hsl(42, 45%, 15%) 50%, hsl(342, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(342, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s720-power-rangers-dino-fury",
    "showId": "s720",
    "title": "Power Rangers Dino Fury",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Adventure"
    ],
    "imdb": 9.1,
    "rt": 90,
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
    "country": "United States",
    "rating": "TV-G",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s786-cocomelon",
    "showId": "s786",
    "title": "Cocomelon",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Adventure"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "3 Seasons",
    "director": "Unknown",
    "cast": [],
    "description": "Learn letters, numbers, animal sounds and more with J.J. in this edutaining series that brings fun times with nursery rhymes for the whole family!",
    "country": "United States",
    "rating": "TV-Y",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2081-thomas-and-friends",
    "showId": "s2081",
    "title": "Thomas and Friends",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Adventure"
    ],
    "imdb": 9.1,
    "rt": 93,
    "duration": "2 Seasons",
    "director": "Greg Tiernan",
    "cast": [
      "Michael Angelis",
      "Ben Small",
      "Keith Wickham",
      "Kerry Shale"
    ],
    "description": "This animated children's series follows the adventures of Thomas, a cheerful blue tank engine who lives on the island of Sodor.",
    "country": "United Kingdom",
    "rating": "TV-Y",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2209-dragons-rescue-riders-secrets-of-the-songwing",
    "showId": "s2209",
    "title": "Dragons: Rescue Riders: Secrets of the Songwing",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Adventure",
      "Comedy"
    ],
    "imdb": 9.1,
    "rt": 91,
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
    "country": "United States",
    "rating": "TV-Y",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2300-the-baby-sitters-club",
    "showId": "s2300",
    "title": "The Baby-Sitters Club",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Adventure",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 91,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Sophie Grace",
      "Momona Tamada",
      "Shay Rudolph",
      "Malia Baker",
      "Xochitl Gomez"
    ],
    "description": "Ann M. Martin's beloved books get a modern update in this series that follows a group of girlfriends and their homegrown babysitting business.",
    "country": "United States",
    "rating": "TV-G",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(114, 60%, 8%) 0%, hsl(174, 45%, 15%) 50%, hsl(114, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(114, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3036-harvey-street-kids",
    "showId": "s3036",
    "title": "Harvey Street Kids",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Adventure",
      "Comedy"
    ],
    "imdb": 9.1,
    "rt": 91,
    "duration": "4 Seasons",
    "director": "Unknown",
    "cast": [
      "Lauren Lapkus",
      "Stephanie Lemelin",
      "Kelly McCreary",
      "Atticus Shaffer",
      "Danny Pudi"
    ],
    "description": "Kids rule in a place called Harvey Street, where a trio of girls right wrongs, ice cream is always an option, and every day feels like Saturday.",
    "country": "United States",
    "rating": "TV-Y7",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(111, 60%, 8%) 0%, hsl(171, 45%, 15%) 50%, hsl(111, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(111, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3100-grand-daddy-day-care",
    "showId": "s3100",
    "title": "Grand-Daddy Day Care",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Adventure",
      "Comedy"
    ],
    "imdb": 9.1,
    "rt": 88,
    "duration": "1h 36m",
    "director": "Ron Oliver",
    "cast": [
      "Danny Trejo",
      "Reno Wilson",
      "Margaret Avery",
      "Barry Bostwick",
      "Julia Duffy"
    ],
    "description": "A frustrated novelist with money problems opens an unsanctioned senior center at his house to make quick cash and occupy his cumbersome father-in-law.",
    "country": "United States",
    "rating": "PG-13",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(329, 60%, 8%) 0%, hsl(29, 45%, 15%) 50%, hsl(329, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(329, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3162-a-family-reunion-christmas",
    "showId": "s3162",
    "title": "A Family Reunion Christmas",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Adventure",
      "Comedy"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "29m",
    "director": "Robbie Countryman",
    "cast": [
      "Loretta Devine",
      "Tia Mowry-Hardrict",
      "Anthony Alabi",
      "Talia Jackson",
      "Isaiah Russell-Bailey"
    ],
    "description": "M'Dear and her sisters struggle to keep their singing act together before a church Christmas pageant while Grandpa teaches the kids a valuable lesson.",
    "country": "United States",
    "rating": "TV-PG",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(85, 60%, 8%) 0%, hsl(145, 45%, 15%) 50%, hsl(85, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(85, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3396-chuchutv-bedtime-stories-moral-stories-for-kids-hi",
    "showId": "s3396",
    "title": "ChuChuTV Bedtime Stories & Moral Stories for Kids (Hindi)",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Adventure"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "56m",
    "director": "Unknown",
    "cast": [],
    "description": "In this collection of stories, ChuChu and her pals meet a man in need, Chiku must change a bad habit and ChaCha gets a lesson in management.",
    "country": "Unknown",
    "rating": "TV-Y",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(198, 60%, 8%) 0%, hsl(258, 45%, 15%) 50%, hsl(198, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(198, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s904-nayattu",
    "showId": "s904",
    "title": "Nayattu",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 92,
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
    "country": "India",
    "rating": "TV-MA",
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
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1329-crime-scene-the-vanishing-at-the-cecil-hotel",
    "showId": "s1329",
    "title": "Crime Scene: The Vanishing at the Cecil Hotel",
    "type": "TV Show",
    "year": 2021,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 89,
    "duration": "1 Season",
    "director": "Joe Berlinger",
    "cast": [],
    "description": `The notorious Cecil Hotel grows in infamy when guest Elisa Lam vanishes. From the creator of "The Ted Bundy Tapes," a dive into crime's darkest places.`,
    "country": "United States",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1565-futmalls-com",
    "showId": "s1565",
    "title": "Futmalls.com",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 95,
    "duration": "1 Season",
    "director": "Lai Chun-yu",
    "cast": [
      "Bryan Chang",
      "Eugenie Liu",
      "Bruce He",
      "Ivy Shao",
      "Allison Lin"
    ],
    "description": "Strange occurrences afflict a group of people after they purchase items on a shopping website from the future.",
    "country": "Unknown",
    "rating": "TV-14",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(127, 60%, 8%) 0%, hsl(187, 45%, 15%) 50%, hsl(127, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(127, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2671-hasmukh",
    "showId": "s2671",
    "title": "Hasmukh",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 87,
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
    "country": "India",
    "rating": "TV-MA",
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
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3037-jamtara-sabka-number-ayega",
    "showId": "s3037",
    "title": "Jamtara - Sabka Number Ayega",
    "type": "TV Show",
    "year": 2020,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 93,
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
    "country": "India",
    "rating": "TV-MA",
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
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s166-oldsters",
    "showId": "s166",
    "title": "Oldsters",
    "type": "TV Show",
    "year": 2019,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 89,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Patricio Contreras",
      "Alejandro Goic",
      "Sergio Hernández",
      "Mariana Loyola Ruz",
      "Alejandro Trejo"
    ],
    "description": "Three friends in their 70s step out of retirement to become a band of outlaws whose mission is to help those let down by the justice system.",
    "country": "Unknown",
    "rating": "TV-MA",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(35, 60%, 8%) 0%, hsl(95, 45%, 15%) 50%, hsl(35, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(35, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1775-hidden-in-plain-sight",
    "showId": "s1775",
    "title": "Hidden in Plain Sight",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 89,
    "duration": "1h 27m",
    "director": "Stacia Crawford",
    "cast": [
      "Victoria Barabas",
      "Gino Anthony Pesi",
      "Jake Allyn",
      "Deborah Van Valkenburgh",
      "Jessica Meraz"
    ],
    "description": "A woman stages her own suicide but still lives in fear of her abusive ex-boyfriend tracking her down and stealing the son he never knew he had.",
    "country": "United States",
    "rating": "TV-14",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(111, 60%, 8%) 0%, hsl(171, 45%, 15%) 50%, hsl(111, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(111, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s1713-ludo",
    "showId": "s1713",
    "title": "Ludo",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 95,
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
    "country": "India",
    "rating": "TV-MA",
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
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2899-yeh-ballet",
    "showId": "s2899",
    "title": "Yeh Ballet",
    "type": "Movie",
    "year": 2020,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 95,
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
    "country": "India",
    "rating": "TV-MA",
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
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2941-jada",
    "showId": "s2941",
    "title": "Jada",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 91,
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
    "country": "India",
    "rating": "TV-14",
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
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3700-romeo-akbar-walter",
    "showId": "s3700",
    "title": "Romeo Akbar Walter",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 88,
    "duration": "2h 21m",
    "director": "Robbie Grewal",
    "cast": [
      "John Abraham",
      "Jackie Shroff",
      "Mouni Roy",
      "Sikander Kher",
      "Raghuvir Yadav"
    ],
    "description": "In 1971, a fallen army major’s son is tapped by India's Research and Analysis Wing to serve as an undercover agent in Pakistan in the lead-up to war.",
    "country": "India",
    "rating": "TV-14",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(173, 60%, 8%) 0%, hsl(233, 45%, 15%) 50%, hsl(173, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(173, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s2017-ani-dr-kashinath-ghanekar",
    "showId": "s2017",
    "title": "Ani... Dr. Kashinath Ghanekar",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 88,
    "duration": "2h 37m",
    "director": "Abhijeet Deshpande",
    "cast": [
      "Subodh Bhave",
      "Vaidehi Parshurami",
      "Nandita Patkar",
      "Sonali Kulkarni",
      "Sumeet Raghvan"
    ],
    "description": "From his singular career to his personal demons, this biopic chronicles the short yet prolific life of the Marathi dentist-turned-superstar.",
    "country": "India",
    "rating": "TV-14",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(324, 60%, 8%) 0%, hsl(24, 45%, 15%) 50%, hsl(324, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(324, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s3662-bogda",
    "showId": "s3662",
    "title": "Bogda",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 92,
    "duration": "2h 41m",
    "director": "Nisheeta Keni",
    "cast": [
      "Suhas Joshi",
      "Mrunmayee Deshpande",
      "Rohit Kokate",
      "Ajinkya Bhosale",
      "Jayant Gadekar"
    ],
    "description": "An aspiring dancer accompanies her terminally ill mother on one last road trip that alternately strains and strengthens their knotty relationship.",
    "country": "India",
    "rating": "TV-PG",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(162, 60%, 8%) 0%, hsl(222, 45%, 15%) 50%, hsl(162, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(162, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4210-next-enti",
    "showId": "s4210",
    "title": "Next Enti?",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "1h 57m",
    "director": "Kunal Kohli",
    "cast": [
      "Navdeep",
      "Larissa Bonesi",
      "Sarathbabu",
      "Tamannaah Bhatia",
      "Sundeep Kishan"
    ],
    "description": "Clashing views on intimacy lead a couple to go their separate ways to reflect on commitment and companionship, before suddenly crossing paths again.",
    "country": "India",
    "rating": "TV-14",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(17, 60%, 8%) 0%, hsl(77, 45%, 15%) 50%, hsl(17, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(17, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4412-bucket-list",
    "showId": "s4412",
    "title": "Bucket List",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 89,
    "duration": "2h 9m",
    "director": "Tejas Prabha Vijay Deoskar",
    "cast": [
      "Madhuri Dixit",
      "Sumeet Raghvan",
      "Renuka Shahane",
      "Milind Pathak",
      "Vandana Gupte"
    ],
    "description": "After getting a heart transplant, a 40-year-old homemaker in Pune makes the life-changing decision to complete the bucket list of her 20-year-old donor.",
    "country": "India",
    "rating": "TV-14",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(154, 60%, 8%) 0%, hsl(214, 45%, 15%) 50%, hsl(154, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(154, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4577-khido-khundi",
    "showId": "s4577",
    "title": "Khido Khundi",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "2h 31m",
    "director": "Rohit Jugraj",
    "cast": [
      "Ranjit Bawa",
      "Mandy Takhar",
      "Manav Vij",
      "Elnaaz Norouzi",
      "Mahavir Bhullar"
    ],
    "description": "An embittered former hockey star must engage with the sport again to help his brother assemble a team for a momentous match against the British.",
    "country": "India",
    "rating": "TV-14",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(123, 60%, 8%) 0%, hsl(183, 45%, 15%) 50%, hsl(123, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(123, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s4826-lust-stories",
    "showId": "s4826",
    "title": "Lust Stories",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 92,
    "duration": "2h 1m",
    "director": "Zoya Akhtar, Karan Johar, Anurag Kashyap, Dibakar Banerjee",
    "cast": [
      "Vicky Kaushal",
      "Bhumi Pednekar",
      "Radhika Apte",
      "Neha Dhupia",
      "Manisha Koirala"
    ],
    "description": `In the companion to 2013's "Bombay Talkies," four short films by four of India's biggest directors explore love, sex and relationships in modern India.`,
    "country": "India",
    "rating": "TV-MA",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(146, 60%, 8%) 0%, hsl(206, 45%, 15%) 50%, hsl(146, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(146, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": true,
    "isKorean": false,
    "isAnime": false
  },
  {
    "id": "netflix-s5023-",
    "showId": "s5023",
    "title": "반드시 잡는다",
    "type": "Movie",
    "year": 2017,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "1h 50m",
    "director": "Hong-seon Kim",
    "cast": [
      "Baek Yoon-sik"
    ],
    "description": "After people in his town start turning up dead, a grumpy landlord is visited by a man who recounts an unsolved serial murder case from 30 years ago.",
    "country": "South Korea",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s5032-forgotten",
    "showId": "s5032",
    "title": "Forgotten",
    "type": "Movie",
    "year": 2017,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 95,
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
    "country": "South Korea",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s7441-memoir-of-a-murderer",
    "showId": "s7441",
    "title": "Memoir of a Murderer",
    "type": "Movie",
    "year": 2017,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 94,
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
    "country": "South Korea",
    "rating": "TV-MA",
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
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s5434-28-moons",
    "showId": "s5434",
    "title": "28 Moons",
    "type": "TV Show",
    "year": 2016,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 91,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Jin-sung Yang",
      "Kyu-jong Kim",
      "Tae-hwan Kang",
      "Geummi"
    ],
    "description": "When her fiancé acts strangely upon receiving a mysterious invitation, a florist sets out to find out the truth behind the tiny scrap of paper.",
    "country": "South Korea",
    "rating": "TV-PG",
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
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s7671-operation-chromite",
    "showId": "s7671",
    "title": "Operation Chromite",
    "type": "Movie",
    "year": 2016,
    "genres": [
      "Action",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 88,
    "duration": "1h 51m",
    "director": "John H. Lee",
    "cast": [
      "Jung-jae Lee",
      "Beom-su Lee",
      "Liam Neeson",
      "Se-yeon Jin",
      "Jun-ho Jeong"
    ],
    "description": "To pave the way for a major amphibious invasion, a team of South Korean spies goes behind enemy lines to steal a map of North Korean coastal defenses.",
    "country": "South Korea",
    "rating": "NR",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(254, 60%, 8%) 0%, hsl(314, 45%, 15%) 50%, hsl(254, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(254, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s7102-",
    "showId": "s7102",
    "title": "마녀사냥",
    "type": "TV Show",
    "year": 2015,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9.1,
    "rt": 90,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Si-kyung Sung",
      "Se-yoon Yoo",
      "Dong-yup Shin",
      "Ji-woong Heo",
      "Sam Hammington"
    ],
    "description": "Four Korean celebrity men and guest stars of both genders discuss women, sex and relationships – to an unprecedented degree of openness.",
    "country": "South Korea",
    "rating": "TV-MA",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(95, 60%, 8%) 0%, hsl(155, 45%, 15%) 50%, hsl(95, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(95, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s5236-26-years",
    "showId": "s5236",
    "title": "26 Years",
    "type": "Movie",
    "year": 2012,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdb": 9.1,
    "rt": 94,
    "duration": "2h 15m",
    "director": "Geun-hyun Cho",
    "cast": [
      "Goo Jin",
      "Hye-jin Han",
      "Soo-bin Bae",
      "Seul-ong Im",
      "Kyeong-yeong Lee"
    ],
    "description": "Twenty-six years after the 1980 massacre at Gwangju, South Korea, three relatives of the victims come together to avenge the infamous orchestrator.",
    "country": "South Korea",
    "rating": "TV-MA",
    "mood": [
      "tense",
      "dark",
      "mysterious"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(338, 60%, 8%) 0%, hsl(38, 45%, 15%) 50%, hsl(338, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(338, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s5676-miss-panda-mr-hedgehog",
    "showId": "s5676",
    "title": "Miss Panda & Mr. Hedgehog",
    "type": "TV Show",
    "year": 2012,
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdb": 9.1,
    "rt": 88,
    "duration": "1 Season",
    "director": "Unknown",
    "cast": [
      "Dong-hae Lee",
      "Seung-ah Yoon",
      "Jin-hyuk Choi",
      "So-young Yoo",
      "Yeo-jin Hong"
    ],
    "description": "When a gifted patissier with a gloomy past meets a bright and easygoing café owner, he begins to shed his thorns and learns to love again.",
    "country": "South Korea",
    "rating": "TV-PG",
    "mood": [
      "romantic",
      "tender",
      "heartwarming"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(260, 60%, 8%) 0%, hsl(320, 45%, 15%) 50%, hsl(260, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(260, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s1469-what-happened-to-mr-cha",
    "showId": "s1469",
    "title": "What Happened to Mr. Cha?",
    "type": "Movie",
    "year": 2021,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdb": 9,
    "rt": 94,
    "duration": "1h 42m",
    "director": "Kim Dong-kyu",
    "cast": [
      "Cha In-pyo",
      "Cho Dal-hwan",
      "Song Jae-ryong"
    ],
    "description": "With the peak of his career long behind him, an actor clings to his past glory — until a sudden wake-up call forces him to face who he's become.",
    "country": "South Korea",
    "rating": "TV-MA",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(30, 60%, 8%) 0%, hsl(90, 45%, 15%) 50%, hsl(30, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(30, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s3420-park-na-rae-glamour-warning",
    "showId": "s3420",
    "title": "Park Na-rae: Glamour Warning",
    "type": "Movie",
    "year": 2019,
    "genres": [
      "Comedy"
    ],
    "imdb": 9,
    "rt": 92,
    "duration": "1h 3m",
    "director": "Kim Joo-hyung",
    "cast": [
      "Park Na-rae"
    ],
    "description": "Korea’s beloved comedian and favorite big sister figure talks sex, relationships and celebrity life. And she’s sassier and dirtier than ever before.",
    "country": "South Korea",
    "rating": "TV-MA",
    "mood": [
      "funny",
      "feel-good",
      "warm"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(344, 60%, 8%) 0%, hsl(44, 45%, 15%) 50%, hsl(344, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(344, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s4193-revenger",
    "showId": "s4193",
    "title": "Revenger",
    "type": "Movie",
    "year": 2018,
    "genres": [
      "Action",
      "Drama"
    ],
    "imdb": 9,
    "rt": 92,
    "duration": "1h 42m",
    "director": "Lee Seung-won",
    "cast": [
      "Bruce Khan",
      "Park Hee-soon",
      "Yoon Jin-seo",
      "Kim In-kwon",
      "Kim Na-yeon"
    ],
    "description": "Hell-bent on avenging the murder of his family, a former detective infiltrates a remote island that serves as a prison for vicious death row criminals.",
    "country": "South Korea",
    "rating": "TV-MA",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(290, 60%, 8%) 0%, hsl(350, 45%, 15%) 50%, hsl(290, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(290, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": true,
    "isAnime": false
  },
  {
    "id": "netflix-s4271-last-hope",
    "showId": "s4271",
    "title": "LAST HOPE",
    "type": "TV Show",
    "year": 2018,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 9,
    "rt": 89,
    "duration": "2 Seasons",
    "director": "Unknown",
    "cast": [
      "Tomoaki Maeno",
      "Kana Hanazawa",
      "Kenjiro Tsuda",
      "Nao Toyama",
      "Yuma Uchida"
    ],
    "description": "After causing the near extinction of mankind seven years ago, genius scientist Leon Lau must now fight the ecological disaster he unwittingly created.",
    "country": "Japan",
    "rating": "TV-14",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(30, 60%, 8%) 0%, hsl(90, 45%, 15%) 50%, hsl(30, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(30, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s4470-fate-extra-last-encore",
    "showId": "s4470",
    "title": "Fate/EXTRA Last Encore",
    "type": "TV Show",
    "year": 2018,
    "genres": [
      "Anime",
      "Drama"
    ],
    "imdb": 9,
    "rt": 86,
    "duration": "2 Seasons",
    "director": "Unknown",
    "cast": [
      "Atsushi Abe",
      "Sakura Tange",
      "Kana Ueda",
      "Hiroshi Kamiya",
      "Noriko Shitaya"
    ],
    "description": "Hakuno Kishinami finds himself in the midst of a Holy Grail war with no memories of how he got there. Through his confusion, he must fight to survive.",
    "country": "Japan",
    "rating": "TV-MA",
    "mood": [
      "emotional",
      "thoughtful",
      "deep"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(341, 60%, 8%) 0%, hsl(41, 45%, 15%) 50%, hsl(341, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(341, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
  },
  {
    "id": "netflix-s591-sailor-moon-crystal",
    "showId": "s591",
    "title": "Sailor Moon Crystal",
    "type": "TV Show",
    "year": 2016,
    "genres": [
      "Adventure",
      "Anime"
    ],
    "imdb": 9,
    "rt": 88,
    "duration": "3 Seasons",
    "director": "Unknown",
    "cast": [
      "Kotono Mitsuishi",
      "Hisako Kanemoto",
      "Rina Satou",
      "Ami Koshimizu",
      "Shizuka Ito"
    ],
    "description": "Middle schooler Usagi Tsukino and her friends learn that they have the power to transform into Sailor Guardians, protecting the world from darkness.",
    "country": "Unknown",
    "rating": "TV-Y7",
    "mood": [
      "intense",
      "exciting",
      "stylish"
    ],
    "streaming": [
      "Netflix"
    ],
    "posterGradient": "linear-gradient(135deg, hsl(133, 60%, 8%) 0%, hsl(193, 45%, 15%) 50%, hsl(133, 60%, 8%) 100%)",
    "backdropGradient": "linear-gradient(135deg, #050000 0%, hsl(133, 55%, 10%) 50%, #050000 100%)",
    "isBollywood": false,
    "isKorean": false,
    "isAnime": true
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
const $$splitComponentImporter$8 = () => import("./watchlist-BXmWzbDm.mjs");
const Route$8 = createFileRoute("/watchlist")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./search-BlB4rDMM.mjs");
const Route$7 = createFileRoute("/search")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  validateSearch: (s) => ({
    q: typeof s.q === "string" ? s.q : void 0
  })
});
const $$splitComponentImporter$6 = () => import("./profile-CLwJB9kX.mjs");
const Route$6 = createFileRoute("/profile")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./login-Ccbqm4El.mjs");
const Route$5 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./genres-Lxf516y7.mjs");
const Route$4 = createFileRoute("/genres")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./ai-UPPgD5sC.mjs");
const Route$3 = createFileRoute("/ai")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-Bq9AIABW.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitNotFoundComponentImporter = () => import("./movie._id---9SZmiV.mjs");
const $$splitComponentImporter$1 = () => import("./movie._id-BVTlQUMy.mjs");
const Route$1 = createFileRoute("/movie/$id")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter = () => import("./genre._id-BfhtOFj_.mjs");
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
