import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../client';
import './edit.css';

function EditCrewmate() {
  const { crewmateId } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState({ title: '', description: '', author: '' });

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select('*')
        .eq('id', crewmateId)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error);
      } else {
        setCrewmate(data);
      }
    };

    fetchCrewmate();
  }, [crewmateId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrewmate((prevCrewmate) => ({
      ...prevCrewmate,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('Posts')
      .update({
        title: crewmate.title,
        description: crewmate.description,
        author: crewmate.author,
      })
      .eq('id', crewmateId);

    if (error) {
      console.error('Error updating crewmate:', error);
    } else {
      navigate(`/crewmate/${crewmateId}`);
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('Posts')
      .delete()
      .eq('id', crewmateId);

    if (error) {
      console.error('Error deleting crewmate:', error);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="edit-crewmate">
      <h1>Edit Crewmate</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={crewmate.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="description"
            value={crewmate.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Speed:
          <input
            type="text"
            name="author"
            value={crewmate.author}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Crewmate</button>
      </form>
      <button onClick={handleDelete} style={{ color: 'red', marginTop: '10px' }}>
        Delete Crewmate
      </button>
    </div>
  );
}

export default EditCrewmate;
