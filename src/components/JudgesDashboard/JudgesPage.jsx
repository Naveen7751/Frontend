import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JudgesPage.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const JudgesPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topThreeRanks, setTopThreeRanks] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get('/judges/accepted-ideas');
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

  const handleSaveRating = async (marks) => {
    try {
      if (selectedIdea) {
        const response = await axios.put(`/ideas/${selectedIdea.ideaId}/rate`, {
          explanationMarks: marks.explanation_marks,
          implementationMarks: marks.implementation_marks,
          presentationMarks: marks.presentation_marks,
          workflowMarks: marks.workflow_marks
        });

        // Assuming the response from the server indicates success
        // You may want to handle errors as well
        console.log('Rating saved successfully:', response.data);

        // Optionally, you can update the state to reflect the rated idea
        setIdeas(prevIdeas =>
          prevIdeas.map(idea =>
            idea.ideaId === selectedIdea.ideaId ? { ...idea, rated: true } : idea
          )
        );

        setSelectedIdea(null); // Close the dialog after saving rating
      }
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  const handleSubmission = async () => {
    try {
      // Sort ideas based on total marks
      const sortedIdeas = ideas.sort((a, b) =>
        (b.explanationMarks + b.implementationMarks + b.presentationMarks + b.workflowMarks) -
        (a.explanationMarks + a.implementationMarks + a.presentationMarks + a.workflowMarks)
      );

      // Update ranks in the database
      await axios.post('/calculate-ranks', sortedIdeas);

      // Update top three ranks state
      setTopThreeRanks(sortedIdeas.slice(0, 3));
    } catch (error) {
      console.error('Error updating ranks:', error);
    }
  };

  return (
    <div>
      <h1>Judges Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {selectedIdea && (
            <RatingDialog
              idea={selectedIdea}
              onSaveRating={handleSaveRating}
              onClose={handleCloseDialog}
            />
          )}
          {ideas.length > 0 ? (
            ideas.map((idea) => (
              <div key={idea.ideaId} onClick={() => handleRowClick(idea)} style={{ cursor: 'pointer' }}>
                <IdeaCard idea={idea} />
              </div>
            ))
          ) : (
            <p>No ideas available</p>
          )}
          <button onClick={handleSubmission}>Submit</button>
        </div>
      )}
      {/* {topThreeRanks.length > 0 && (
        // <TopThreeRanksDialog ranks={topThreeRanks} onClose={() => setTopThreeRanks([])} />
      )} */}
    </div>
  );
};

const IdeaCard = ({ idea }) => {
  return (
    <div className="idea-card">
      <h2>{idea.ideaTitle}</h2>
      <p>{idea.ideaDescription}</p>
      <p><strong>Domain:</strong> {idea.ideaDomain}</p>
      <p><strong>Submission URL:</strong> <a href={idea.submissionUrl} target="_blank" rel="noopener noreferrer">{idea.submissionUrl}</a></p>
      {idea.rated ? <p><strong>Rating:</strong> Already rated</p> : null}
    </div>
  );
};

const RatingDialog = ({ idea, onSaveRating, onClose }) => {
  const [marks, setMarks] = useState({
    explanation_marks: '',
    implementation_marks: '',
    presentation_marks: '',
    workflow_marks: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks({ ...marks, [name]: value });
  };

  const handleSave = () => {
    onSaveRating(marks);
  };

  return (
    <Dialog open={true} onClose={onClose}>
    <DialogTitle>Rate Idea: {idea.ideaTitle}</DialogTitle>
    <DialogContent>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Explanation Marks:</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="explanation_marks"
                  value={marks.explanation_marks}
                  onChange={handleInputChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Implementation Marks:</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="implementation_marks"
                  value={marks.implementation_marks}
                  onChange={handleInputChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Presentation Marks:</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="presentation_marks"
                  value={marks.presentation_marks}
                  onChange={handleInputChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Workflow Marks:</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="workflow_marks"
                  value={marks.workflow_marks}
                  onChange={handleInputChange}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={onClose}>Cancel</Button>
    </DialogActions>
  </Dialog>
  );
};

// const TopThreeRanksDialog = ({ ranks, onClose }) => {
//   return (
//     <div className="top-three-ranks-dialog">
//       <h2>Top Three Ranks</h2>
//       <ol>
//         {ranks.map((idea, index) => (
//           <li key={index}>{idea.ideaTitle}</li>
//         //   <li key={index}>{idea.ideaDescription}</li>
//         ))}
//       </ol>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

export default JudgesPage;
