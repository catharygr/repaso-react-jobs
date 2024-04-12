import { useState, useEffect } from "react";
import "./Publicaciones.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

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
        onChange={(e) => setFilter(e.target.value)}
      />
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
