import React from 'react';
import styled from 'styled-components';

const PlateContainer = styled.div`
  padding: 16px;
  line-height: 20px;
  width: 100%;
  font-size: 12px;
  text-align: left;
  color: #fff;
  background: rgba(0, 0, 0, .3);
  position: fixed;
  bottom: 0;
`;

const DebugPlate = props => {
  const { infos = [] } = props || {};

return (
    <PlateContainer>
      {infos && infos.map(info => (<p>
{' '}
{info}
{' '}
<br />
{' '}
                                   </p>))}
    </PlateContainer>
  );
};

export default DebugPlate;
