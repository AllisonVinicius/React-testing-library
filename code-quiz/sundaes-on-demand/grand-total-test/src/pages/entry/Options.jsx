import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import { pricePerItem } from '../../constants';
import AlertBanner from '../common/AlertBanner';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';


export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error,setError] = useState(false);
  const [orderDetails, updateItemCount] = useState();

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
       
  }, [optionType]);

  if (error){
     //@ts-ignore
    return <AlertBanner />;
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
 const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) => 
        updateItemCount(itemName,newItemCount,optionType)
      }
      
    />
  ));

  return (
      <>
          <h2>{title}</h2>
          <p>{pricePerItem[optionType]} each</p>
          <p>
            {title} total: {orderDetails.totals[optionType]}
          </p>
          <Row>{optionItems}</Row>;
      </>

  )
}