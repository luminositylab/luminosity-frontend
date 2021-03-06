import React from 'react';

const BioModal = ({ open, title, description, handleClose }) =>
  open ? (
    <div className="biography">
      <div className="inner">
        <h1>{title}</h1>
        <div>{description}</div>
      </div>
      <a
        className="close"
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
          handleClose();
        }}
      >
        Close
      </a>
    </div>
  ) : (
    <></>
  );

export default BioModal;
