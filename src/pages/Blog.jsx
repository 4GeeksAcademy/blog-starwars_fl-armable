import { useState, useEffect } from "react";
import Card from "../components/Card";
import { objVehicles, objPeoples, objPlanets } from "../components/objects";

export const Blog = () => {
    
    const [vehicles, setVehicles] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [planets, setPlanets] = useState([]);

    const getObj = async (url) => {
    const res = await fetch(url);
    let objData = await res.json();
    return objData;
    }

    const Carousel = ({shareObject, icon}) => {
        return (
            <div className="cards-carousel-container">
                <div className="cards-carousel-inner">
                    {shareObject.map((object, idx) => (
                        <div key={object._id || idx} className="cards-carousel-item">
                            <Card objectShared={object} icon={icon} />
                        </div>
                    ))}
                </div>
            </div>
        );
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
        fetchAllObjects(objPeoples).then(setPeoples);
        fetchAllObjects(objPlanets).then(setPlanets);
    }, []);
    
    return (
        <>
        <Carousel shareObject={vehicles} icon={"🚀"} />
        <Carousel shareObject={peoples} icon={"🤖"} />
        <Carousel shareObject={planets} icon={"🪐"} />
        </>
    );
}
