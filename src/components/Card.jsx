export default function Card ({objectShared}) {
    console.log(objectShared);
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="card-title">{objectShared.properties.name}</h5>
                        <div className="row">
                            <div className="col-8">
                                <h6>Properties</h6>
                                <ul className="list-group list-group-flush">
                                    {Object.entries(objectShared.properties)
                                        .filter(([key]) => key !== 'created' && key !== 'edited' && key !== 'name')
                                        .slice(0, 4)
                                        .map(([key, value]) => (
                                            <li className="list-group-item p-1" key={key}>
                                                <strong>{key.replace(/_/g, ' ')}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="col-4">
                                <h6>Description</h6>
                                <p className="card-text">{objectShared.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}