import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
    // handle password show or hide
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
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
          email: '',
          password: '',
        });
        setErrors({});
    }
    const [processing, setProcessing] = useState(false);

    // handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // send data to database: http://localhost:5000/api/auth/login
        try {
          setProcessing(true);
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
              const data = await response.json();
              setProcessing(false);
              console.log(data);
              // set token to local storage
              localStorage.setItem("authToken", data.authToken);
              alert("Login successful");
              handleClearInput();
      
              // navigate to login view
              navigate("/");
            }
          } catch (error) {
            console.error(error);
          }

    }
      

  return (
    <div className='container mt-5'>
        <h1 className='mb-3 text-center'>Login User</h1>
         <Form onSubmit={(e) => handleFormSubmit(e)}>
            
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
      { processing ? (
        <Spinner animation="border" variant="danger" />
      ) : (
      <Button variant="primary" type="submit">
        Login
      </Button>
      )}
    </Form>
    </div>
   
  );
}

export default Login;