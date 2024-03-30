import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function ProjectCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section id="working-sec">
        <div className="latest-sec">
          <div className="work-cont">
            <h3 div data-aos="fade-up">
              My Latest Work
            </h3>
            <div className="underline"></div>
          </div>

          <div className="work-cont1">
            <h3 div data-aos="fade-up">
              EXPLORE WORK
            </h3>
          </div>
        </div>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          swipeable={false}
          draggable={false}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div>
            <img
              className="img"
              src="./assets/Images/Project/homecakebake.jpg"
            />
          </div>
          <div>
            <img className="img" src="./assets/Images/Project/vbumca.jpg" />
          </div>
          <div>
            <img
              className="img"
              src="./assets/Images/Project/pran-thumbnail.jpg"
            />
          </div>
          <div>
            <img className="img" src="./assets/Images/monika-raj.png" />
          </div>
        </Carousel>
      </section>
    </>
  );
}

export default ProjectCarousel;
