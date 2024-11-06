import React, { useState, useEffect } from 'react';
import { supabase } from '../../client';
import './gallery.css';
import crewmatesImage from '../../assets/crewmate.png';
import crewmatesImage2 from '../../assets/group.png'; 
import { Link } from 'react-router-dom';
import more from '../../assets/react.svg'; 

function Gallery() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="home-container">
      <div className="sidebar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create a Crewmate!</Link></li>
          <li><Link to="/gallery">Crewmate Gallery</Link></li>
        </ul>
      </div>
      <div className="content">
        <h1>Your Crewmate Gallery!</h1>
        <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
        <img src={crewmatesImage2} alt="Crewmates" />
        <h1>CREWMATES</h1>

        {/* Display Posts */}
        <div className="gallery-posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="Card">
                {/* Link to CrewmateDetails page */}
                <Link to={`/crewmate/${post.id}`}>
                  <img className="moreButton" alt="more button" src={crewmatesImage} />
                </Link>
                <h2 className="title">{post.title}</h2>
                <h3 className="author">{"by " + post.author}</h3>
                <p className="description">{post.description}</p>
              </div>
            ))
          ) : (
            <h2>{"You haven't made a crewmate yet!"}</h2>
          )}
        </div>
      </div>
    </div>
  );
}
export default Gallery;
