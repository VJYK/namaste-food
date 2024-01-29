import {restaurentList} from '../utils/mockData';
import RestaurentCard from './RestaurentCard';

import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurent,setListOfRestaurent]= useState([]);
  const [filteredRestaurent,setFilteredRestaurent]= useState([]);
  const [searchText,setSearchText]=useState('');
  useEffect(() => {
   fetchData()
  },[])

  const fetchData =async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6237315&lng=77.2748902&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
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
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          ))}
        </div>
      </div>
    );
  };

export default Body;