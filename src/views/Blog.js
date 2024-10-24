import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { FaArrowRightLong } from "react-icons/fa6";
import Blob from "../components/Blob";
import { motion } from "framer-motion";

const Blog = () => {
  const [unfilteredPosts, setUnfilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  const getUnfilteredPost = async () =>
    await fetch("https://www.wordpress.anthonycollette.fr/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        setUnfilteredPosts(data);
        setLoadingData(false);
      });

  const addImagesToPosts = async () => {
    if (!loadingData && unfilteredPosts.length) {
      unfilteredPosts?.map(async (post) => {
        if (!posts.some((item) => item.id === post.id)) {
          fetch(
            "https://www.wordpress.anthonycollette.fr/wp-json/wp/v2/media/" + post.featured_media
          )
            .then((res) => res.json())
            .then((data) =>{
              setPosts((prevPosts) => [...prevPosts, { ...post, image: data.source_url, image_alt: data.alt_text }])
            });
        }
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setUnfilteredPosts([]);
    setPosts([]);
    getUnfilteredPost();
    addImagesToPosts()
  }, []);

  useEffect(() => {
    addImagesToPosts()
  }, [loadingData])

  return (
    <div className="blog">
      <Nav />
      <div className="blog-container container">
        <Blob duration={5000} />
        <Blob duration={8000} />
        {isLoading && <Loading />}
        {!posts.length && !isLoading && (
          <div className="blog-empty">
            <h1>Oups, on dirait qu'il n'y a rien par-ici...</h1>{" "}
            <Link to="/">Retour à la page d'accueil</Link>
          </div>
        )}
        <div className="blog-container__results">
          {posts.map((post, index) => {
            return (
              <motion.article key={index} className="resume-post" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay: index*0.5}}>
                <div className="img-wrapper">
                  <img src={post.image} alt={post.image_alt} />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  className="h3"
                />
                <div
                  className="resume-post__content"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
                <Link to={`/blog/${post.id}`}>Lire la suite <FaArrowRightLong /></Link>
              </motion.article>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
