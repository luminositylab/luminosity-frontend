import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const BioModal = ({ isBioOpen, member, handleClose }) =>
  isBioOpen && (
    <div id="overlay">
      <div className="inner">{member.description}</div>
      <a className="close" onClick={handleClose} href="javascript:;">
        Close
      </a>
    </div>
  );

export default BioModal;
