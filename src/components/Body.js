import {restaurentList} from '../utils/mockData';
import RestaurentCard,{withLabelPromoted} from '../components/RestaurentCard.js';

import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { LIST_API } from '../utils/constant';
const Body = () => {
  const [listOfRestaurent,setListOfRestaurent]= useState([]);
  const [filteredRestaurent,setFilteredRestaurent]= useState([]);
  const [searchText,setSearchText]=useState('');
  
  const RestaurentCardPromoted =withLabelPromoted(RestaurentCard);
  
  useEffect(() => {
   fetchData()
  },[])

  const fetchData =async ()=>{
    const data = await fetch(LIST_API)
    const json = await data.json()
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //Optional Chaining
    setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(listOfRestaurent)
  }
  
  //Conditional Rendering
  return listOfRestaurent.length==0?<Shimmer/>: (
      <div className="body">
        <div className="search">
          <div>
            <input type='text' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>{const filteredRestaurent= listOfRestaurent.filter(res=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredRestaurent(filteredRestaurent)
            }}>Search</button>
          </div>

          <button
            className="filter-btn"
            onClick={() => {
              let filterRestaurent = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurent(filterRestaurent);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurent.map((restaurent) => (
            <Link to={`restaurent/${restaurent.info.id}`} key={restaurent.info.id}> {restaurent.info.isOpen ? (<RestaurentCardPromoted resData={restaurent}/>) : (<RestaurentCard resData={restaurent} />)} </Link>
          ))}
        </div>
      </div>
    );
  };

export default Body;