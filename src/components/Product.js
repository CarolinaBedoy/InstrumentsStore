import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Bar from '../components/Bar';
         
document.body.style.backgroundColor='#340909';
function Product(props) {
  return [<Bar/>, (
    props.instrumentos.map((instrumento => 
      <div class='container'>
    <Card style={{float:"left",  width:'330px', height:'400px', margin:'20px', padding:'20px', backgroundColor:'#DAF7A6', alignItems:'center', textAlign:'center'}}>
     <Card.Img variant="top" width='300px' height='300px' src={require(`../images/product-${instrumento.image}.png`)} />
      <Card.Body>
        <Card.Title>{instrumento.name}</Card.Title><br/>
        <Button href={(`/${instrumento.image}`)}  variant="success">+</Button>
      </Card.Body>
    </Card>
    </div>
    )))
  ]
  }

    export default Product;

    