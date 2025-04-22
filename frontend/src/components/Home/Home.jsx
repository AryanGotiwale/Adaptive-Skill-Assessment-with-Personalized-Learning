import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import img from '../../assets/Img.jpg'
import img2 from '../../assets/Img2.jpg'

export default function Home() {
    // const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
    

    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        Your Path to Success Starts Here!                     <span className="hidden sm:block text-4xl">Assess, Learn, Achieve!</span>
                        </h2>
{/* <div className="mt-8">
<Link to="/random" className="inline-block text-xl font-semibold text-blue-600 mt-4">Random Questions</Link>
<Link to="/age" className="inline-block text-xl font-semibold text-blue-600 mt-4 ml-4">Age Questions</Link>
<Link to="/math" className="inline-block text-xl font-semibold text-blue-600 mt-4 ml-4">Math Questions</Link>
<Link to="/logic" className="inline-block text-xl font-semibold text-blue-600 mt-4 ml-4">Logic Questions</Link>
</div> */}

                         {/* <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link> */}
                        

</div>
               
                    
                 </div>

                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                     <img className="w-96" src={img} alt="image1" />
                </div>
                              </aside>

             <div className="grid  place-items-center sm:mt-20">
                 <img className="sm:w-96 w-48" src={img2} alt="image2" />
             </div>

             <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
         </div>
    );
}
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div className="mx-auto w-full max-w-7xl sm:px-16 px-4">
//       <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//         <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//           <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//             <h2 className="text-4xl font-bold sm:text-5xl">
//               Your Path to Success Starts Here! 
//               <span className="hidden sm:block text-4xl">Assess, Learn, Achieve!</span>
//             </h2>
//             <div className="mt-8">
//               <Link to="/random" className="inline-block text-xl font-semibold text-blue-600 mt-4">Random Questions</Link>
//               <Link to="/age" className="inline-block text-xl font-semibold text-blue-600 mt-4 ml-4">Age Questions</Link>
//               <Link to="/math" className="inline-block text-xl font-semibold text-blue-600 mt-4 ml-4">Math Questions</Link>
//               <Link to="/logic" className="inline-block text-xl font-semibold text-blue-600 mt-4 ml-4">Logic Questions</Link>
//             </div>
//           </div>
//         </div>

//         <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
//           <img 
//             className="w-full sm:max-w-96 max-w-xs mx-auto" 
//             src="https://i.ibb.co/5BCcDYB/Remote2.png" 
//             alt="image1" 
//           />
//         </div>
//       </aside>

//       <div className="grid place-items-center sm:mt-20">
//         <img 
//           className="sm:w-96 w-48 max-w-full mx-auto" 
//           src="https://i.ibb.co/2M7rtLk/Remote1.png" 
//           alt="image2" 
//         />
//       </div>

//       <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
//     </div>
//   );
// }