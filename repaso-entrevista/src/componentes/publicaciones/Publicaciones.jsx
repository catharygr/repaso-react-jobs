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
    </div>
  );
}

export default Posts;
