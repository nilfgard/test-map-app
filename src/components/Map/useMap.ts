import { DeviceData, StatusColors, Statuses } from "../../types";
import useSupercluster from "use-supercluster";
import { useMemo } from "react";
import { averageGeolocation } from "../../utils/geolocations";

const useMap = (
  data: DeviceData[],
  speedLimit: number,
  zoom: number,
  selectedStatus?: Statuses,
  bounds?: number[]
) => {
  const points = useMemo(
    () =>
      data
        .filter(
          (marker: DeviceData) =>
            (!speedLimit || speedLimit <= Number(marker.last_speed)) &&
            (!selectedStatus || selectedStatus === marker.last_status)
        )
        .map((m: DeviceData) => ({
          type: "Feature",
          properties: {
            cluster: false,
            markerId: m.id,
            markerData: m,
            category: m.last_status,
            markerColor: StatusColors[m.last_status],
          },
          geometry: {
            type: "Point",
            coordinates: [Number(m.last_latitude), Number(m.last_longitude)],
          },
        })),
    [data, selectedStatus, speedLimit]
  );

  const { clusters } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  const center = averageGeolocation(
    data.map((item) => ({ lat: Number(item.last_latitude), lng: Number(item.last_longitude) }))
  );

  return { clusters, center };
};

export default useMap;
