import React from 'react'

const Greeting = () => {
    const currenttime = new Date().getHours();
    let  message = "";

    if  (currenttime >= 4 && currenttime < 12) {
        message = "Good Morning";
    }else if (currenttime >= 12 && currenttime <=17) {
        message = "Good AfterNoon";
    }else if (currenttime >= 18 && currenttime <= 22) {
        message = "Good Evennig";
    }else if (currenttime >= 23 || currenttime <=4){
        message = "Good Night";
    }


  return (
    <div style={{color:"black"}} > {message}</div>
  )
}   

export default Greeting