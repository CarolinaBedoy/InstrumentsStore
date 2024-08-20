import Carousel from 'react-bootstrap/Carousel';

export default function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="img-thumbnail"
          src="https://th.bing.com/th/id/R.6716a41a891ce2cd059cf66353c8db87?rik=zKpV8buaSIo74A&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="img-thumbnail"
          src="https://th.bing.com/th/id/R.6716a41a891ce2cd059cf66353c8db87?rik=zKpV8buaSIo74A&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-thumbnail"
          src="https://th.bing.com/th/id/R.6716a41a891ce2cd059cf66353c8db87?rik=zKpV8buaSIo74A&pid=ImgRaw&r=0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
