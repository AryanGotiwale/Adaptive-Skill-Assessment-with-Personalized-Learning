import React, { useState, useEffect } from 'react';

const MathQuestions = () => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [questionNo, setQuestionNo] = useState(1); // Track question number

  // Function to fetch a new question
  const fetchQuestion = () => {
    fetch('  https://aptitude-api.vercel.app/ProfitAndLoss')
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data);
        setSelectedAnswer(null);
        setShowAnswer(false);
        setFeedback('');
        setQuestionNo(prevNo => prevNo + 1); // Increment question number
      })
      .catch((error) => console.error('Error fetching question:', error));
  };

  useEffect(() => {
    fetchQuestion(); // Fetch a question when the component mounts
  }, []);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    if (option === question.answer) {
      // Correct answer
      setFeedback('Correct! Loading a new question...');
      setTimeout(() => {
        fetchQuestion();
      }, 2000); // Wait 2 seconds before fetching a new question
    } else {
      // Incorrect answer
      setFeedback('Incorrect. The correct answer is shown below.');
      setShowAnswer(true); // Reveal correct answer
    }
  };

  return (
    <div className='Question'>
      <h1>Profit And Loss Question</h1>
      {question ? (
        <div>
          <h2>Question {questionNo}: {question.question}</h2>
          <ul>
            {question.options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{
                  cursor: 'pointer',
                  padding: '8px',
                  backgroundColor: selectedAnswer === option ? '#f0f0f0' : '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginBottom: '5px',
                  width: 'fit-content',
                }}
              >
                {option}
              </li>
            ))}
          </ul>

          {/* Feedback Message */}
          {feedback && <p><strong>{feedback}</strong></p>}

          {/* Conditionally Render Correct Answer */}
          {showAnswer && <p><strong>Answer:</strong> {question.answer}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MathQuestions;
