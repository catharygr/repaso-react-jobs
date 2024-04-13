import { useState, useEffect, useRef } from "react";
import "./Publicaciones.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState("");
  const loader = useRef(null);

  const observer = new IntersectionObserver(handleObserver, options);
  if (loader.current) {
    observer.observe(loader.current);
  }

  function handleObserver(entities, observer) {
    const target = entities[0];
    if (target.isIntersecting) {
      console.log("Visible");
      observer.unobserve(target);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const losTresPrimeros = data.slice(0, 3);
        losTresPrimeros.sort((a, b) => a.title.localeCompare(b.title));
        setPosts(losTresPrimeros);
      } catch (error) {
        console.error("Error al obtener los posts", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Publicaciones</h1>
      <input
        type="text"
        value={filterPost}
        onChange={(e) => setFilterPost(e.target.value)}
      />
      {posts
        .filter((post) =>
          post.title.toLowerCase().includes(filterPost.toLowerCase())
        )
        .map((post) => (
          <div
            key={post.id}
            className="post"
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      {posts.length > 0 && <div ref={loader}>Loading...</div>}
    </div>
  );
}

export default Posts;
