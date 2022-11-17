import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import './formColor.css';

const FormColor = (props) => {
  const { colors, changeColorList, updateId, setUpdateId } = props;

  const { register, handleSubmit } = useForm();

  const [colorToShow, setColorToShow] = useState('#000');

  useEffect(() => {
    if (updateId) {
      const color = colors.find((element) => {
        return element.id === updateId;
      });

      setColorToShow(color.color);
    }
  }, [updateId, colors]);

  const customHandleSubmit = (data) => {
    console.log(data);

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
            color: data.color,
          };
        }

        return element;
      });

      setUpdateId(null);
    } else {
      // agregar color
      const newColor = {
        id: Math.round(Math.random() * 30000) + 1,
        color: data.color,
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
        <Form onSubmit={handleSubmit(customHandleSubmit)}>
          <Form.Control
            {...register('color',{
              value: colorToShow
            })}
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
