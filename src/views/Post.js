import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Post = () => {
  const { id } = useParams();
  const [unfilteredPost, setUnfilteredPost] = useState(null);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch("https://www.wordpress.anthonycollette.fr/wp-json/wp/v2/posts/" + id)
        .then((res) => res.json())
        .then((data) => setUnfilteredPost(data));
    }
  }, [id]);

  useEffect(() => {
    if (unfilteredPost !== null)
      fetch(
        "https://www.wordpress.anthonycollette.fr/wp-json/wp/v2/media/" +
          unfilteredPost.featured_media
      )
        .then((res) => res.json())
        .then((data) => setPost({ ...unfilteredPost, image: data.source_url }));
  }, [unfilteredPost]);

  useEffect(() => {
    console.log(post)
    if (post !== null) {
      setIsLoading(false);
    }
  }, [post]);

  return (
    <div>
      <Nav />

      <main className="container post-container">
        {isLoading && <Loading />}
        {!isLoading && (
          <div className="post">

            <div className="post__banner">
              <img src={post?.image} alt="Représentation de l'article" />
            </div>
            <div className="h2" dangerouslySetInnerHTML={{__html: post?.title?.rendered}} />
            <div
              className="post__content"
              dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Post;
