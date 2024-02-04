import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from '../utils/constant';
const RestaurentMenu= ()=>{
    const {resId} = useParams()
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData = async ()=>{
        const data = await fetch(MENU_API+resId)
        const json = await data.json()
        setResInfo(json.data)
        console.log(json.data.cards)
    }
    if(resInfo == null){
        return <Shimmer/>
    } 
        

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
    console.log(itemCards)
    return <>
        <h3>{name}</h3>
        <p>{costForTwoMessage} - {cuisines.join(', ')}</p>

        <ul>
            {itemCards.map(item=>
                <li key={item.card.info.id}>{item.card.info.name}+ -  Rs. +{item.card.info.price/100}</li>

            )}
        </ul>
    </>
}

export default RestaurentMenu;