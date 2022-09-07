import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tarcisiokelson.png',
      userName: 'Tarcísio Kelson',
      role: 'Software Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hello guys! 👋' },
      { type: 'paragraph', content: "I just published another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The name of the project is DoctorCare. 👨‍💻🚀" },
      { type: 'link', content: 'thekelson.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-24 15:42:35'),
  },
  // {
  //   id: 2,
  //   author: {
  //     avatarUrl: 'https://github.com/tiagocassio.png',
  //     userName: 'Tiago Cássio',
  //     role: 'Software Analyst',
  //   },
  //   content: [
  //     { type: 'paragraph', content: 'Hello guys! 👋' },
  //     { type: 'paragraph', content: "I just published another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The name of the project is DoctorCare. 👨‍💻🚀" },
  //     { type: 'link', content: 'thekelson.design/doctorcare' },
  //   ],
  //   publishedAt: new Date('2022-08-23 12:22:35'),
  // },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
