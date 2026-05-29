import axios from 'axios';

import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION,
  ERROR_INTERNAL_SERVER_ERROR,
  ERROR_NOT_FOUND,
} from '../../constants/erroStatus';
import { MethodsEnum } from '../../enums/methods.enum';

export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: unknown) {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
      default:
        throw new Error('Method not allowed');
    }
  }

  static async connect(url: string, method: string, body?: unknown) {
    return ConnectionAPI.call(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DENIED);
          case 404:
            throw new Error(ERROR_NOT_FOUND);
          case 500:
            throw new Error(ERROR_INTERNAL_SERVER_ERROR);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
    });
  }
}

export const connectionAPIGet = async <T>(url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.GET);
};

export const connectionAPIPost = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.POST, body);
};

export const connectionAPIPut = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.PUT, body);
};

export const connectionAPIDelete = async <T>(url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.DELETE);
};

export const connectionAPIPatch = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.PATCH, body);
};
