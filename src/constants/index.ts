import {
  Avatar1,
  Avatar2,
  PostImage1,
  PostImage2,
  PostImage3,
} from "../assets/images";

export interface Post {
  avatar: string;
  user: string;
  followers: string;
  date: string;
  description: string;
  link: string;
  image: string;
  likes: number;
  comments: number;
  reposts: number;
}

const Posts: Post[] = [
  {
    avatar: Avatar1,
    user: "Webrazzi",
    followers: "23,091",
    date: "4d",
    description:
      "A notable example of crowdsourcing in Moov: Operations management with discounts on rental",
    link: "https://buff.ly/3e3QaL7",
    image: PostImage1,
    likes: 1156,
    comments: 18,
    reposts: 11,
  },
  {
    avatar: Avatar2,
    user: "GitHub",
    followers: "1.808.968",
    date: "2s",
    description: `The 2020 State of the Octoverse uncovered COVID's impact on developer contributions, the OSS community pandemic response, and the challenge of securing the world’s software. Learn how developers turned challenges into opportunities on The ReadME Project.`,
    link: "https://buff.ly/3e3QaL7",
    image: PostImage2,
    likes: 2578,
    comments: 75,
    reposts: 37,
  },
  {
    avatar: Avatar1,
    user: "Webrazzi",
    followers: "23,091",
    date: "4a",
    description: "All the details about Oscar Health, which went public",
    link: "https://buff.ly/3e3QaL7",
    image: PostImage3,
    likes: 4536,
    comments: 112,
    reposts: 89,
  },
];

export default Posts;
