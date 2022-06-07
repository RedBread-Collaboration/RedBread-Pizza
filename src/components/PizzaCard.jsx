import React from "react";
import "../styles/PizzaCard.css";
import CardImg from "../media/Bavarian.png";

const PizzaCard = () => {
    return (
        <section className="Card_block">
            <div className="Card_content">
                <div className="Card_image"><img alt="Pizza image" src={CardImg} /></div>
                <div className="Pizza_name">
                    <h3 className=".Pizza_name_h3">Баварская</h3>
                    <div className="Calories_info" role="button" tabIndex={0}>
                        <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 190C149.706 190 190 149.706 190 100C190 50.2944 149.706 10 100 10C50.2944 10 10 50.2944 10 100C10 149.706 50.2944 190 100 190Z" fill="#BEBEBE"/>
                            <rect x="90" y="81" width="20" height="80" fill="#C4C4C4"/>
                            <circle cx="100" cy="53" r="15" fill="#C4C4C4"/>
                        </svg>
                    </div>
                </div>
                <div className="Pizza_info">
                     Охотничьи колбаски, грибы, свежие помидоры, фирменный  Чили соус, сыр + начинка
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default PizzaCard;