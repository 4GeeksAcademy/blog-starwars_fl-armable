import { useState, useEffect } from "react";
import Card from "../components/Card";

export const Blog = () => {
    
    const objVehicles = [
        {
            uid: "4",
            name: "Sand Crawler",
            url: "https://www.swapi.tech/api/vehicles/4"
        },
        {
            uid: "7",
            name: "X-34 landspeeder",
            url: "https://www.swapi.tech/api/vehicles/7"
        },
        {
            uid: "6",
            name: "T-16 skyhopper",
            url: "https://www.swapi.tech/api/vehicles/6"
        },
        {
            uid: "8",
            name: "TIE/LN starfighter",
            url: "https://www.swapi.tech/api/vehicles/8"
        },
        {
            uid: "14",
            name: "Snowspeeder",
            url: "https://www.swapi.tech/api/vehicles/14"
        },
        {
            uid: "18",
            name: "AT-AT",
            url: "https://www.swapi.tech/api/vehicles/18"
        },
        {
            uid: "16",
            name: "TIE bomber",
            url: "https://www.swapi.tech/api/vehicles/16"
        },
        {
            uid: "19",
            name: "AT-ST",
            url: "https://www.swapi.tech/api/vehicles/19"
        },
        {
            uid: "20",
            name: "Storm IV Twin-Pod cloud car",
            url: "https://www.swapi.tech/api/vehicles/20"
        },
        {
            uid: "24",
            name: "Sail barge",
            url: "https://www.swapi.tech/api/vehicles/24"
        }
    ]
    const [vehicles, setVehicles] = useState([]);
    
    const getObj = async (url) => {
    const res = await fetch(url);
    let objData = await res.json();
    return objData;
    }
    


    useEffect(() => {
        // Función para obtener todos los objetos y guardar el array de results
        const fetchAllObjects = async (obj) => {
            const promises = obj.map(async (item) => {
                const data = await getObj(item.url);
                return data.result;
            });
            const results = await Promise.all(promises);
            return results;
        }
        fetchAllObjects(objVehicles).then(setVehicles);
    }, []);

    return (
        <div className="cards-carousel-container">
            <div className="cards-carousel-inner">
                {vehicles.map((vehicle, idx) => (
                    <div key={vehicle._id || idx} className="cards-carousel-item">
                        <Card objectShared={vehicle} />
                    </div>
                ))}
            </div>
        </div>
    );
}

{/*const Carrusel = () => {
    return (

    );
}*/}