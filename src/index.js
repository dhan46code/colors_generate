import React, { useState } from 'react';
import ReactDom from 'react-dom';
import ListColor from './ListColor';
import './style.css';
// https://github.com/noeldelgado/values.js/blob/master/README.md
import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#160F29').all(10));

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      let colors = new Values(color).all(10);
      // update
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type='text'
            name='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#160F29'
            className={`${error ? 'error' : null}`}
          ></input>
          <button className='btn'>find</button>
        </form>
      </section>
      {/* list colors */}
      <section className='list-color'>
        {list.map((color, index) => {
          return (
            <ListColor
              key={index}
              {...color}
              hexColor={color.hex}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
