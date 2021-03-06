
import React from 'react';

function getColors(theme = 'red') {
  const colors = {
    white: {
      vertical: 'transparent',
      horizontal: 'transparent',
      single: 'transparent',
      main: '#fff',
    },
    black: {
      vertical: 'transparent',
      horizontal: 'transparent',
      single: 'transparent',
      main: '#212121',
    },
    red: {
      vertical: 'transparent',
      horizontal: 'transparent',
      single: 'transparent',
      main: '#f52828',
    },
    grey: {
      vertical: 'transparent',
      horizontal: 'transparent',
      single: 'transparent',
      main: '#eee',
    },
  };

return colors[theme];
}

function FlipboardLogo({
  width = 60,
  height = 60,
  colors,
  style,
}) {
  const col = getColors(colors);

return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox={'0 0 500 500'}>
      <g
        style={{
          shapeRendering: 'crispEdges',
        }}>
        <path
          d={'M0,0 L500,0 L500,500 L0,500 L0,0 Z'}
          fill={col.vertical} />
        <path
          d={'M200,200 L400,200 L400,100 L200,100 L200,200 Z'}
          fill={col.horizontal} />
        <path
          d={'M200,200 L300,200 L300,301 L200,301 L200,200 Z'}
          fill={col.single} />
        <path
          // eslint-disable-next-line max-len
          d={'M0,500 L500,500 L500,0 L0,0 L0,500 Z M100,100 L400,100 L400,200 L300,200 L300,301 L200,301 L200,401 L100,401 L100,100 L100,100 Z'}
          fill={col.main} />
      </g>
    </svg>
  );
}

export default FlipboardLogo;
