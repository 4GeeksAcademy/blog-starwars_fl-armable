
export function SimpleCard ({shareUrl, onButtonClick}) {
    let simpleObject = shareUrl;

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
                <div className="d-flex justify-content-between border-top pt-2 overflow-auto flex-nowrap" style={{maxWidth: '100%'}}>
                    {Object.entries(simpleObject.properties)
                        .filter(([key]) => key !== 'created' && key !== 'edited' && key !== 'name')
                        .map(([key, value]) => (
                            <div className="text-center flex-fill" key={key} style={{minWidth: '60px'}}>
                                <div className="text-uppercase small text-secondary" style={{fontSize: '0.7rem'}}>{key.replace(/_/g, ' ')}</div>
                                <div className="fw-bold" style={{fontSize: '0.9rem'}}>{Array.isArray(value) ? value.join(', ') : value}</div>
                            </div>
                        ))}
                </div>
                            <button
                                className="btn btn-learn-more"
                                style={{ border: 'none', background: 'none', color: '#0d6efd', padding: 0 }}
                                onMouseEnter={e => e.currentTarget.style.background = '#e7f1ff'}
                                onMouseLeave={e => e.currentTarget.style.background = 'none'}
                                onClick={() => onButtonClick()}
                            >
                                Go back!
                            </button>

            </div>
        </div>
    );
}