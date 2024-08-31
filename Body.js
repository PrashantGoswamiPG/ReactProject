import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mock"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{

    const [listofdata,setlist]=useState([]);
    const [filterlist,setfilterlistofdata]=useState([]);

    const [searchtext,setsearchtext]=useState("");

    useEffect (()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilterlistofdata(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // conditional rendering
    // if(listofdata.length==0 ){
    //     return <Shimmer />
    // } other way
    return listofdata.length==0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search" >
                    <input className="btn" value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value)
                    }}></input>
                    <button onClick={()=>{
                        const filterdata=listofdata.filter((res)=>
                            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        )
                        setfilterlistofdata(filterdata)
                    }}>search</button>
                </div>
                <button className="btn" onClick={()=>{
                    const filterdata=listofdata.filter((res)=>
                        res.info
                    .avgRating>3
                    )
                    setlist(filterdata)
                }}>enter for top rated</button>
            </div>
            <div className="res-container">
               {filterlist.map((restaurant)=>
                <RestaurantCard key={restaurant.info.id} resdata = {restaurant}/>
               )}
                
            </div>
        </div>
    )
}

export default Body;