import { useDispatch } from "react-redux";
import { addItem } from "../stores/cartSlice";
const ItemList = ({items})=>{
    const dispatchItem = useDispatch();
    const handleAddItem = (item)=>{
        dispatchItem(addItem(item));
    };
   
    const styleCss ={
        listStyletype:"none"
    }
    return <>
        <ul>
            { items.map(item=> <li style={styleCss} key={item.card.info.id} >{item.card.info.name} <button onClick={()=>handleAddItem(item)}>+Add</button></li>) }
        </ul>
    </>
        
}
export default ItemList;