// import React from "react";


// import img1 from "../../assets/welcomeimg.webp";
// import img2 from "../../assets/welcomeimg.webp";
// import img3 from "../../assets/welcomeimg.webp";
// import img4 from "../../assets/welcomeimg.webp";
// import img5 from "../../assets/welcomeimg.webp";
// import img6 from "../../assets/welcomeimg.webp";
// import { Container } from "react-bootstrap";

// const images = [img1, img2, img3, img4, img5, img6];

// const ImageGallery = () => {
//   return (
//     <>
//     <div className="gallery-wrapper">
//       {/* Row 1: Left to Right */}
//       <div className="marquee marquee-left">
//         <div className="marquee-content">
//           {[...images, ...images].map((img, idx) => (
//             <img key={idx} src={img} alt={`Gallery ${idx}`} />
//           ))}
//         </div>
//       </div>

//       {/* Row 2: Right to Left */}
//       <div className="marquee marquee-right">
//         <div className="marquee-content">
//           {[...images, ...images].map((img, idx) => (
//             <img key={idx} src={img} alt={`Gallery ${idx}`} />
//           ))}
//         </div>
//       </div>
//     </div>
//      <div className="stats-section">
//       <div className="stat-card green">
//         <div className="circle">
//           <h3>15+</h3>
//           <p>Courses Available</p>
//         </div>
//       </div>
//       <div className="stat-card blue">
//         <div className="circle">
//           <h3>300K+</h3>
//           <p>Students Enrolled</p>
//         </div>
//       </div>
//       <div className="stat-card yellow">
//         <div className="circle">
//           <h3>98%</h3>
//           <p>Satisfaction Rate</p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default ImageGallery;

import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "../../Slices/Customerslice";
import { useDispatch } from "react-redux";

export default function ImageGallery(){
  const [input,setInput] = useState("");
  const dispatch = useDispatch()
  // const [cutomer,setCustomer] = useState([])

  function addCustomer() {
    if(input){
    // setCustomer((prev)=>[...prev,input])
    dispatch(addCustomerAction(input))
    setInput('')
  }
}
  return(
    <>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={addCustomer}>add</button>
    </>
  )
}