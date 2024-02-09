import { useContext } from "react";
import UserContext from "../utils/UserContext";
const stylecard={
    padding:"0px 10px"
}
const RestaurentCard = (props) => {
  const {loggedInUser} = useContext(UserContext)
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
        <p>User : {loggedInUser}</p>
      </div>
    </div>
  );
};

export const withLabelPromoted=(RestaurentCard)=>{
  return (props)=>{
    if(props){
      
      return (<>
        <label>Open</label>
        <RestaurentCard {...props}/>
    </>)
    }
  }
}

export default RestaurentCard;