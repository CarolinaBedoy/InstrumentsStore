import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


function FormExample() {
  const [validated, setValidated] = useState(false);
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      correo,
      contrasena
    };
    try {
      const response = await fetch('http://192.168.56.1/store/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)});
        console.log(response)
      if (response.ok) {
        alert('Bienvenido')
        navigate("/user")
      } else {
       alert('Error')
      }
    } catch (error) {
    }
    setCorreo('')
    setContrasena('')
  };

  return (
    <div>
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{margin:'30px',  padding:'20px', width:'400px', backgroundColor:'white'}}>   
      <div style={{backgroundColor:'white', color:'black', textAlign:'center'}}>
      <h1 style={{marginBottom:'30px'}}>INICIAR SESIÓN</h1>
      </div>
        <Form.Group as={Col} md="10" controlId="correo">
        <Form.Control type="email" placeholder="@correo" value={correo}
            onChange={(e) => setCorreo(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Ingresa un dato válido
          </Form.Control.Feedback>
        </Form.Group><br/> 
        <Form.Group as={Col} md="7" controlId="contrasena">
        <Form.Control type="password" placeholder="Contraseña" value={contrasena}
            onChange={(e) => setContrasena(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group><br/> <br/> 
      <Button variant='success' type="submit" style={{marginLeft:'135px'}}>INICIAR SESIÓN</Button>
    </Form>
    </div>
  );
}

export default FormExample;