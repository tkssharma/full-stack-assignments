import { createContext } from 'react';
import { AirlineData } from '../api/airline';


export type AirLineContext = {
  AirlineData: AirlineData [];
  fetchAirLineData: () => void;
  applyFilter: (type: string) => void;
};
const contextDefaultValues: AirLineContext = {
  AirlineData: [],
  fetchAirLineData: () => {},
  applyFilter: (type: string) => {}
};

export const AirLineAppContext = createContext<AirLineContext>(
  contextDefaultValues
);