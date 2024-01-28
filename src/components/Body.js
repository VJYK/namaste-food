import {restaurentList} from '../utils/mockData';
import RestaurentCard from './RestaurentCard';

import { useState } from 'react';

const Body = () => {
  const [listOfRestaurent,setListOfRestaurent]= useState(restaurentList);
  console.log(listOfRestaurent)
    return (
      <div className="body">
        <div className="search">
          <button className="filter-btn" onClick={()=>{
            let filterRestaurent = listOfRestaurent.filter(res=>res.info.avgRating>4);
            setListOfRestaurent(filterRestaurent)
          }
          }>Top Rated Restaurents</button>
        </div>
        <div className="res-container">
          {listOfRestaurent.map(restaurent=><RestaurentCard key={restaurent.info.id} resData={restaurent}/>)}
        </div>
      </div>
    );
  };

export default Body;