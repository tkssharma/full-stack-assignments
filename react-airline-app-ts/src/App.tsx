import React, { useEffect, useState} from "react";
import { AirLineAppContext } from "./context/airline-context";
import LandingPage from "./components/landing-page";
import { AirlineData } from './api/airline';
import { Api } from './api/airline'
const App = ()  => {
  
  const [airlines, setAirlines] = useState<AirlineData[]>([]);
  const [filterAirlines, setFilterAirlines] = useState<AirlineData[]>([]);

  const getAirlineData = async () => {
    const data = await Api.getAll();
    setAirlines(data);
    setFilterAirlines(data);
  }

  const applyFilter = (type: string) => {
    if(type === 'reset') {
      setFilterAirlines(airlines);
      return;
    }
     const data = [...airlines];
     const filteredAirLines = data.filter(i => i.alliance === type);
     setFilterAirlines(filteredAirLines);
  }
  useEffect(() => {
    getAirlineData();
  }, [])

  return (
    <AirLineAppContext.Provider
    value={{
      AirlineData: filterAirlines,
      fetchAirLineData: () => null,
      applyFilter: applyFilter
    }}
  >
    <LandingPage />
  </AirLineAppContext.Provider>
  );
}

export default App;
