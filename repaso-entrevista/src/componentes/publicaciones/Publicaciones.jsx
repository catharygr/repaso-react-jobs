import { useState, useEffect } from "react";
import "./Publicaciones.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts((prevPosts) => [...prevPosts, ...data]);
      } catch (error) {
        console.error("Error al obtener los posts", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="filter-post">
      <h3>Publicaciones</h3>
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
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <button
          className="btn-post"
          onClick={loadMorePosts}
        >
          Cargar más
        </button>
      )}
    </div>
  );
}

export default Posts;
