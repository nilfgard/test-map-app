import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const FiltersContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 5px;
  background-color: ${Colors.lightBlue};
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 ${Colors.textBlack};
`;

export const Label = styled.h5`
  font-size: 16px;
  line-height: 1em;
  margin: 0 20px 5px 0;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  margin: 10px 0;
  border-bottom: 1px solid ${Colors.textBlack};
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
`;

export const Select = styled.select`
  height: 30px;
  width: 100%;
`;
