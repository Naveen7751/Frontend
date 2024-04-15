import React, { useState } from 'react';
import Modal from './Modal'; // Assuming you have a Modal component
import './JudgesDashboard.css'; // Import CSS for MyComponent
import Timer from "./Timer";
import Navbar from '../Navbar';

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const demo_ideas = [
    {
      team_name: "FJLKDSF",
      domain: "XYZ",
      title: "ABC",
      description: "adfasdfadf askdhfaksdhf asdjfasdf",
      link: "/Afdasdf.pdf"
    },
    {
      team_name: "DFDSF",
      domain: "dsf",
      title: "ABC",
      description: "adfasdfadf askdhfaksdhf asdjfasdf",
    },
    {
      team_name: "FJLKDSF",
      domain: "XYZ",
      title: "ABC",
      description: "adfasdfadf askdhfaksdhf asdjfasdf",
    },
    {
      team_name: "DFDSF",
      domain: "dsf",
      title: "ABC",
      description: "adfasdfadf askdhfaksdhf asdjfasdf",
    },
    {
      team_name: "FJLKDSF",
      domain: "XYZ",
      title: "ABC",
      description: "adfasdfadf askdhfaksdhf asdjfasdf",
    },
    {
      team_name: "DFDSF",
      domain: "dsf",
      title: "ABC",
      description: "adfasdfadf askdhfaksdhf asdjfasdf",
    },
    // Add more card data here
  ];

  const totalCards = demo_ideas.length;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = demo_ideas.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: 50 }}>
        <div className="left-content" style={{ backgroundColor: "#ffffff" }}>
          <div className="cards-container">
            {currentCards.map((card) => (
              <div key={card.title} className="card" onClick={() => handleCardClick(card)}>
                {card.team_name}
              </div>
            ))}
            <div className="pagination">
              {/* Previous button */}
              {currentPage > 1 && <button className="btn" onClick={handlePrevPage}>Previous</button>}
              {/* Next button */}
              {currentPage < Math.ceil(totalCards / cardsPerPage) && <button className="btn" onClick={handleNextPage}>Next</button>}
            </div>
          </div>
        </div>
        <Timer />
        {showModal && (
          <Modal onClose={handleModalClose}>
            {/* Render modal content here */}
            <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'left', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '10px' }}>Team Name: {selectedCard?.team_name}</div>
              <div style={{ marginBottom: '10px' }}>Domain: {selectedCard?.domain}</div>
              <div style={{ marginBottom: '10px' }}>Idea Title: {selectedCard?.title}</div>
              <div>Idea Description: {selectedCard?.description}</div>
              {selectedCard?.link && (
                <div style={{ marginTop: '20px' }}>
                  <button className="btn btn-primary" onClick={() => window.open(selectedCard.link, '_blank')}>
                    View PDF
                  </button>
                </div>
              )}
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default MyComponent;
