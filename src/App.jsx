import { useState } from 'react';
import ColorList from './components/ColorList/ColorList';
import FormColor from './components/FormColor/FormColor';

const App = () => {
  const [colors, setColors] = useState([]);

  const changeColorList = (newList) => {
    setColors(newList);

    localStorage.setItem('colors', JSON.stringify(newList));
  };

  return (
    <div className='App'>
      <FormColor changeColorList={changeColorList} colors={colors} />
      <ColorList changeColorList={changeColorList} colors={colors} />
    </div>
  );
};

export default App;
