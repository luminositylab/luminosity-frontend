import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const BioModal = props => (
  <nav id="menu">
    <div className="inner">{console.log(console.log(props))}</div>
    <a className="close" onClick={props.handleClose} href="javascript:;">
      Close
    </a>
  </nav>
  // <Dialog
  //   open={isBioOpen}
  //   TransitionComponent={Transition}
  //   keepMounted
  //   onClose={handleClose}
  //   aria-labelledby="alert-dialog-slide-title"
  //   aria-describedby="alert-dialog-slide-description"
  // >
  //   <DialogTitle id="alert-dialog-slide-title">{member.name}</DialogTitle>
  //   <DialogContent>
  //     <DialogContentText id="alert-dialog-slide-description">
  //       {member.description}
  //     </DialogContentText>
  //   </DialogContent>
  //   <DialogActions>
  //     <Button onClick={handleClose} color="primary">
  //       Close
  //     </Button>
  //   </DialogActions>
  // </Dialog>
);

export default BioModal;
