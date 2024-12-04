import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const AddCar = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    description: "",
    mileage: "",
    condition: "",
    pictures: [""],
  });

  // handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
  
    setValidated(true);

    // handle add car from api
    const apiUrl = import.meta.env.VITE_API_URL;
  
    try {
      const response = await fetch(`${apiUrl}/api/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //get authorisation from  saved token
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Car created successfully:", data);
  
        // Reset the form data after successful submission
        setFormData({
          make: "",
          model: "",
          year: "",
          price: "",
          description: "",
          mileage: "",
          condition: "",
          pictures: [""],
        });
  
        setValidated(false); // Reset validation state
      } else {
        alert(data.message);
        console.error("Error creating car:", data);
        setFormData({
          make: "",
          model: "",
          year: "",
          price: "",
          description: "",
          mileage: "",
          condition: "",
          pictures: [""],
        })
      }
    } catch (error) {
      console.error("Error creating car:", error);
    }
  };
  

  return (
    <div className="container mt-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Make</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="make"
              value={formData.make}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Model</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="model"
              value={formData.model}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Year</Form.Label>
            <Form.Control
              required
              type="number"
              onChange={handleChange}
              name="year"
              value={formData.year}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              onChange={handleChange}
              name="price"
              value={formData.price}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="description"
              value={formData.description}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label>Mileage</Form.Label>
            <Form.Control
              required
              type="number"
              onChange={handleChange}
              name="mileage"
              value={formData.mileage}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Condition</Form.Label>
            <Form.Control
              as="select"
              required
              onChange={handleChange}
              name="condition"
              value={formData.condition}
            >
              <option value="">Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom08">
            <Form.Label>Picture</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="pictures"
              value={formData.pictures}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default AddCar;
