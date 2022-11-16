import React from 'react';
import { Row } from 'react-bootstrap';
import ColorCard from '../ColorCard/ColorCard';

const ColorList = (props) => {
  const { colors, changeColorList } = props;

  return (
    <Row className='my-5'>
      {colors.map((color) => {
        return <ColorCard key={color.id} color={color} />;
      })}
    </Row>
  );
};

export default ColorList;
