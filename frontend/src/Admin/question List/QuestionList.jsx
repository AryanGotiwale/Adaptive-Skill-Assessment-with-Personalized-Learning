// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AdminHeader from "../AdminHeader";

// const QuestionList = () => {
//   const [questions, setQuestions] = useState([]);
//   const [selectedTopic, setSelectedTopic] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editForm, setEditForm] = useState({});

//   useEffect(() => {
//     fetchQuestions();
//   }, [selectedTopic]);

//   const fetchQuestions = async () => {
//     const url = selectedTopic
//       ? `http://localhost:5000/api/questions?topic=${selectedTopic}`
//       : `http://localhost:5000/api/questions`;
//     const res = await axios.get(url);
//     setQuestions(res.data);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:5000/api/questions/${id}`);
//     fetchQuestions();
//   };

//   const startEdit = (q) => {
//     setEditId(q._id);
//     setEditForm({ ...q });
//   };

//   const handleEditChange = (field, value) => {
//     setEditForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleEditSave = async () => {
//     await axios.put(`http://localhost:5000/api/questions/${editId}`, editForm);
//     setEditId(null);
//     fetchQuestions();
//   };

//   return (
//     <div>
//         <AdminHeader/>
//     <div style={{ padding: "1rem" }}>
//       <h2>All Questions</h2>

//       <input
//         placeholder="Filter by topic"
//         value={selectedTopic}
//         onChange={(e) => setSelectedTopic(e.target.value)}
//       />

//       <ul>
//         {questions.map((q) => (
//           <li key={q._id} style={{ marginBottom: "20px" }}>
//             {editId === q._id ? (
//               <div>
//                 <input
//                   value={editForm.question}
//                   onChange={(e) => handleEditChange("question", e.target.value)}
//                 />
//                 {editForm.options.map((opt, idx) => (
//                   <input
//                     key={idx}
//                     value={opt}
//                     onChange={(e) => {
//                       const newOptions = [...editForm.options];
//                       newOptions[idx] = e.target.value;
//                       handleEditChange("options", newOptions);
//                     }}
//                   />
//                 ))}
//                 <input
//                   value={editForm.correctAnswer}
//                   onChange={(e) => handleEditChange("correctAnswer", e.target.value)}
//                 />
//                 <button onClick={handleEditSave}>Save</button>
//               </div>
//             ) : (
//               <div>
//                 <strong>{q.question}</strong>
//                 <ul>
//                   {q.options.map((opt, idx) => (
//                     <li key={idx}>{opt}</li>
//                   ))}
//                 </ul>
//                 <p><b>Answer:</b> {q.correctAnswer}</p>
//                 <p><b>Topic:</b> {q.topic}</p>
//                 <p><b>Difficulty:</b> {q.difficulty}</p>
//                 <button onClick={() => startEdit(q)}>Edit</button>
//                 <button onClick={() => handleDelete(q._id)}>Delete</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// };

// export default QuestionList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../AdminHeader";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [topics, setTopics] = useState(["Math", "Science", "History", "Geography", "Literature"]); // Predefined list of topics

  // Fetch questions when the component mounts or when the selected topic changes
  useEffect(() => {
    fetchQuestions();
  }, [selectedTopic]);

  const fetchQuestions = async () => {
    const url = selectedTopic
      ? `http://localhost:5000/api/questions?topic=${selectedTopic}`
      : `http://localhost:5000/api/questions`;
    const res = await axios.get(url);
    setQuestions(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/questions/${id}`);
    fetchQuestions();
  };

  const startEdit = (q) => {
    setEditId(q._id);
    setEditForm({ ...q });
  };

  const handleEditChange = (field, value) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditSave = async () => {
    await axios.put(`http://localhost:5000/api/questions/${editId}`, editForm);
    setEditId(null);
    fetchQuestions();
  };

  return (
    <div>
      <AdminHeader />

      <div style={{ padding: "1rem" }}>
        <h2>All Questions</h2>

        <select
  value={selectedTopic}
  onChange={(e) => setSelectedTopic(e.target.value)}
  style={{
    padding: "8px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "200px",
  }}
>
  <option value="">All Topics</option>
  {topics.map((topic, idx) => (
    <option key={idx} value={topic}>
      {topic}
    </option>
  ))}
</select>


        <ul>
          {questions.map((q) => (
            <li key={q._id} style={{ marginBottom: "20px" }}>
              {editId === q._id ? (
                <div>
                  <textarea
                    value={editForm.question}
                    onChange={(e) => handleEditChange("question", e.target.value)}
                    style={{
                      border: "1px solid #ddd",
                      padding: "10px",
                      borderRadius: "5px",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  />
                  {editForm.options.map((opt, idx) => (
                    <div key={idx} style={{ marginBottom: "10px" }}>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => {
                          const newOptions = [...editForm.options];
                          newOptions[idx] = e.target.value;
                          handleEditChange("options", newOptions);
                        }}
                        style={{
                          border: "1px solid #ddd",
                          padding: "8px",
                          borderRadius: "5px",
                          width: "100%",
                        }}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: "10px" }}>
                    <select
                      value={editForm.correctAnswer}
                      onChange={(e) => handleEditChange("correctAnswer", e.target.value)}
                      style={{
                        padding: "8px",
                        borderRadius: "5px",
                        width: "100%",
                        border: "1px solid #ddd",
                      }}
                    >
                      <option value="">Select Correct Answer</option>
                      {editForm.options.map((opt, index) => (
                        <option key={index} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <select
                      value={editForm.topic}
                      onChange={(e) => handleEditChange("topic", e.target.value)}
                      style={{
                        padding: "8px",
                        borderRadius: "5px",
                        width: "100%",
                        border: "1px solid #ddd",
                      }}
                    >
                      <option value="">Select Topic</option>
                      {topics.map((topic, idx) => (
                        <option key={idx} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <select
                      value={editForm.difficulty}
                      onChange={(e) => handleEditChange("difficulty", e.target.value)}
                      style={{
                        padding: "8px",
                        borderRadius: "5px",
                        width: "100%",
                        border: "1px solid #ddd",
                      }}
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  <button
                    onClick={handleEditSave}
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <strong>{q.question}</strong>
                  <ul>
                    {q.options.map((opt, idx) => (
                      <li key={idx}>{opt}</li>
                    ))}
                  </ul>
                  <p>
                    <b>Answer:</b> {q.correctAnswer}
                  </p>
                  <p>
                    <b>Topic:</b> {q.topic}
                  </p>
                  <p>
                    <b>Difficulty:</b> {q.difficulty}
                  </p>
                  <button
                    onClick={() => startEdit(q)}
                    style={{
                      backgroundColor: "#FFD700",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(q._id)}
                    style={{
                      backgroundColor: "#FF5733",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionList;
