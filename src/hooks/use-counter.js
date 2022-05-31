import { useState, useEffect } from 'react';

//here we pass in to the function the parameter forwards, which we set to true.
//Through this parameter that we set to a boolean value, we can control how the custom hook will behave:
// whether it will be a + or a -
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(forwards) {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1); 
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter; 
