import { useState, useEffect } from "react";
import Card from "../components/Card";
import { objVehicles, objPeoples, objPlanets } from "../components/objects";
import { SimpleCard } from "../components/simpleCard";

export const Blog = () => {
    
    const [vehicles, setVehicles] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [isSelectedOne, setIsSelectedOne] = useState(false);
    const [urlToSimpleCard, setUrlToSimpleCard] = useState({properties: { name: "" },description: ""});

    const handleClick = (url) => {
        setUrlToSimpleCard(JSON.parse(JSON.stringify(url)));
        setIsSelectedOne(true);
    }

    const handleBack = () => {
        setIsSelectedOne(false);
    }

    const Carousel = ({shareObject, icon, onButtonClick}) => {
        return (
            <div className="cards-carousel-container">
                <div className="cards-carousel-inner">
                    {shareObject.map((object, idx) => (
                        <div key={object._id || idx} className="cards-carousel-item">
                            <Card objectShared={object} icon={icon} onButtonClick={onButtonClick} />
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
        console.log("All objects fetched");
    }, []);
    
    return (
        <> {
            isSelectedOne ? <SimpleCard shareUrl={urlToSimpleCard} onButtonClick={handleBack}/>
            : ( <>
        <Carousel shareObject={vehicles} icon={"🚀"} onButtonClick={handleClick} />
        <Carousel shareObject={peoples} icon={"🤖"} onButtonClick={handleClick} />
        <Carousel shareObject={planets} icon={"🪐"} onButtonClick={handleClick} />
        </> )
        }
        </>
    );
}
