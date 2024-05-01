"use client"

import React, { useEffect, useState } from 'react';
import { OnlineStatusContext } from '../onlineStatusContext';

export const OnlineStatusProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkOnlineStatus = () => {
      const currentHour = new Date().getHours();
      setIsOnline(currentHour >= 7 && currentHour < 18);
    };

    // Verifica el estado en línea al montar el componente
    checkOnlineStatus();

    // Actualiza el estado cada minuto
    const intervalId = setInterval(checkOnlineStatus, 60000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <OnlineStatusContext.Provider value={isOnline}>
      {children}
    </OnlineStatusContext.Provider>
  );
};
