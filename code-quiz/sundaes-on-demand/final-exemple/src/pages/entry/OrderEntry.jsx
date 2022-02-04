import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Options";

export default function OrderEntry(){
    const [orderDetails] = useOrderDetails();
    return(
         <div>
             <h1>Design Your Sundae!</h1>
            <Options optionType="scoops" />
            <Options optionType="toppings" />
            <h2>Grand Total: {useOrderDetails.totals.grandTotal}</h2>
        </div>
    );
}