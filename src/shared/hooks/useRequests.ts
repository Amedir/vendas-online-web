import axios, { type AxiosResponse } from 'axios';
import { useState } from 'react';

import { useGlobalContext } from '../contexts/globalContext';

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
    const returnData = await axios({
      method: 'post',
      url: url,
      data: body,
    })
      .then((result: AxiosResponse) => {
        setNotification({
          message: 'Sucesso...',
          type: 'success',
          description: 'Entrando na aplicação...',
        });
        return result.data;
      })
      .catch(() => {
        setNotification({
          message: 'Erro ao fazer requisição',
          type: 'error',
          description: 'Ocorreu um erro ao tentar realizar login',
        });
      });

    setLoading(false);
    return returnData;
  };
  return { loading, getRequest, postRequest };
};
