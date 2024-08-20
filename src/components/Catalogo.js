import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import Bar from './Bar';
import Cart from './CartProduct';

function Catalogo(props) {

  function add(){
    alert('Producto agregado al carrito')
  }
  return ([<Bar/>,
    (props.instrumentos.map((instrumento => 

    <div class='container' style={{margin:'50px', marginLeft:'140px'}} >
    <Card style={{ width:'1000px', height:'250px'}}>
    <div class="row no-gutters">
        <div class='col-md-3' >
        <div class='container'> 
    <Carousel variant="dark" style={{width:'230px', height:'230px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../categories/${instrumento.clasification}/${instrumento.category}/Images/${instrumento.image}.png`)}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../categories/${instrumento.clasification}/${instrumento.category}/Images/${instrumento.image2}.png`)}
        />
      </Carousel.Item>
    </Carousel>
    </div>
      </div>
      <div class='col-md-3'>
      <Card.Body style={{textAlign:'center', marginTop:'50px'}}>
        <Card.Title id='5'>{instrumento.name}</Card.Title>
        <Card.Title >
        {instrumento.price}
        </Card.Title><br/><br/><br/>
      </Card.Body>
    </div>
    <div class='col-md-6'>
    <Card.Title style={{marginTop:'10px', textAlign:'center'}}>
         Descripción
        </Card.Title>
      <Card.Body style={{textAlign:'left', fontSize:'small'}}>
        <Card.Text>
        {instrumento.description}
</Card.Text>
      
        <Button variant="success" style={{marginRight:'7px'}} onClick={add}><Icon.Cart/></Button> 
        <Button variant="success"> <Icon.Coin variant='small'/> COMPRAR AHORA</Button>
      </Card.Body>
    </div>
    </div>
    </Card>
    </div>
    )))
  ]);
}




export default Catalogo;
