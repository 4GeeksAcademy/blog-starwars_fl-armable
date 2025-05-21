export default function Card ({objectShared, icon, onButtonClick}) {

    const localHandleClick = e => {
        e.currentTarget.classList.toggle('star-filled');
    }

    return (
        <div className="card mb-1 g-0" style={{ width: '200px' }}>
            <div className="card-body">
                <div className="card-header bg-white">
                    <h1 className="text-center">{icon}</h1>
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
                    <div className="card-footer bg-white d-flex justify-content-between p-1 flex-column">
                        <h6>Description</h6>
                        <p className="card-text card-description-ellipsis">{objectShared.description}</p>
                        <div className="d-flex w-100 justify-content-between mt-0">
                            <button
                                className="btn btn-learn-more"
                                style={{ border: 'none', background: 'none', color: '#0d6efd', padding: 0 }}
                                onMouseEnter={e => e.currentTarget.style.background = '#e7f1ff'}
                                onMouseLeave={e => e.currentTarget.style.background = 'none'}
                                onClick={() => onButtonClick(objectShared)}
                            >
                                Learn more!
                            </button>
                            <button
                                className={`btn btn-fav-star`}
                                style={{ border: 'none', background: 'none', color: '#ffc107', padding: 0 }}
                                onMouseEnter={e => e.currentTarget.style.background = '#fffbe7'}
                                onMouseLeave={e => e.currentTarget.style.background = 'none'}
                                onClick={localHandleClick}
                            >
                                <span className="star-label">✰</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}