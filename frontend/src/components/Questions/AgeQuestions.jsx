// // src/components/Questions/AgeQuestions.jsx
// import React, { useState, useEffect } from 'react';

// const AgeQuestions = () => {
//   const [question, setQuestion] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [showAnswer, setShowAnswer] = useState(false);
//   const [feedback, setFeedback] = useState('');
//   const [questionNo, setQuestionNo] = useState(1); // Track question number

//   // Function to fetch a new question
//   const fetchQuestion = () => {
//     fetch('  https://aptitude-api.vercel.app/Age') // Or change to an "age" specific API if needed
//       .then((response) => response.json())
//       .then((data) => {
//         setQuestion(data);
//         setSelectedAnswer(null);
//         setShowAnswer(false);
//         setFeedback('');
//         setQuestionNo(prevNo => prevNo + 1); // Increment question number
//       })
//       .catch((error) => console.error('Error fetching question:', error));
//   };

//   useEffect(() => {
//     fetchQuestion(); // Fetch a question when the component mounts
//   }, []);

//   const handleOptionClick = (option) => {
//     setSelectedAnswer(option);
//     if (option === question.answer) {
//       // Correct answer
//       setFeedback('Correct! Loading a new question...');
//       setTimeout(() => {
//         fetchQuestion();
//       }, 2000); // Wait 2 seconds before fetching a new question
//     } else {
//       // Incorrect answer
//       setFeedback('Incorrect. The correct answer is shown below.');
//       setShowAnswer(true); // Reveal correct answer
//     }
//   };

//   return (
//     <div>
//       <h1>Age Aptitude Question</h1>
//       {question ? (
//         <div>
//           <h2 style={{fontSize:'1.5rem'}}>Q{questionNo} ⮞ : {question.question}</h2>
//           <ul>
//             {question.options.map((option, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleOptionClick(option)}
//                 style={{
//                   cursor: 'pointer',
//                   padding: '8px',
//                   backgroundColor: selectedAnswer === option ?  "#388E3C" : '#fff',
//                   border: '1px solid #ddd',
//                   borderRadius: '5px',
//                   marginBottom: '5px',
//                   width: 'fit-content',
//                 }}
//               >
//                 {option}
//               </li>
//             ))}
//           </ul>

//           {/* Feedback Message */}
//           {feedback && <p><strong>{feedback}</strong></p>}

//           {/* Conditionally Render Correct Answer */}
//           {showAnswer && <p><strong>Answer:</strong> {question.answer}</p>}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default AgeQuestions;


import React, { useState, useEffect } from 'react';
import './Question.css'

const TOTAL_QUESTIONS = 30;

const RandomQuestions = () => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [questionNo, setQuestionNo] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const fetchQuestion = () => {
    fetch('https://aptitude-api.vercel.app/Age')
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
        setSelectedAnswer(null);
        setShowAnswer(false);
        setFeedback('');
        setShowExplanation(false);
      })
      .catch((err) => console.error('Error fetching question:', err));
  };

  useEffect(() => {
    if (questionNo <= TOTAL_QUESTIONS) {
      fetchQuestion();
    } else {
      setCompleted(true);
    }
  }, [questionNo]);

  const handleOptionClick = (option) => {
    if (selectedAnswer) return; // Prevent multiple selections

    setSelectedAnswer(option);
    if (option === question.answer) {
      setCorrectCount((prev) => prev + 1);
      setFeedback('✅ Correct!');
    } else {
      setIncorrectCount((prev) => prev + 1);
      setFeedback('❌ Incorrect!');
      setShowAnswer(true);
    }
  };

  const handleNext = () => {
    setQuestionNo((prev) => prev + 1);
  };

  const handleRestart = () => {
    setQuestionNo(1);
    setCorrectCount(0);
    setIncorrectCount(0);
    setCompleted(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }} className='Question'>
      <h1>Aptitude Practice</h1>

      {!completed ? (
        question ? (
          <div>
            <h2>Question {questionNo} of {TOTAL_QUESTIONS}</h2>
            <p><strong>{question.question}</strong></p>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {question.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  style={{
                    cursor: 'pointer',
                    padding: '10px',
                    backgroundColor: selectedAnswer === option
                      ? option === question.answer
                        ? '#d4edda' // green for correct
                        : '#f8d7da' // red for wrong
                      : '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '8px',
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>

            {feedback && <p><strong>{feedback}</strong></p>}
            {showAnswer && <p><strong>Correct Answer:</strong> {question.answer}</p>}

            {selectedAnswer && (
              <>
                <p onClick={() => setShowExplanation(true)} style={{ cursor: 'pointer', color: 'blue' }}>
                  Show Explanation
                </p>
                {showExplanation && (
                  <p><strong>Explanation:</strong> {question.explanation}</p>
                )}
                <button onClick={handleNext} style={{ marginTop: '10px' }}>
                  Next Question
                </button>
              </>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <div style={{ textAlign: 'center' }} className='result'>
          <h2>🎉 Test Completed!</h2>
          <p>Total Questions: {TOTAL_QUESTIONS}</p>
          <p>✅ Correct: {correctCount}</p>
          <p>❌ Incorrect: {incorrectCount}</p>
          <button onClick={handleRestart}>Restart Test</button>
        </div>
      )}
    </div>
  );
};

export default RandomQuestions;
