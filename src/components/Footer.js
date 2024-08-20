import Card from 'react-bootstrap/Card';
import Bar from './Bar';

function BgColorExample() {
  return ( [
    <Bar/>,  
  (<footer style={{width:'100%', position:'absolute', bottom:'0'}}>
        <Card
          bg='dark'
          key='dark'
          text='light'
          style={{ width: '1308px', height:'400px'}}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </footer> 
      )])};

export default BgColorExample;