import React, { FC } from "react";

import { Statuses } from "../../types";
import { FiltersContainer, HorizontalLine, Input, Label, Select } from "./Filters.styles";

interface FiltersProps {
  onSelectStatus: (value: Statuses) => void;
  onSetSpeedLimit: (status: number) => void;
}

const Filters: FC<FiltersProps> = ({ onSelectStatus, onSetSpeedLimit }) => {
  return (
    <FiltersContainer>
      <Label>Filter by statuses</Label>
      <div>
        <Select
          defaultValue=""
          name="statuses"
          onChange={(e) => onSelectStatus(e.currentTarget.value as Statuses)}
        >
          <option value="">Choose here</option>
          <option value={Statuses.DeviceOffline}>Device Offline</option>
          <option value={Statuses.NoAlarm}>No Alarm</option>
        </Select>
      </div>

      <HorizontalLine />

      <Label>Filter by minimal speed </Label>
      <Input
        type="number"
        min={0}
        onChange={(e) => onSetSpeedLimit(Number(e.currentTarget.value))}
      />
    </FiltersContainer>
  );
};

export default Filters;
