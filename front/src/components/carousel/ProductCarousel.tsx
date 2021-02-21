import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image05 from "assets/images/05.jpg";
import image06 from "assets/images/06.jpg";
interface configProps {
  swipeable?: boolean;
}
export default function ProductCarousel({ ...props }: configProps) {
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={false}
        swipeable={true}
        useKeyboardArrows={true}
        interval={2000}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        width={"40%"}
      >
        <div>
          <img src={image05} alt="carousel-three" />
        </div>
        <div>
          <img src={image06} alt="carousel-three" />
        </div>
      </Carousel>
    </>
  );
}
