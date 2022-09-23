import React, { FC } from "react";

import { DeviceData } from "../../types";
import { Close, Container, Label, Line } from "./MarkerDetails.styles";

const Detail: FC<{ title: string; value: string }> = ({ title, value }) => (
  <Line>
    <Label>{title}: </Label> {value}
  </Line>
);

const MarkerDetails: FC<{ marker: DeviceData; onClose: () => void }> = ({ marker, onClose }) => {
  return (
    <Container>
      <Close onClick={onClose}>X</Close>
      <Detail title="IMEI" value={marker.imei} />
      <Detail title="Last altitude" value={marker.last_altitude} />
      <Detail title="Last heartbeat" value={marker.last_heartbeat} />
      <Detail title="Last latitude" value={marker.last_latitude} />
      <Detail title="Last longitude" value={marker.last_longitude} />
      <Detail title="Last speed" value={marker.last_speed} />
      <Detail title="Last status" value={marker.last_status} />
      <Detail title="Last track time" value={marker.last_track_time} />
      <Detail title="Sim number" value={marker.sim_number} />
    </Container>
  );
};

export default MarkerDetails;
