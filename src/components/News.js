import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import line from '../images/line.svg';

const News = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://devmandeep.in/ofsquare/wp-json/wp/v2/posts');
        const champData = Object.values(response.data);
        const postsWithMedia = await Promise.all(
          champData.map(async (employee) => {
            const media_id = employee.featured_media;
            if (media_id === 0) {
              return { ...employee, mediaItem: { source_url: 'https://devmandeep.in/ofsquare/wp-content/uploads/2023/12/not-found.png' } };
            } else {
              const featuredResponse = await axios.get(`https://devmandeep.in/ofsquare/wp-json/wp/v2/media/${media_id}`);
              const mediaItem = featuredResponse.data;
              return { ...employee, mediaItem };
            }
          })
        );
        setPosts(postsWithMedia);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  const getFirstWords = (content, wordCount) => {
    const strippedContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const words = strippedContent.split(/\s+/); // Split the text into words
    const firstWords = words.slice(0, wordCount).join(' '); // Take the first N words and join them
    return `${firstWords}...`; // Add ellipsis or modify as needed
  };
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Read Our Blog</h2>
              <ul>
                {posts.slice(0, 3).map((post) => (
                  <li key={post.id}>
                    <Link to={`/Explore/${post.id}`}>
                      <div className="box">
                        <figure>
                          <span>
                            {post.mediaItem && <img key={post.mediaItem.id} src={post.mediaItem.source_url} alt="blogpost" />}
                          </span>
                        </figure>
                        <div className="text">
                          <h5>{post.title.rendered}</h5>
                          <p dangerouslySetInnerHTML={{ __html: getFirstWords(post.content.rendered, 15) }} />
                          <Link to={`/Explore/${post.id}`} className="link"> Read More <img src={line} alt="line"/></Link>
                          {/* <a href="#">
                      </a> */}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
