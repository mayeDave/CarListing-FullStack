import React from 'react'

const BButton = ({bgColor, btnFunc, children}) => {
    const styles = {
        backgroundColor: bgColor || "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
    }
  return (
    <button onClick={btnFunc} style={styles}>{children}</button>
  )
}

export default BButton