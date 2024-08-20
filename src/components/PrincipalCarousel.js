import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="light" style={{width:'1308px', height:'600px', backgroundColor:'black', padding:'50px', paddingTop:'0px'}}>
      <Carousel.Item>
        <div style={{display:'inline-flex'}}>
        <img style={{width:'400px', height:'600px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/d5/13/06/d51306105010b41d8d243073fb938159.jpg"
          alt="First slide"
        />
         <img style={{width:'400px', height:'500px', paddingTop:'50px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/9f/78/1c/9f781cb0bffec01d21fcce2492f8c778.jpg"
          alt="First slide" 
        />
         <img style={{width:'400px', height:'500px', marginTop:'50px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/58/7e/04/587e04f64f3c5fa782304805f8b03808.jpg"
          alt="First slide"
        />
        </div>
        <Carousel.Caption >
          <h1>C U E R D A</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display:'inline-flex'}}>
        <img style={{width:'400px', height:'500px', paddingTop:'50px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/78/0c/24/780c2491b309c0590c1213ab913d8150.jpg"
          alt="First slide"
        />
         <img style={{width:'400px', height:'500px', paddingTop:'50px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/9c/f6/8a/9cf68aed7a68d447b48a51d84dbf79f5.jpg"
          alt="First slide" 
        />
         <img style={{width:'400px', height:'500px', paddingTop:'50px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/7f/b8/7a/7fb87af62f0f318f4771c437a7c0b2a8.jpg"
          alt="First slide"
        />
        </div>
        <div style={{marginTop:'100px'}}>
        <Carousel.Caption >
          <h1>V I E N T O</h1>
        </Carousel.Caption>
       </div> 
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display:'inline-flex'}}>
        <img style={{width:'400px', height:'500px', paddingTop:'50px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/ca/b5/8d/cab58d443cfc37b59fe01ca1ce4a9c1e.jpg"
          alt="First slide"
        />
         <img style={{width:'400px', height:'500px', paddingTop:'50px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/41/0d/ca/410dcae2de051a9bd8562d2c4e07f696.jpg"
          alt="First slide" 
        />
         <img style={{width:'400px', height:'450px', marginTop:'50px'}}
          className="d-block"
          src ="https://i.pinimg.com/564x/fc/c1/45/fcc1456e2f25ac16df98c4ced2af988b.jpg"
          alt="First slide"
        />
        </div>
        <div style={{marginTop:'100px'}}>
        <Carousel.Caption >
          <h1>P E R C U S I Ó N</h1>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;