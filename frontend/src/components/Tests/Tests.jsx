

// src/components/Test.jsx
import React from 'react';
import RandomQuestions from '../Questions/RandomQuestions'; // Adjust the path if RandomQuestions is in a different folder
import { Link } from 'react-router-dom';
import './Test.css'
  

const Test = () => {
  return (
    <div style={{height :"700px" }}>  
        <h2 style={{display: 'flex',
    justifyContent: 'center', fontSize: '35px'}}>Take a Quick 30 Question Test</h2> 
       <div className="containerTest">
<Link to="/random"  className="logic">Random Questions</Link>
<Link to="/age"className="logic">Age Questions</Link>
<Link to="/math" className="logic"/*className="inline-block text-xl font-semibold text-blue-600 mt-4 ml-4"*/>Profit And Loss</Link>
<Link to="/logic" className="logic">Permutations And Combinations Questions</Link>
</div>
      </div>
  );
};

export default Test;
