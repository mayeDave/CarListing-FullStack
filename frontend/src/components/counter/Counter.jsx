import { useState, useEffect } from 'react'

const Counter = () => {
    const styles = {
        button: {
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",  
            margin: "5px",
            backgroundColor: "blue",
            color: "white"
        },
        h2: {
            color: "blue",
            fontSize: "2em"
        }

    }

    //create state instance for the data you want to keep track of
    // const [getter, setter] = useState(defaultValue);
    const [counterValue, setCounterValue] = useState(0);

    //handle increment
    const handleIncrement = () => {
        setCounterValue(counterValue + 1);
    }
    //handle decrement
    const handleDecrement = () => {
        setCounterValue(counterValue - 1);
    }
    //do not decrement less than 0
    if (counterValue < 0) {
        setCounterValue(0);
    }
    //handle reset
    const handleReset = () => {
        setCounterValue(0);
    }

    // side effect operation
    const callAlert = () => {
        console.log("Hello from useEffect");
    }

    useEffect(() => {
        callAlert();
    }, [counterValue])
  return (
    <div>
        <h2 style={styles.h2}>Count: {counterValue}</h2>

        <div>
            
            <button style={styles.button} onClick={handleIncrement}>Increment</button>
            <button style={styles.button} onClick={handleDecrement}>Decrement</button>
            <button style={styles.button} onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter