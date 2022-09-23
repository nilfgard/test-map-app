import { Colors } from "./theme/colors";

export interface DeviceData {
  id: string;
  imei: string;
  last_altitude: string;
  last_heartbeat: string;
  last_latitude: string;
  last_longitude: string;
  last_speed: string;
  last_status: Statuses;
  last_track_time: string;
  sim_number: string;
}

export enum Statuses {
  NoAlarm = "No Alarm",
  DeviceOffline = "Device Offline",
}

export const StatusColors = {
  [Statuses.NoAlarm]: Colors.green,
  [Statuses.DeviceOffline]: Colors.gray,
};
