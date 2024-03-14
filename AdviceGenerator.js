import React, { useState, useEffect } from 'react';

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    fetchAdvice();
  }, [])

  const getNewAdvice = () => {
    fetchAdvice();
  }

  return (
    <div>
      <h1 className='text-danger'>Random Advice Generator</h1>
      <p>{advice}</p>
      <button style={{backgroundColor:"lightblue"}}onClick={getNewAdvice}>Get New Advice</button>
    </div>
  )
}

export default AdviceGenerator;



















// import React, { useState, useEffect } from 'react';

// const AdviceGenerator = () => {
//   const [advice, setAdvice] = useState('');

//   useEffect(() => {
//     const fetchAdvice = async () => {
//       try {
//         const response = await fetch('https://api.adviceslip.com/advice');
//         const data = await response.json();
//         setAdvice(data.slip.advice);
//      } 
//      catch (error) {
//         console.error('Error fetching advice:', error);
//       }
//     };

//     fetchAdvice();
//   }, []);


//   const getNewAdvice = () => {
//     //fetchAdvice();
//   };

//   return (
//     <div>
//       <h1 className='text-primary'>Random Advice Generator</h1>
//       <p>{advice}</p>
//       <button className='btn btn-success' onClick={getNewAdvice}>Get New Advice</button>
//     </div>
//   );
// };

// export default AdviceGenerator;
