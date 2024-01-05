import React, { useState, useEffect } from 'react'
import axios from 'axios';
//import Rectangle30 from "../images/Rectangle30.png";
//import Rectangle31 from "../images/Rectangle31.png";
//import Rectangle32 from "../images/Rectangle32.png";
const NewEvents = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async (categoryId) => {
            try {
                const response = await axios.get(`https://devmandeep.in/ofsquare/wp-json/wp/v2/posts?categories=${categoryId}`);
                const postsWithMedia = await Promise.all(
                    response.data.map(async (post) => {
                      const mediaResponse = await axios.get(`https://devmandeep.in/ofsquare/wp-json/wp/v2/media/${post.featured_media}`);
                      return { ...post, mediaSource: mediaResponse.data.source_url };
                    })
                  );
                setPosts(postsWithMedia);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        fetchPosts(8);
    }, [])
    const formatDate = (dateString) => {
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };
    const getFirstWords = (content, wordCount) => {
        const strippedContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
        const words = strippedContent.split(/\s+/); // Split the text into words
        const firstWords = words.slice(0, wordCount).join(' '); // Take the first N words and join them
        return `${firstWords}...`; // Add ellipsis or modify as needed
    };
    const formatTimeRange = (startTime, endTime) => {
        // Assuming startTime and endTime are in the format 'YYYY-MM-DDTHH:mm:ss'
        const formattedStartTime = new Date(startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedEndTime = new Date(endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
        return `${formattedStartTime}-${formattedEndTime}`;
      };
      
    return (
        <>
            <section className="news Events ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Events at Ofis Square</h2>
                            <p>Events that help you and your people refresh your mind, body and spirit while allowing you to network and grow</p>
                            <ul>
                                {posts.map(post => (
                                    <li key={post.id}>
                                        <div className="box">
                                            <figure>
                                                <span>
                                                <img src={post.mediaSource} alt={`post-${post.id}-image`} />
                                                </span>
                                            </figure>
                                            <div className="text">
                                                <p className="info"><i className="fa fa-calendar" aria-hidden="true"></i>{formatDate(post.date)}</p>
                                                <p className="info"><i className="fa fa-clock-o" aria-hidden="true"></i>{formatTimeRange(post.date_gmt, post.modified_gmt)}</p>
                                                <h5>{post.title.rendered}</h5>
                                                <p dangerouslySetInnerHTML={{ __html: getFirstWords(post.content.rendered, 10) }} />
                                            </div>
                                        </div>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewEvents