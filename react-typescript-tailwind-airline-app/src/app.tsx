import React, { useState, useEffect } from 'react';
import { AirlineData, Api } from './api/airline';
import { AirlineAppContext } from './context/airline-context';
import LandingPage from './components/landing-page';
export const App = () => {
  const [airline, setAirline] = useState<AirlineData[]>([])
  const [filterAirline, setFilterAirline] = useState<AirlineData[]>([])

  const getAirLineData = async () => {
    const data = await Api.getAll();
    setAirline(data);
    setFilterAirline(data);
  }
  useEffect(() => {
    getAirLineData();
  }, [])

  const applyFilter = (type: string) => {
    if(type === 'reset') {
      setFilterAirline(airline);
      return;
    }
    const data = [...airline];
    const filteredAirlineData =  data.filter(i => i.alliance === type);
    setFilterAirline(filteredAirlineData)
  }

  return (
    <AirlineAppContext.Provider value={{
      AirlineData: filterAirline,
      applyFilter: applyFilter
    }}>
      <LandingPage />
    </AirlineAppContext.Provider>

  )
}