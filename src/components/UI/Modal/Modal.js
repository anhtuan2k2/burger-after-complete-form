import React from 'react';
import classes from './Modal.css';
import Cov from '../../../hoc/Cov';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Cov>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
        transition: '1.5s',
      }}
    >
      {props.children}
    </div>
  </Cov>
);

export default modal;
