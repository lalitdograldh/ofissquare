import React, { useState, useEffect } from "react";
import axios from 'axios';
import Ellipse1 from "../images/blogbanner.png";
import share from "../images/share.png";
import blogpost from "../images/blogpost.png";
import Lets from './Lets';
import { Link } from "react-router-dom";
const Blogs = ({ postId }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

        const authorsResponse = await axios.get('https://devmandeep.in/ofsquare/wp-json/wp/v2/users');
        const authorsData = authorsResponse.data.reduce((acc, author) => {
          acc[author.id] = author.name;
          return acc;
        }, {});
        setAuthors(authorsData);

        const categoriesResponse = await axios.get('https://devmandeep.in/ofsquare/wp-json/wp/v2/categories');
        const categoriesData = categoriesResponse.data.reduce((acc, category) => {
          acc[category.id] = category.name;
          return acc;
        }, {});
        setCategories(categoriesData);

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    // Filter posts based on the search query
    const filtered = posts.filter(post => post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const getFirstWords = (content, wordCount) => {
    const strippedContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const words = strippedContent.split(/\s+/); // Split the text into words
    const firstWords = words.slice(0, wordCount).join(' '); // Take the first N words and join them
    return `${firstWords}...`; // Add ellipsis or modify as needed
  };
  return (
    <>
      <section className="passion">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Blog</h1>
              <img src={Ellipse1} />
            </div>
          </div>
        </div>
      </section>
      <section className="blogbox">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {
                (searchQuery ? filteredPosts : posts).map(post => (
                  console.log(post),
                  <div className="blogdata" key={post.id}>
                    <div className="blogimg">
                    <Link href={`/Explore/${post.id}`} className="blogbgremove">
                      {post.mediaItem && <img key={post.mediaItem.id} src={post.mediaItem.source_url} alt="blogpost" />}
                      <a href="#">{categories[post.categories]}</a>
                    </Link>
                    </div>
                    <div className="blogtext">
                    <Link href={`/Explore/${post.id}`}>
                      <ul>
                        <li>On <span> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></li>
                        <li>By <span> {authors[post.author]}</span></li>
                      </ul>
                      <h6>{post.title.rendered}</h6>
                      <p dangerouslySetInnerHTML={{ __html: getFirstWords(post.content.rendered, 20) }} />
                      <Link to={`/Explore/${post.id}`}>Explore More</Link>
                      {/* <div className="share">
                        <img src={share} alt="share" />
                      </div> */}
                    </Link>
                    </div>

                  </div>

                ))
              }
            </div>
            <div className="col-md-4">
              <div className="blogsidebar">
                <form>
                  <input type="text" name="" placeholder="Enter Keyword..." value={searchQuery} onChange={handleSearchChange} />
                </form>
              </div>

              <div className="blogsidebar">
                <h5 className="text-center">Categories</h5>
                <ul>
                  {posts.map((post, i) => {
                    return (
                      <li><Link key={i} to={`/Explore/${post.id}`}>{categories[post.categories]}</Link></li>
                    )
                  })}
                </ul>
              </div>

              <div className="blogsidebar">
                <h5 className="text-center">Popular Post</h5>

                {posts.map((post, i) => (
                  <a href={`/Explore/${post.id}`} key={i} className="blogpop">
                    {post.mediaItem && <img key={post.mediaItem.id} src={post.mediaItem.source_url} alt="blogpost" />}
                    <span>{categories[post.categories]}</span>
                    <p dangerouslySetInnerHTML={{ __html: getFirstWords(post.content.rendered, 10) }} />
                  </a>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      <Lets />

    </>
  );
};

export default Blogs;