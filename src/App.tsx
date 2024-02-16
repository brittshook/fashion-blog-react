import "./App.css";
import { BlogPost } from "./components/BlogPost";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const posts = [
    {
      date: "11/12/20",
      title: "On the Street in Brooklyn",
      imgPath: "imgs/blog-image-1.jpg",
      altText: "Brooklyn, NYC",
      text: "Cray ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aperiam quam minima repellendus quasi repellat placeat officiis. Delectus, quo nemo in exercitationem consectetur iste deserunt assumenda soluta culpa necessitatibus molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aperiam quam minima repellendus quasi repellat placeat officiis. Delectus, quo nemo in exercitationem consectetur iste deserunt assumenda soluta culpa necessitatibus molestias.",
    },
    {
      date: "11/11/20",
      title: "Vintage in Vogue",
      imgPath: "imgs/blog-image-2.jpg",
      altText: "3 models",
      text: "Selfies ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas fugit minima aliquid, inventore tempore illum cumque illo sunt modi ipsa omnis nulla fuga alias autem eveniet. Dolorem, error magni. Selfies ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas fugit minima aliquid, inventore tempore illum cumque illo sunt modi ipsa omnis nulla fuga alias autem eveniet. Dolorem, error magni.",
    },
  ];
  return (
    <>
      <Header />
      <main>
        {posts.map((post, i) => (
          <BlogPost
            key={i}
            date={post.date}
            title={post.title}
            imgPath={post.imgPath}
            altText={post.altText}
          >
            {post.text}
          </BlogPost>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
