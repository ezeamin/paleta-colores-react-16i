import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

import './colorCard.css';

const ColorCard = (props) => {
  const { color } = props; // recibo id y color

  return (
    <Col xs={12} md={4}>
      <Card className='p-3 m-2'>
        <Card.Body className='align-items-center'>
          <Card.Title className='text-dark'>Color {color.color}</Card.Title>
          <div className='colorBox' style={{backgroundColor: color.color}}></div>
          <div className='text-end mt-3'>
            <Button variant='primary' className="me-2" type='button'>
              Editar
            </Button>
            <Button variant='danger' type='button'>
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ColorCard;
