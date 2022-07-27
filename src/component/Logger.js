//updating

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const Logger = () => {
//   const [number, setNumber] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log(number);
//   }, [number ]);
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>
//         Up
//       </button>
//       <button onClick={() => setSecond((prevSecond) => prevSecond + 1)}>
//         Up
//       </button>
//       <h1>{second}</h1>
//     </div>
//   );
// };

// export default Logger;
/////////////////////////////////////////////////////////////////////////////////////////////////////
//mounting

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const Logger = () => {
//   const [number, setNumber] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log(number);
//   }, []);
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>
//         Up
//       </button>
//       <button onClick={() => setSecond((prevSecond) => prevSecond + 1)}>
//         Up
//       </button>
//       <h1>{second}</h1>
//     </div>
//   );
// };

// export default Logger;
/////////////////////////////////////////////////////////////////////////////////////////////////////
//onmounting

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Logger = () => {
  const [number, setNumber] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log(number);

    return () => {
      console.log("the logger component is remove from dom");
    };
  }, []);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>
        Up
      </button>
      <button onClick={() => setSecond((prevSecond) => prevSecond + 1)}>
        Up
      </button>
      <h1>{second}</h1>
    </div>
  );
};

export default Logger;
