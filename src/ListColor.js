import React, { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

function ListColor({ rgb, weight, index, hexColor }) {
  const [copy, setCopy] = useState(false);
  const rgbcolor = rgb.join(',');
  const hex = `#${hexColor}`;

  return (
    <article
      className={`color ${index > 8 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgbcolor})` }}
      // copy clipboard
      onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <div className='color-info'>
        <p className='value-hex'>{hex}</p>
        <p className='percent-value'>{weight} %</p>
        {copy && <MdContentCopy className='copy-icons' />}
      </div>
    </article>
  );
}

export default ListColor;
