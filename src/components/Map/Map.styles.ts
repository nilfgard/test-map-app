import styled from "styled-components";

import { ReactComponent as MapMarkerSVG } from "../../assets/marker.svg";
import { Colors } from "../../theme/colors";

export const MapMarker = styled(MapMarkerSVG)`
  height: 30px;
  color: ${({ color }) => color};
  cursor: pointer;
`;

export const Cluster = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${Colors.blue};
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${Colors.textWhite};
  box-shadow: 0 0 10px 10px ${Colors.blue};
`;
