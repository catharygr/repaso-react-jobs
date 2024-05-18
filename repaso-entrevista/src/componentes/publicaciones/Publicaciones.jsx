import { useState, useEffect } from "react";
import "./Publicaciones.css";
// import LazyComponent from "./LazyComponent";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=1`
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

  const showLessPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=3`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
      setPage(3);
    } catch (error) {
      console.error("Error al obtener los posts", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="filter-post">
      <h3>Publicaciones</h3>
      {/* <LazyComponent /> */}
      <input
        className="input-post"
        type="text"
        value={filterPost}
        onChange={(e) => setFilterPost(e.target.value)}
      />
      {posts
        .filter((post) =>
          post.title.toLowerCase().includes(filterPost.toLowerCase())
        )
        .map((post, index) => (
          <div
            key={index}
            className="post"
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="btn-container">
          <button
            className="btn-post"
            onClick={loadMorePosts}
          >
            Cargar más
          </button>
          {posts.length > 3 && (
            <button
              className="btn-post"
              onClick={showLessPosts}
            >
              Mostrar menos
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Posts;
