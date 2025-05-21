import { useState, useEffect } from "react";
import Card from "../components/Card";
import { objVehicles, objPeoples, objPlanets } from "../components/objects";
import { SimpleCard } from "./simpleCard";

export const Blog = () => {
    
    const [vehicles, setVehicles] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [isSelectedOne, setIsSelectedOne] = useState(true);

    let urlToSimpleCard = "https://www.swapi.tech/api/vehicles/4";
    const handleClick = (url) => {
        urlToSimpleCard = url;
        setIsSelectedOne(true);
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
        fetchAllObjects(objPeoples).then(setPeoples);
        fetchAllObjects(objPlanets).then(setPlanets);
    }, []);
    
    return (
        <> {
            isSelectedOne ? <SimpleCard shareUrl={urlToSimpleCard}/>
            : ( <>
        <Carousel shareObject={vehicles} icon={"🚀"} onButtonClick={(event) => handleClick(event.target.value)} />
        <Carousel shareObject={peoples} icon={"🤖"} onButtonClick={(event) => handleClick(event.target.value)} />
        <Carousel shareObject={planets} icon={"🪐"} onButtonClick={(event) => handleClick(event.target.value)} />
        </> )
        }
        </>
    );
}
