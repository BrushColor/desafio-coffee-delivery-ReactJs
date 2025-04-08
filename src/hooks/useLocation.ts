import { useEffect, useState } from 'react';
import { stateAbbreviations } from '../utils/stateAbbreviations';

interface LocationData {
  city: string;
  state: string;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );
          const data = await response.json();

          if (data.address) {
            const stateName = data.address.state || 'Estado desconhecido';
            const stateAbbr = stateAbbreviations[stateName] || stateName;

            setLocation({
              city:
                data.address.city || data.address.town || 'Cidade desconhecida',
              state: stateAbbr,
            });
          }
        } catch {}
      });
    }
  }, []);

  return location;
}
