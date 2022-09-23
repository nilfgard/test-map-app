import React, { FC, useRef, useState, ReactElement } from "react";
import GoogleMapReact, { ChildComponentProps } from "google-map-react";

import { GOOGLE_API_KEY } from "../../urls";
import { DeviceData, Statuses } from "../../types";
import useMap from "./useMap";
import { Cluster, MapMarker } from "./Map.styles";
import { Colors } from "../../theme/colors";

interface MapProps {
  data: DeviceData[];
  speedLimit: number;
  onSelectMarker: (marker: DeviceData) => void;
  selectedMarker?: DeviceData;
  selectedStatus?: Statuses;
}

const Marker: FC<ChildComponentProps & { children: ReactElement }> = ({ children }) => children;

const DEFAULT_MAP_CENTER = { lat: 0, lng: 0 };

const Map: FC<MapProps> = ({
  data,
  speedLimit,
  selectedStatus,
  selectedMarker,
  onSelectMarker,
}) => {
  const [zoom, setZoom] = useState(0);
  const [bounds, setBounds] = useState<number[]>([0, 0, 0, 0]);
  const mapRef = useRef<{ map: any; maps: any; ref: Element | null }>();

  const { clusters, center } = useMap(data, speedLimit, zoom, selectedStatus, bounds);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
      defaultCenter={center || DEFAULT_MAP_CENTER}
      defaultZoom={5}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={(map) => {
        mapRef.current = map;
      }}
      onChange={({ zoom, bounds }) => {
        setZoom(zoom);
        setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat]);
      }}
      center={center}
    >
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const {
          cluster: isCluster,
          point_count: pointCount,
          markerId,
          markerColor,
          markerData,
        } = cluster.properties;

        return isCluster ? (
          <Marker key={cluster.id} lat={latitude} lng={longitude}>
            <Cluster>{pointCount}</Cluster>
          </Marker>
        ) : (
          <Marker key={markerId} lat={Number(latitude)} lng={Number(longitude)}>
            <MapMarker
              color={selectedMarker?.id === markerId ? Colors.red : markerColor}
              onClick={() => onSelectMarker(markerData)}
            />
          </Marker>
        );
      })}
    </GoogleMapReact>
  );
};

export default Map;
