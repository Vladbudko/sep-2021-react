import {useEffect, useState} from "react";
import Flight from "../Flight/Flight";

export default function Flights(){

    let [flightsList,setFligthsList] = useState([])
    useEffect(()=>{
            fetch('https://api.spacexdata.com/v3/launches/')
                .then(value => value.json())
                .then(flights =>{
                    setFligthsList(flights.filter(flight => flight.launch_year !== '2020'))
                } )
        },[]

    )


    return(
        <div>
            {
                flightsList.map(value => <Flight key = {value.fligth_number}
                                                 item={value}/>)

            }
        </div>
    )
}