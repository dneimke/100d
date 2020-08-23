import React from 'react';

const DisplayLinks = (props) => {
  return (
    <div className="d-flex flex-row">
      {props.links.map((x) => (
        <div key={x} className="card mx-2" style={{ width: '18rem' }}>
          <div className="card-header">
            <button
              type="button"
              className="close float-right"
              aria-label="Close"
              onClick={() => props.onRemove(x)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            [FAVICON]
          </div>
          <div className="card-body">
            <p className="card-text">
              TODO: Get description from link URL
            </p>
            <a className="card-link" target="_blank" href={x}>
              {x}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayLinks;
