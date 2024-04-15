import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PanelistPage.css';
 
const PanelistPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get('/panelists/submitted-ideas');
        if (Array.isArray(response.data)) {
          setIdeas(response.data);
        } else {
          throw new Error('Invalid data format received from the server');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
 
    fetchIdeas();
  }, []);
 
  const handleRowClick = (idea) => {
    setSelectedIdea(idea);
  };
 
  const handleCloseDialog = () => {
    setSelectedIdea(null);
  };
 
  const handleAccept = async () => {
    try {
      if (selectedIdea) {
        const response = await axios.put(`/panelists/accept-idea/${selectedIdea.ideaId}`, {
          status: 'accept'
        });
        console.log('Idea accepted successfully:', response.data);
 
        setIdeas(prevIdeas => prevIdeas.filter(idea => idea.ideaId !== selectedIdea.ideaId));
      }
    } catch (error) {
      console.error('Error accepting idea:', error);
    }
  };
 
  const handleReject = async () => {
    try {
      if (selectedIdea) {
        const response = await axios.put(`/panelists/reject-idea/${selectedIdea.ideaId}`, {
          status: 'reject'
        });
        console.log('Idea rejected successfully:', response.data);
 
        setIdeas(prevIdeas => prevIdeas.filter(idea => idea.ideaId !== selectedIdea.ideaId));
      }
    } catch (error) {
      console.error('Error rejecting idea:', error);
    }
  };
 
  return (
    <div>
      <h1>Panelist Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {selectedIdea && (
            <Dialog
              idea={selectedIdea}
              onClose={handleCloseDialog}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          )}
          {ideas.length > 0 ? (
            ideas.map((idea) => (
              <div key={idea.ideaId} onClick={() => handleRowClick(idea)} style={{ cursor: 'pointer' }}>
                <Card idea={idea} />
              </div>
            ))
          ) : (
            <p>No ideas available</p>
          )}
        </div>
      )}
    </div>
  );
};
 
const Card = ({ idea }) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '8px', 
      margin: '10px 0', 
      borderRadius: '5px',
      maxWidth: '800px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      position:'relative'
    }}>
      <p><strong>Domain:</strong> {idea.ideaDomain}</p>
      <p><strong>Submission URL:</strong> <a href={idea.submissionUrl} style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">{idea.submissionUrl}</a></p>
    </div>
  );
};
 
const Dialog = ({ idea, onClose, onAccept, onReject }) => {
  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '5px' }}>
        <h2>{idea.ideaTitle}</h2>
        <p>{idea.ideaDescription}</p>
        <p><strong>Domain:</strong> {idea.ideaDomain}</p>
        <p><strong>Submission URL:</strong> <a href={idea.submissionUrl} target="_blank" rel="noopener noreferrer">{idea.submissionUrl}</a></p>
        <button onClick={onAccept}>Accept</button>
        <button onClick={onReject}>Reject</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
 
export default PanelistPage;
