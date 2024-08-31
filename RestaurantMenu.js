import React, { useEffect } from 'react'

const RestaurantMenu = () => {
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu= async ()=>{
        const data= await fetch("https://www.google-analytics.com/j/collect?v=1&_v=j101&a=396355699&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggycom%2Fcity%2Fmathura%2Fpizza-king-adarsh-nagar-shankar-vihar-rest682420&ul=en-usde=UTF-8dt=Pizza%20King%20%7C%20Home%20delivery%20%7C%20Order%20online%20%7C%20Adarsh%20Nagar%20Shankar_Vihar%20Mathura&sd=24-bit&sr=1536x864&vp=625x713&je=0&_u=QACAAEABAAAAACAAI~&jid=787974752&gjid=1928683158&cid=999224334.1720199603&uid=0&tid=0&_gid=2063605941.1722108762&_r=1&_slc=1&gtm=45He47o0n81MJV7Q8Qv78036788za200&gcd=13l3l3l3l1&dma=0&tag_exp=95250753&z=219052028");
        const json= await data.json();
        console.log("hh")
        console.log(json);
    }
  return (
    <div>
      <h1>Biryani</h1>
      <h1>Burger</h1>
    </div>
  )
}

export default RestaurantMenu
