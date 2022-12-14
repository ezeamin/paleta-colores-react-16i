import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ColorList from './components/ColorList/ColorList';
import FormColor from './components/FormColor/FormColor';

const App = () => {
  const [colors, setColors] = useState([]);
  const [updateId, setUpdateId] = useState(null);

  const changeColorList = (newList) => {
    setColors(newList);

    localStorage.setItem('colors', JSON.stringify(newList));
  };

  useEffect(() => {
    const colorsLS = JSON.parse(localStorage.getItem('colors'));

    if (colorsLS) {
      setColors(colorsLS);
    }
  }, []);

  return (
    <div className='App py-5'>
      <FormColor
        changeColorList={changeColorList}
        colors={colors}
        updateId={updateId}
        setUpdateId={setUpdateId}
      />
      <Container>
        <ColorList
          changeColorList={changeColorList}
          colors={colors}
          setUpdateId={setUpdateId}
        />
      </Container>
    </div>
  );
};

export default App;
