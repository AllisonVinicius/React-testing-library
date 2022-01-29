import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOptions';

export default function Options({optionType}){
    const [items, setItems] = useState([]);

   //optionType = is 'scoops' or 'toppings'
    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
        .then(response => setItems(response.data))
        .catch((error) => {
            //TODO: handle error response
        })

    },[optionType]);

    //TODO: replace `null` with ToppingOpytion when avaliabçe
    const ItemComponent = optionType === 'scoops' ? ScoopOption :  null;

    const optionItems = items.map((items) => (
        <ItemComponent 
            key={items.name} 
            name={items.name} 
            imagePath={items.imagePath}
        />
    ));

    return <Row>{optionType}</Row>;
}


