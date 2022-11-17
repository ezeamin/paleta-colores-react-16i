import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import './formColor.css';

const FormColor = (props) => {
  const { colors, changeColorList, updateId, setUpdateId } = props;

  const [colorToShow, setColorToShow] = useState('#000000');

  useEffect(() => {
    if (updateId) {
      const color = colors.find((element) => {
        return element.id === updateId;
      });

      setColorToShow(color.color);
    }
  }, [updateId, colors]);

  const handleChange = (e) => {
    setColorToShow(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* [
        {
            id: 1234,
            color: #1234
        }
        ]
    */

    let newList;

    if (updateId) {
      // update color
      newList = colors.map((element) => {
        if (element.id === updateId) {
          return {
            ...element,
            color: colorToShow,
          };
        }

        return element;
      });

      setUpdateId(null);
      setColorToShow('#000000');
    } else {
      // agregar color
      const newColor = {
        id: Math.round(Math.random() * 30000) + 1,
        color: colorToShow,
      };

      newList = [...colors, newColor];
    }

    changeColorList(newList);
  };

  return (
    <Card className='formCard'>
      <Card.Body>
        <Card.Title className='text-dark'>
          {updateId ? 'Editar color' : 'Añadir color'}
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            value={colorToShow}
            onChange={handleChange}
            type='color'
            className='w-100 my-3'
            id='colorPicker'
          />
          <div className='text-end'>
            <Button variant='danger' type='submit'>
              Guardar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormColor;
