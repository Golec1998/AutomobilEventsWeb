import React from "react";
import "./eventItem.css"

function Item(props) {

    const imageLink = "https://beckertrans.pl/automobilevents_api/images/";

    return(
        <div className="item">
            <img src={imageLink + props.image + ".jpg"} />
            <div className="itemContent">
                <h1>{props.name}</h1>
                <p>{props.startDate} - {props.endDate}</p>
            </div>
        </div>
    );

}

export default Item;