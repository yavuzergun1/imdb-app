// import React, { useState } from "react";
// import { Slide } from "react-slideshow-image";
// import '../App.css'

// const MultipleSlidesExample = () => {
//   const style = {
//     textAlign: 'center',
//     background: 'teal',
//     fontSize: '30px',
//     height: '18px',
//     width:'155px',
//   };

//   const properties = {
//     duration: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     autoplay: true,
//     indicators: true,
//   };

//   return (
//     <div>
//       <div>
//         <Slide {...properties}>
//           <div style={style}>First Slidaaaaaaaaaaaaaaaaaaaaaaae</div>
//           <div style={style}>Second Slide</div>
//           <div style={style}>Third Slide</div>
//           <div style={style}>Fourth Slide</div>
//           <div style={style}>Fifth Slide</div>
//           <div style={style}>sixth Slide</div>
//           <div style={style}>Seventh Slide</div>
//           <div style={style}>Eight Slide</div>
//         </Slide>
//       </div>
//     </div>
//   );
// };

// export default MultipleSlidesExample;

import React from 'react';
import "../App.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const properties = {
      duration: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      indicators: true,
    };

const slideImages = [
  {
    url: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
   
  },
  {
    url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    url: 'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='slide' style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slider