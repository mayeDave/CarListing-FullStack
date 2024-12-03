import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

function Register() {
    // handle password show or hide
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      username: '',
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState({});

    const handleFormDataChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // handle clear input field
    const handleClearInput = () => {
        setFormData({
          name: '',
          username: '',
          email: '',
          password: '',
        });
        setErrors({});
    }

    // handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // send data to database: http://localhost:5000/api/signup
        try {
            const response = fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (!response.ok) 
                handleClearInput();
            response.json().then((data) => {
                console.log(data);
            })
        } catch (error) {
            
        }

    }

  return (
    <div className='container mt-5'>
        <h1 className='mb-3 text-center'>New User Registration</h1>
         <Form onSubmit={(e) => handleFormSubmit(e)}>
            
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={formData.name} onChange={(e) => handleFormDataChange(e)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={formData.username} onChange={(e) => handleFormDataChange(e)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => handleFormDataChange(e)} />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
            {/* display password */}
            {showPassword ? (
              <Form.Control type="text" value={formData.password} onChange={(e) => handleFormDataChange(e)} />
            ) : (
              <Form.Control type="password" value={formData.password} onChange={(e) => handleFormDataChange(e)} />
            )}
            <Form.Check
              type="checkbox"
              label="Show password"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            {errors.password && <p className="error">{errors.password}</p>}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   
  );
}

export default Register;