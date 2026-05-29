import { createContext, useContext } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  description?: string;
}

export interface GlobalData {
  accessToken?: string;
  notification?: NotificationProps;
}

export interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

export const GlobalContext = createContext({} as GlobalContextProps);

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setAccessToken = (accessToken: string) => {
    setGlobalData({ ...globalData, accessToken });
  };

  const setNotification = (notification: NotificationProps) => {
    setGlobalData({ ...globalData, notification });
  };

  return {
    notification: globalData?.notification,
    accessToken: globalData?.accessToken,
    setAccessToken,
    setNotification,
  };
};
