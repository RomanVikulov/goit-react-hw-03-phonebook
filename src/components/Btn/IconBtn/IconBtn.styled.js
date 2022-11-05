import styled from 'styled-components';

const IconBtn = styled.button`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 2px;
  fill: #2a2a2a;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid rgba(128, 128, 128, 0.263);
  box-shadow: 3px 5px 10px -5px rgba(75, 92, 165, 0.5);
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(160, 141, 196, 0.5);
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;
  }
`;

export default IconBtn;
