import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const Container = styled.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 70px;
  max-width: 400px;
  background-color: ${Colors.lightBlue};
  padding: 35px 5px 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 ${Colors.textBlack};
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.textBlack};
  margin-bottom: 5px;

  :last-child {
    border: 0;
    margin: 0;
  }
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 3px 7px;
  font-weight: bold;
  border: 1px solid ${Colors.textBlack};
  border-radius: 5px;
  background-color: ${Colors.textWhite};
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${Colors.textBlack};
    color: ${Colors.textWhite};
  }
`;
