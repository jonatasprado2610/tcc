import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0B4E6B;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 2;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
