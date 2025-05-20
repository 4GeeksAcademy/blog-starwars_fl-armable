export default function Card ({objectShared}) {
    return (
        <div className="card mb-3 g-0" style={{ maxWidth: '300px' }}>
                    <div className="card-body">
                        <div className="card-header bg-white">
                            <h1 className="text-center">🛸</h1>
                            </div>
                        <h5 className="card-title">{objectShared.properties.name}</h5>
                        <div className="row">
                            <div>
                                <h6>Properties</h6>
                                <ul className="list-group list-group-flush">
                                    {Object.entries(objectShared.properties)
                                        .filter(([key]) => key !== 'created' && key !== 'edited' && key !== 'name')
                                        .slice(0, 3)
                                        .map(([key, value]) => (
                                            <li className="list-group-item p-1" key={key}>
                                                <strong>{key.replace(/_/g, ' ')}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="card-footer bg-white">
                                <h6>Description</h6>
                                <p className="card-text">{objectShared.description}</p>
                            </div>
                        </div>
                    </div>
        </div>
    );
}