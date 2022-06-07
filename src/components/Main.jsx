import React, { useRef } from "react";
import "../styles/Main.css";
import PizzaCard from "../components/PizzaCard";
import Slider1 from "../media/block1.jpg";
import Slider2 from "../media/block2.jpg";
import Slider3 from "../media/block3.jpg";
import Carousel from "react-elastic-carousel";
import "../styles/carousel.css";


const Main = () => {
    const carouselRef = useRef(null);
    let resetTimeout;

    return (
        <section className="Main_block">
            <article className="slider_block">
                <div className="slider">
                    <Carousel
                        ref={carouselRef}
                        disableArrowsOnEnd={false}
                        showArrows={false}
                        enableAutoPlay={true}
                        autoPlaySpeed={5000}
                        pagination={false}
                        enableSwipe={false}
                        onNextEnd={({ index }) => {
                            console.log(index);
                            clearTimeout(resetTimeout);
                            if (index + 1 === 3) {
                                resetTimeout = setTimeout(() => {
                                    carouselRef.current.goTo(0);
                                }, 1500);
                            }
                        }}>
                        <a href=""><img src={Slider1} /></a>
                        <a><img src={Slider2} /></a>
                        <a><img src={Slider3} /></a>
                    </Carousel>
                </div>
            </article>
            <article className="Content_block">
                <aside className="Cart">
                    <div></div>
                    <div></div>
                </aside>
                <article className="Menu_block">
                    <div className="Pizza_card">
                        <PizzaCard></PizzaCard>
                        <PizzaCard></PizzaCard>
                        <PizzaCard></PizzaCard>
                        <PizzaCard></PizzaCard>
                        <PizzaCard></PizzaCard>
                        <PizzaCard></PizzaCard>
                        <PizzaCard></PizzaCard>
                        <PizzaCard></PizzaCard>
                        <PizzaCard></PizzaCard>
                    </div>
                </article>
            </article>
        </section>
    );
};
export default Main;
