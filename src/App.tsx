import { Header } from "./components/Header/index.js";
import { Sidebar } from "./components/Sidebar/index.js";
import { PostComponent, PostType } from "./components/PostComponent/index.js";

import * as S from "./styles.js";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabipiragibe.png",
      name: "Gabriela Piragibe",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-10-03 17:35:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://media.licdn.com/dms/image/v2/D4D35AQEjpfeuXEH55w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726665683867?e=1730754000&v=beta&t=aIMQGKEBsWnZR6QEuaCvCwexY9ymlriJ8FsjKGczqEw",
      name: "Aline Soares",
      role: "Recruiter",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-10-03 17:35:00"),
  },
];

export const App = () => {
  return (
    <div>
      <Header />
      <S.Wrapper>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <PostComponent
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </S.Wrapper>
    </div>
  );
};
