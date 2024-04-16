import { useState, useEffect } from "react";
import "./Publicaciones.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
      <h3>Publicaciones</h3>
      <input
        className="filter-post"
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
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <button onClick={loadMorePosts}>Cargar más</button>
      )}
    </div>
  );
}

export default Posts;
