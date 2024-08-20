import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';

function Product() {
 

  return (
   <div style={{display:'inline-flex', margin:'20px', height:'50px'}}>
    <Card style={{ width: '150px', height:'140px', borderColor:'white'}}>
      <Card.Img style={{width: '140px', height:'140px'}} src="https://th.bing.com/th/id/OIP.e1CfqJmQ-mcsOmeT68dulQHaJ4?pid=ImgDet&rs=1" />
      </Card>
       <Card style={{width: '400px', height:'140px', borderColor:'white' }}>
        <Card.Title >m</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card style={{width: '390px', height:'50px', paddingTop:'10px', borderColor:'white'}}>
        <Card.Subtitle>
         Price 
         {<Button variant="success" style={{marginLeft:'300px'}} > <Icon.Trash3/></Button>}
        </Card.Subtitle>
        </Card>
    </Card>
    </div> 
  )
}

export default Product;
