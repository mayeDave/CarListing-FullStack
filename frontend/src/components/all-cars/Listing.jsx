import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard";
import Spinner from "react-bootstrap/Spinner";

const Listing = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // handle fetch cars from api
    const fetchCars = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/cars");
            const data = await response.json();

            setCars(data);
            setLoading(false);

            console.log(data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };
        useEffect(() => {
            fetchCars();
        }, []);
    // handle open single car details
    const openCarDetails = (id) => {
        navigate(`/cars/${id}`);
    };

    return (
        <div className="all-cars-container">
            {loading ? (
                <div className="loading">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <div className="cars-list">
                    {cars.map((car) => (
                        <CarCard
                        carImg={car.pictures[0]}
                        model={car.model}
                        postedBy={car.postedBy}
                        openFunc={() => openCarDetails(car._id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Listing