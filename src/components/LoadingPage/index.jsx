
import React from 'react';
import './index.scss';
import FlipboardLogo from '../FlipboardLogo';

const LoadingPage = ({
  bgColor,
  iconColor = 'red',
}) => (
  <div
    className={'loading'}
    style={{
      backgroundColor: bgColor,
    }}>
    <div
      className={'loading-icon'}
      >
      <FlipboardLogo colors={iconColor} />
    </div>
  </div>
);

// export default cssModules(LoadingPage, styles);
export default LoadingPage;
