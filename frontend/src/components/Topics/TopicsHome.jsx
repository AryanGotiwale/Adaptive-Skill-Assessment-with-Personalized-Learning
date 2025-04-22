// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../Tests/Test.css'
// const TopicsHome = () => {
//   return (
//     <div style={{height :"700px" }}>  
//     <h2 style={{display: 'flex',
// justifyContent: 'center', fontSize: '35px'}}>Select Topics</h2> 
//    <div className="containerTopics">
//             <Link className='Topics'>Maths</Link>
//             <Link className='Topics'>Networking</Link>
//             <Link className='Topics'>Aptitude</Link>
//             <Link className='Topics'>Database</Link>
//             <Link className='Topics'>Computers</Link>
//             <Link className='Topics'>Security</Link>
//             <Link className='Topics'>Computers</Link>
//             <Link className='Topics'>Computers</Link>
//             <Link className='Topics'>Computers</Link>
//             <Link className='Topics'>Computers</Link>
//             <Link className='Topics'>Computers</Link>
//             <Link className='Topics'>Computers</Link>
//           </div>
//     </div>
//   )
// }

// export default TopicsHome


import React from 'react';
import { Link } from 'react-router-dom';
import '../Tests/Test.css';

const topics = [
  "Maths",
  "Networking",
  "Aptitude",
  "Database",
  "Computers",
  "Security",
];

const TopicsHome = () => {
  return (
    <div style={{ height: "700px" }}>
      <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: '35px' }}>
        Select Topics
      </h2>
      <div className="containerTopics">
        {topics.map((topic, index) => (
          <Link
            key={index}
            className="Topics"
            to={`/questions/${topic}`}
          >
            {topic}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicsHome;
