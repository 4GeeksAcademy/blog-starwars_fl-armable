import { useState, useEffect } from "react";
import Card from "../components/Card";

export const Blog = () => {
    
    const obj = [
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
    
    const getVehicle = async (url) => {
    const res = await fetch(url);
    let vehicleData = await res.json();
    return vehicleData;
    }
    


    useEffect(() => {
        // Función para obtener todos los vehículos y guardar el array de results
        const fetchAllVehicles = async () => {
            const promises = obj.map(async (item) => {
                const data = await getVehicle(item.url);
                return data.result;
            });
            const results = await Promise.all(promises);
            setVehicles(results);
        }

        fetchAllVehicles();
    }, []);

    return (
        <>
            {vehicles.map((vehicle, idx) => (
                <Card key={vehicle._id || idx} objectShared={vehicle} />
            ))}
        </>
    );
}