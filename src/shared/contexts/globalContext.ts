import { createContext, useContext } from 'react';

export interface GlobalData {
  accessToken?: string;
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

  return {
    accessToken: globalData.accessToken,
    setAccessToken,
  };
};
