 import { useState, useEffect } from "react";

export function SimpleCard (shareUrl) {
    const objectShared = {
        properties: {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            eye_color: "blue",
            birth_year: "19BBY"
        },
        description: "A Jedi Knight and the son of Anakin Skywalker, Luke is a key figure in the Rebel Alliance's fight against the Galactic Empire. He is known for his bravery, skill with a lightsaber, and strong connection to the Force."
    };

    const [simpleObject, setSimpleObject] = useState(objectShared);

    useEffect(() => {
        fetch(shareUrl.shareUrl)
        .then(res => res.json())
        .then(data => setSimpleObject(data.result))
        .catch(err => console.error(err))
    }, []);

    return (
        <div className="card mx-auto w-75 g-0">
            <div className="card-body p-2">
                <div className="d-flex mb-2 gap-2">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/500px-Star_Wars_Logo.svg.png"}
                    alt="avatar" className="card-image flex-shrink-0" style={{width: '150px', objectFit: 'contain'}} />
                    <div className="flex-grow-1">
                        <h5 className="card-title mb-1">{simpleObject.properties.name}</h5>
                        <p className="card-text mb-0">{simpleObject.description}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between border-top pt-2">
                    {Object.entries(simpleObject.properties)
                        .filter(([key]) => key !== 'created' && key !== 'edited' && key !== 'name')
                        .map(([key, value]) => (
                            <div className="text-center flex-fill" key={key} style={{minWidth: '60px'}}>
                                <div className="text-uppercase small text-secondary" style={{fontSize: '0.7rem'}}>{key.replace(/_/g, ' ')}</div>
                                <div className="fw-bold" style={{fontSize: '0.9rem'}}>{Array.isArray(value) ? value.join(', ') : value}</div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}