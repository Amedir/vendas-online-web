import axios, { type AxiosResponse } from 'axios';
import { useState } from 'react';

import { useGlobalContext } from '../contexts/globalContext';
import { connectionAPIPost } from '../functions/connection/connectionAPI';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    const returnData = await axios({
      method: 'get',
      url: url,
    })
      .catch((error) => {
        console.log(`error ${error}`);
        return error;
      })
      .then((result: AxiosResponse) => {
        console.log(`result ${result.data}`);
        return result.data;
      });

    setLoading(false);
    return returnData;
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);
    const returnData = await connectionAPIPost(url, body)
      .then((result: AxiosResponse) => {
        setNotification({
          message: 'Acessando aplicação...',
          type: 'success',
        });
        return result;
      })
      .catch((error: Error) => {
        setNotification({
          message: error.message,
          type: 'error',
        });
      });

    setLoading(false);
    return returnData;
  };
  return { loading, getRequest, postRequest };
};
