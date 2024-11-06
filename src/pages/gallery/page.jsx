import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../client'; 
import './page.css'; 
import crewmatesImage from '../../assets/group.png';

function CrewmateDetails() {
  const { crewmateId } = useParams();
  const [crewmate, setCrewmate] = useState(null);

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

  if (!crewmate) {
    return <div>Loading crewmate details...</div>;
  }

  return (
    <div className="crewmate-details">
          <Link to={`/`}>Home</Link>

      <h1>Crewmate: {crewmate.title}</h1>
      <div className="stats">
        <p>Color: {crewmate.description}</p>
        <p>Speed: {crewmate.author} mph</p>
      </div>
      <p>
      Hmm This Crewmate is pretty Good I like it 😉
      </p>

      <Link to={`/edit/${crewmateId}`}>Wanna edit this Crewmate?</Link>
      {      <img src={crewmatesImage} alt="Crewmates and spaceship" />
    }
    </div>
  );
}

export default CrewmateDetails;