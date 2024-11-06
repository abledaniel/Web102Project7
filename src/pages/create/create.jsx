import React, {useState} from 'react';
import './create.css'; 
import crewmatesImage from '../../assets/group.png'; 
import {Outlet, Link } from 'react-router-dom';
import  {supabase} from '../../client';

function Create() {

    const [post, setPost] = useState({title: "", author: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
      event.preventDefault();
      console.log('Post data before insert:', post);
      try {
        const { data, error } = await supabase
            .from('Posts')
            .insert({ title: post.title, author: post.author, description: post.description })
            .select();

        if (error) {
            console.error('Error inserting post:', error);
            return;
        }

        console.log('Post inserted:', data);
        window.location = "/";
    } catch (error) {
        console.error('Unexpected error:', error);
    }
    }
    
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
        <h1>Create a New Crewmate</h1>
        <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
        <img src={crewmatesImage} alt="Crewmates and spaceship" />
        <form>
                <label for="title">Name</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label for="author">Speed</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>
            
                <label for="description">Color</label><br />
                <input type="text" id="description" name="description" onChange={handleChange} /><br />
                <br/>
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
      </div>
      
    </div>
  );
}

export default Create;
