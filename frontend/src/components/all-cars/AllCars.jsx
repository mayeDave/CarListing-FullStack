import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./AllCars.css";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    setLoading(true);
    const url = "http://localhost:5000/api/cars";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("API Response:", data);
      if (data.cars && Array.isArray(data.cars)) {
        setCars(data.cars);
      } else {
        console.error("Unexpected response format:", data);
        setCars([]);
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  //format date string to mm/dd/yyyy
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <div className="all-cars-container">
      <h1>All Cars</h1>
      {loading && <Spinner animation="border" variant="primary" />}
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <div className="car-image">
            <img src={car.pictures} alt={car.make} />
          </div>
          <div className="car-details">
            <h2 className="car-make">{car.make}</h2>
            <div className="details-grid">
              <div className="detail-item">
                <p>
                  <strong>Model:</strong> {car.model}
                </p>
                <p>
                  <strong>Year:</strong> {car.year}
                </p>
              </div>
              <div className="detail-item">
                <p>
                  <strong>Price:</strong> ${car.price}
                </p>
                <p>
                  <strong>Mileage:</strong> {car.mileage}
                </p>
              </div>
              <div className="detail-item">
                <p>
                  <strong>Description:</strong> {car.description}
                </p>
                <p>
                  <strong>Condition:</strong> {car.condition}
                </p>
              </div>
            </div>
            <div className="posted-by">
              <p>
                <strong>Posted By:</strong>{" "}
                {car.postedBy ? car.postedBy.name : "Unknown"}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {car.postedBy ? car.postedBy.email : "Not provided"}
              </p>
              <p>
                  <strong>Posted On:</strong> {formatDate(car.createdAt)}
                </p>
              
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AllCars;
