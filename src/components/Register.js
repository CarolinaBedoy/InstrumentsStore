import { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'; 
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";

function FormExample() {

  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const handleSubmit = () => {
   

   /* const formData = {
      nombre,
      correo,
      contrasena
    };

    try {
      const response = await fetch('http://192.168.56.1/store/createUser.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Datos guardados correctamente');
        console.log(formData)
        navigate("/user")
      } else {
        console.error('Error al guardar datos');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
    setNombre('');
    setCorreo('');
    setContrasena('');
    */
   
      /*const user = {
      "name": nombre,
      "mail": correo,
      "password": contrasena,
      }
*/

    const data = {name, mail, password}
    const options = {
      mode: 'no-cors',
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
      }

/*
    return(
      fetch('http://localhost:8081/register'), options
      .then(res => res.json())
      .then(data => console.log(data))
      .then((response) => console.log("Success", response)))
      .catch(err => console.log(err)
    )*/
      
      try {
        const response =  fetch('http://localhost:8081/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          console.log('Datos guardados correctamente');
          console.log(data)
          navigate("/home")
        } else {
          console.error('Error al guardar datos');
        }
      } catch (error) {
        console.error('Error al conectar con el servidor:', error);
      }
      
      }


  return (
    <div>
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{margin:'30px', padding:'20px', width:'400px', backgroundColor:'white'}}>
    <div style={{backgroundColor:'white', color:'black', textAlign:'center'}}>
      <h1 style={{marginBottom:'30px'}}>REGISTRO</h1>
      </div>
      <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="username">
        <Form.Control type="text" placeholder="Username" value={name} 
            onChange={(e) => setName(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Ingresa un dato válido
          </Form.Control.Feedback>
        </Form.Group><br/> <br/> 
        <Form.Group as={Col} md="10" controlId="mail">
        <Form.Control type="email" placeholder="@email" value={mail}
            onChange={(e) => setMail(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Ingresa un dato válido
          </Form.Control.Feedback>
        </Form.Group><br/> <br/> 
        <Form.Group as={Col} md="10" controlId="password">
        <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group><br/> 
      </Row>
      <Form.Group className="mb-3">
      </Form.Group>
      <Button variant='success' type='submit' style={{marginLeft:'135px'}}>REGISTRARSE</Button>
    </Form>
    </div>
  );
}

export default FormExample;