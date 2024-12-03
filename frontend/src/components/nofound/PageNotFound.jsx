import { Link } from 'react-router-dom'
const PageNotFound = () => {
    const styles = {
        div: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            marginBottom: "50px",
           
            
        },
        h1: {
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#00AAF5",
            
        },
        img: {
            width: "40%",
            height: "auto",
            marginBottom: "20px",
        },
        btn: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007bff",
            textDecoration: "none",
            borderRadius: "5px",
            
        },
    }
  return (
    <div className='container mt-5' style={styles.div}>
        <h1 style={styles.h1}>Page Not Found</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1U-fzbIq8W3EKClK4jZSXEkaeWKcX4aGIQ&s" alt="" style={styles.img} />
        <Link to ="/" style={styles.btn}>Go back to home</Link>
    </div>
  )
}

export default PageNotFound