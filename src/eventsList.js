import React, {useState, useEffect} from "react";
import Item from "./eventItem.js"

const link = "https://beckertrans.pl/automobilevents_api/api/event/read.php"

function List() {

    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch(link)
        .then((response) => response.json())
        .then((responseJson) => {
            setItems(responseJson);
        })
    }, []);

    return(
        <div className="list">
            {items.map(item => (
                <Item name={item.name} image={item.image} description={item.description} startDate={item.start_date} endDate={item.end_date} />
            ))}
        </div>
    );

}

export default List;