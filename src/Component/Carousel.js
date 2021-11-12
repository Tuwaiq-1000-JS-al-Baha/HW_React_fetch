import { Carousel } from "react-bootstrap"

function CarouselGroup(props) {
  return (
    <Carousel className="d-block w-50 mx-auto mt-5">
      {props.CarouselItems.map(CarouselItem => (
        <Carousel.Item>
          <img height="500px" src={CarouselItem.Image} alt="First slide" />
          <Carousel.Caption>
            <h3>{CarouselItem.title}</h3>
            <p>{CarouselItem.body}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselGroup
