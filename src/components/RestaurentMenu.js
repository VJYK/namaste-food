import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurant';
import RestaurentCategory from "./RestaurentCategory";
const RestaurentMenu= ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if(resInfo == null){
        return <Shimmer/>
    } 
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
    console.log(itemCards)
    const stylecard={
        listStyleType:"none"
    }
    const categories =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return <>
        <div className="text-center">
        <h3>{name}</h3>
        <p>{costForTwoMessage} - {cuisines.join(', ')}</p>
        {categories.map((category,i)=><RestaurentCategory key={i} categoryData={category?.card?.card}/>)}
        </div>
    </>
}

export default RestaurentMenu;