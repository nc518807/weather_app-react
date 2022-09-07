import React from 'react'
import './Description.css'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';

const Description = ({ Weather, Units }) => {

    const tempUnit = Units === "metric" ? "°C" : "°F";
    const windUnit = Units === "metric" ? "m/s" : "m/h";

    const Cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "Min",
            data: Weather.temp_min.toFixed(),
            unit: tempUnit,

        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: "Max",
            data: Weather.temp_max.toFixed(),
            unit: tempUnit,

        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "pressure",
            data: Weather.pressure,
            unit: "hPa",

        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "humidity",
            data: Weather.humidity,
            unit: "%",

        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "speed",
            data: Weather.speed.toFixed(),
            unit: windUnit,

        },
        {
            id: 6,
            icon: <FaWind />,
            title: "Feels_like",
            data: Weather.feels_like.toFixed(),
            unit: tempUnit,

        },

    ]


    return (
        <div className="section section__description">
            {
                Cards.map(({ id, icon, title, data, unit }) => (
                    <div key={id} className="card">
                        <div className="description__card-icon">
                            {icon}
                            <small>{title}</small>
                        </div>
                        <h1>{`${data} ${unit}`}</h1>
                    </div>


                ))



            }


        </div>
    )
}

export default Description