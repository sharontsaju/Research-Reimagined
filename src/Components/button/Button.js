import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.css';

function CustomButton({ text }) {
  return (
    <Button variant="dark" className="custom-button ">
      {text}
    </Button>
  );
}

export default CustomButton;