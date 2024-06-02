// import { useState } from "react";
import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  function randomGen() {
    let ranNum = Math.floor(Math.random() * people.length);
    if (ranNum === index) {
      ranNum = index + 1;
    }
    setIndex(ranNum);
  }

  if (index > people.length - 1) {
    setIndex(0);
  } else if (index < 0) {
    setIndex(people.length - 1);
  } else {
    const { name, job, image, text } = people[index];
    return (
      <section className="person-info">
        <img src={image} alt={name} />
        <FaQuoteRight className="quotes" />
        <h2>{name}</h2>
        <h3>{job}</h3>
        <h4>{text}</h4>
        <section className="btns">
          <div className="next-prev-btn">
            <button className="prev-btn" onClick={() => setIndex(index - 1)}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={() => setIndex(index + 1)}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomGen}>
            Surprise Me
          </button>
        </section>
      </section>
    );
  }
};

export default Review;

//NOTE: alternate way to write above code
// const Review = () => {
//   const [index, setIndex] = useState(0);
//   const { name, job, image, text } = people[index];
//   const checkNumber = (number) => {
//     if (number > people.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return people.length - 1;
//     }
//     return number;
//   };
//   const nextPerson = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const prevPerson = () => {
//     setIndex((index) => {
//       let newIndex = index - 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const randomPerson = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };

//   return (
//     <article className='review'>
//       <div className='img-container'>
//         <img src={image} alt={name} className='person-img' />
//         <span className='quote-icon'>
//           <FaQuoteRight />
//         </span>
//       </div>
//       <h4 className='author'>{name}</h4>
//       <p className='job'>{job}</p>
//       <p className='info'>{text}</p>
//       <div className='button-container'>
//         <button className='prev-btn' onClick={prevPerson}>
//           <FaChevronLeft />
//         </button>
//         <button className='next-btn' onClick={nextPerson}>
//           <FaChevronRight />
//         </button>
//       </div>
//       <button className='random-btn' onClick={randomPerson}>
//         surprise me
//       </button>
//     </article>
//   );
// };

// export default Review;
