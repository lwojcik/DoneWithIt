import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState() as any;

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const { coords: { latitude, longitude } } =
        await Location.getLastKnownPositionAsync() as any;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
