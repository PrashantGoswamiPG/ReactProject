import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resdata}=props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines ,
        costForTwo,
        deliveryTime
    }=resdata?.info;
    return (
        <div className="res-card">
            <img style={{width:"11vw" ,padding:"2vw"}} src={CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(" ")}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default RestaurantCard;