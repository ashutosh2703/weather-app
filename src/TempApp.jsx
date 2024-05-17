import React, { useEffect, useState } from 'react';
import './App.css';

function TempApp() {
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState("Jaipur" );
    useEffect(()=>{
        const fetchapi=async()=>{
           const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e10570275fcaa8ec5554698f22db1d39`; 
           const response = await fetch(url);
           const resjson= await response.json();
           setcity(resjson.main);
        }
        fetchapi();
    },[search]);

     console.log(city);
    return (
        
        <>
            <div className="container">
                <div className="header">Weather</div>
                <div className="addTask">
                    <input 
                        type="Search"
                        onChange={(event) => {
                            setsearch(event.target.value);
                        }}
                        id="inputTask"
                        placeholder="Search here" 
                    />
                </div>
                {
                    !city ? (
                        <>
                            <p>No Data Found</p>
                    <br/>
                        </>
                        ):
                    (
                        <div className='info'>
                    <h2 className='location'>
                        <i className="fa-solid fa-street-view"></i> {search}
                    </h2>
                    <h1 className='temp'>
                        {city.temp}°Cel
                    </h1>
                    <h3>Feels like:{city.feels_like}°Cel</h3>
                    <h3 className='tempmin_max'>
                       Min :{city.temp_min}°Cel | Max : {city.temp_max}°Cel
                    </h3>
                </div>
                    )
                }
                
              
            </div>
        </>
    );
}

export default TempApp;

