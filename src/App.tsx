import React, { useEffect, useState } from "react";
import useSwr from "swr";

import "./App.css";
import { API_URL } from "./urls";
import { MapContainer } from "./App.styles";
import Filters from "./components/Filters/Filters";
import Map from "./components/Map/Map";
import { fetcher } from "./utils/fetch";
import { DeviceData, Statuses } from "./types";
import MarkerDetails from "./components/MarkerDetails/MarkerDetails";

function App() {
  const [speedLimit, setSpeedLimit] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState<Statuses>();
  const [selectedMarker, setSelectedMarker] = useState<DeviceData>();

  const { data, error } = useSwr(API_URL, fetcher);

  return (
    <MapContainer>
      <Map
        data={data && !error ? data.data : []}
        speedLimit={speedLimit}
        selectedStatus={selectedStatus}
        selectedMarker={selectedMarker}
        onSelectMarker={setSelectedMarker}
      />
      <Filters onSelectStatus={setSelectedStatus} onSetSpeedLimit={setSpeedLimit} />
      {!!selectedMarker && (
        <MarkerDetails marker={selectedMarker} onClose={() => setSelectedMarker(undefined)} />
      )}
    </MapContainer>
  );
}

export default App;
