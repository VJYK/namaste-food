import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Links
 * Body
 *  -Search Component
 *  -Restaurent Container
 *      -image
 *      -restaurent name
 *      -cusine,rating,price,time for delivery
 * Footer
 *  -Copyright
 */

/* Header Component */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
          width={50}
          height={50}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

/* RestaunrentCard Component */

const stylecard={
    padding:"0px 10px"
}
const RestaurentCard = (props) => {
  console.log();
  let {name,avgRating,cloudinaryImageId,costForTwo,cuisines,sla} = props.resData.info 
  return (
    <div className="card-container">
      <img
        className="res-img-container"
        alt="gajar halwa"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
      <div className="card-subtext" style={stylecard}>
        <h4 className="resname">{name}</h4>
        <p>{cuisines.join(',')}</p>
        <p>{avgRating +'*'}</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime + 'minutes'}</p>
      </div>
    </div>
  );
};

/* Restaurent Object */

const restaurentList =[{
  "info": {
    "id": "40411",
    "name": "Bikanervala",
    "cloudinaryImageId": "rwbeqcztqy7l6laucc5u",
    "locality": "C Block",
    "areaName": "Preet Vihar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "North Indian",
      "Snacks",
      "Chaat",
      "Sweets"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "45936",
    "avgRatingString": "4.2",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 4.1,
    },
    "isOpen": true,
  }
},{
  "info": {
    "id": "40412",
    "name": "KFC",
    "cloudinaryImageId": "rwbeqcztqy7l6laucc5u",
    "locality": "C Block",
    "areaName": "Preet Vihar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "North Indian",
      "Snacks",
      "Chaat",
      "Sweets"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "45936",
    "avgRatingString": "4.2",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 4.1,
    },
    "isOpen": true,
  }
},{
  "info": {
    "id": "40413",
    "name": "Badami",
    "cloudinaryImageId": "rwbeqcztqy7l6laucc5u",
    "locality": "C Block",
    "areaName": "Preet Vihar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "North Indian",
      "Snacks",
      "Chaat",
      "Sweets"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "45936",
    "avgRatingString": "4.2",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 4.1,
    },
    "isOpen": true,
  }
}]

/* Body Component */

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurentList.map(restaurent=><RestaurentCard key={restaurent.info.id} resData={restaurent}/>)}
      </div>
    </div>
  );
};

/* Applayout Component */
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
