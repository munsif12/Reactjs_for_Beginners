import React from 'react'
import Api from "./Arrayofobjects"
import Card from "./Card";

const userInput = prompt("Enter 0 for netflix and 1 for Amzaon prime movies :- ");
var favWebsite = "";

//Tereny operator to show to topic which user selects 
userInput === "0" ? favWebsite = 'NETFLIX' : favWebsite = 'AMAZON PRIME';
function FavSiteNetflix(val, index) {//mapping the elements of API to get data the data on the bases of user selection wether netflix or Amzaon prime
    if (userInput === "1") {//if users enters 1 it will show only Amazon Prime movies in api
        if (val.website === "Amzaon Prime") {
            return (//if we dont return no data will be shown
                <Card key={val.id} name={val.name} imgSrc={val.imgSrc} number={index + 1} />
            )
        }
    }
    else if (userInput === "0") {//if users enter 0 it will show only Netflix movies in api
        if (val.website === "Netflix") {
            return (
                <Card key={val.id} name={val.name} imgSrc={val.imgSrc} number={index + 1} />
            )
        }
    }
}
function MainApp() {
    return (
        <>
            <h1> {favWebsite} </h1>
            <div className="netflixBody">
                {Api.map(FavSiteNetflix)}{/* every return card will be shown here */}
            </div>
            <h1>The End</h1>
        </>
    )
}

export default MainApp
