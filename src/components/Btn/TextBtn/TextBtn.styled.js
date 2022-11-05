import styled from 'styled-components';

const TextBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #2a2a2a;
  background-color: rgba(160, 141, 196, 0.5);
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.263);
  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;
  }
`;

export default TextBtn;
