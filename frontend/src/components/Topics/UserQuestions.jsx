import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserQuestions = () => {
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/questions?topic=${topic}`);
        setQuestions(res.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [topic]);

  return (
    <div style={{ padding: "2rem" }}> 
      <h2>{topic} Questions</h2>
      <ul>
        {questions.map((q) => (
          <li key={q._id}>
            <strong>{q.question}</strong>
            <ul>
              {q.options.map((opt, idx) => (
                <li key={idx}>{opt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserQuestions;
