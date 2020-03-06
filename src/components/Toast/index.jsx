import React from 'react';
import styled from 'styled-components';

const TipContainer = styled.div`
  padding: 0 16px;
  height: 30px;
  line-height: 30px;
  min-width: 80px;
  font-size: 12px;
  border-radius: 6px;
  text-align: center;
  color: #c3c3c3;
  background: #2b2b2b;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
  position: fixed;
  top: calc(50vh - 40px);
  opacity: ${props => props.opacity};
  transition: opacity .3s;
`;

const Toast = props => {
  const {
 showToast: {
    title = '',
    isShow = false,
  } = {},
} = props;

return (
    <TipContainer opacity={isShow ? 1 : 0}>
      {title}
    </TipContainer>
  );
};

export default Toast;
