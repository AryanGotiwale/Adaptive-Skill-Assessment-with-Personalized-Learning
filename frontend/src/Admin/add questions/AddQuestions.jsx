// import React, { useState } from "react";
// import axios from "axios";
// import AdminHeader from '../AdminHeader'

// const AddQuestion = () => {
//   const [question, setQuestion] = useState("");
//   const [options, setOptions] = useState(["", "", "", ""]);
//   const [correctAnswer, setCorrectAnswer] = useState("");
//   const [topic, setTopic] = useState("");
//   const [difficulty, setDifficulty] = useState("easy");
//   const [message, setMessage] = useState("");

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...options];
//     newOptions[index] = value;
//     setOptions(newOptions);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/questions", {
//         question,
//         options,
//         correctAnswer,
//         topic,
//         difficulty
//       });
//       setMessage(res.data.message);
//       setQuestion("");
//       setOptions(["", "", "", ""]);
//       setCorrectAnswer("");
//       setTopic("");
//       setDifficulty("easy");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Error adding question.");
//     }
//   };

//   return (
//     <div>
//        <AdminHeader/>
    
   
//     <div style={{ maxWidth: "500px", margin: "auto" }} className="">
     
//       <h2>Add New Question</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//         {/* <input type="text" placeholder="Question" value={question} onChange={(e) => setQuestion(e.target.value)} required /> */}
//         <textarea placeholder="Question" id="" 
//         value={question} onChange={(e) => setQuestion(e.target.value)} required style={{border:'ridge',
//           backgroundColor: 'transparent',
//           resize: 'none',
//           outline: 'none',
//           borderRadius:'7px',
//           width:'120%'
//         }}></textarea>
//         </div>
//         <div>
//         {options.map((opt, idx) => (
//           <input
//             key={idx}
//             type="text"
//             placeholder={`Option ${idx + 1}`}
//             value={opt}
//             onChange={(e) => handleOptionChange(idx, e.target.value)}
//             required
//           />
//         ))}
//         </div>
       
//         <input
//           type="text"
//           placeholder="Correct Answer"
//           value={correctAnswer}
//           onChange={(e) => setCorrectAnswer(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Topic"
//           value={topic}
//           onChange={(e) => setTopic(e.target.value)}
//         />
//         <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
//           <option value="easy">Easy</option>
//           <option value="medium">Medium</option>
//           <option value="hard">Hard</option>
//         </select>
//         <button type="submit">Add Question</button>
//       </form>
//       <p>{message}</p>
//     </div>
//     </div>
//   );
// };

// export default AddQuestion;

import React, { useState } from "react";
import axios from "axios";
import AdminHeader from '../AdminHeader';

const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [message, setMessage] = useState("");

  const topics = ["Math", "Science", "General Knowledge", "History", "Geography"]; // Example topics
  const difficulties = ["easy", "medium", "hard"]; // Difficulty levels

  // Function to handle change in options
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  // Function to handle submit of the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/questions", {
        question,
        options,
        correctAnswer,
        topic,
        difficulty
      });
      setMessage(res.data.message);
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer("");
      setTopic("");
      setDifficulty("easy");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error adding question.");
    }
  };

  return (
    <div>
      <AdminHeader />

      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <h2>Add New Question</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              style={{
                border: "ridge",
                backgroundColor: "transparent",
                resize: "none",
                outline: "none",
                borderRadius: "7px",
                width: "100%", // Adjust width
                padding: "10px"
              }}
            ></textarea>
          </div>

          <div>
            {options.map((opt, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={`Option ${idx + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(idx, e.target.value)}
                required
                style={{
                  marginBottom: "10px",
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ddd"
                }}
              />
            ))}
          </div>

          <div>
            <select
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              required
              style={{
                marginBottom: "10px",
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ddd"
              }}
            >
              <option value="">Select Correct Answer</option>
              {options.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              style={{
                marginBottom: "10px",
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ddd"
              }}
            >
              <option value="">Select Topic</option>
              {topics.map((t, index) => (
                <option key={index} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              required
              style={{
                marginBottom: "10px",
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ddd"
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Question
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AddQuestion;
