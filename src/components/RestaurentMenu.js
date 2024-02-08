import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurant';
import RestaurentCategory from "./RestaurentCategory";
import {useState} from 'react';
const RestaurentMenu= ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] =useState(null);
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
        {categories.map((category,index)=><RestaurentCategory key={category?.card?.card.title} categoryData={category?.card?.card} showItem={index==showIndex?true:false} setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
    </>
}

export default RestaurentMenu;