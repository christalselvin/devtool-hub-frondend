import api from "../api/axios";
import { API_ENDPOINTS } from "../constants/api";

export const formatJson = async (json: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.JSON.FORMAT, {
    json,
  });

  return response.data;
};

export const minifyJson = async (json: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.JSON.MINIFY, {
    json,
  });

  return response.data;
};

export const validateJson = async (json: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.JSON.VALIDATE, {
    json,
  });

  return response.data;
};

export const encodeBase64 = async (text: string) => {
  const response = await api.post(
    API_ENDPOINTS.TOOLS.BASE64.ENCODE,
    {
      text,
    }
  );

  return response.data;
};

export const decodeBase64 = async (text: string) => {
  const response = await api.post(
    API_ENDPOINTS.TOOLS.BASE64.DECODE,
    {
      text,
    }
  );

  return response.data;
};

export const decodeJwt = async (token: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.JWT.DECODE, {
    token,
  });

  return response.data;
};

export const verifyJwt = async (token: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.JWT.VERIFY, {
    token,
  });

  return response.data;
};

export const generateUuidV1 = async () => {
  const response = await api.get(API_ENDPOINTS.TOOLS.UUID.V1);
  return response.data;
};

export const generateUuidV4 = async () => {
  const response = await api.get(API_ENDPOINTS.TOOLS.UUID.V4);
  return response.data;
};

export const generatePassword = async (
  length: number,
  uppercase: boolean,
  lowercase: boolean,
  digits: boolean,
  symbols: boolean
) => {
  const response = await api.post(
    API_ENDPOINTS.TOOLS.PASSWORD.GENERATE,
    {
      length,
      uppercase,
      lowercase,
      digits,
      symbols,
    }
  );

  return response.data;
};

export const generateMd5 = async (text: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.HASH.MD5, {
    text,
  });

  return response.data;
};

export const generateSha1 = async (text: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.HASH.SHA1, {
    text,
  });

  return response.data;
};

export const generateSha256 = async (text: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.HASH.SHA256, {
    text,
  });

  return response.data;
};

export const generateSha512 = async (text: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.HASH.SHA512, {
    text,
  });

  return response.data;
};

export const encodeUrl = async (text: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.URL.ENCODE, {
    text,
  });

  return response.data;
};

export const decodeUrl = async (text: string) => {
  const response = await api.post(API_ENDPOINTS.TOOLS.URL.DECODE, {
    text,
  });

  return response.data;
};

export const toUnixTimestamp = async (date: string) => {
  const response = await api.post(
    API_ENDPOINTS.TOOLS.TIMESTAMP.TO_UNIX,
    {
      date,
    }
  );

  return response.data;
};

export const fromUnixTimestamp = async (
  timestamp: number
) => {
  const response = await api.post(
    API_ENDPOINTS.TOOLS.TIMESTAMP.FROM_UNIX,
    {
      timestamp,
    }
  );

  return response.data;
};

export const generateQr = async (text: string) => {
  const response = await api.post(
    API_ENDPOINTS.TOOLS.QR.GENERATE,
    {
      text,
    }
  );

  return response.data;
};

export const testRegex = async (
  pattern: string,
  text: string
) => {
  const response = await api.post(
    API_ENDPOINTS.TOOLS.REGEX.TEST,
    {
      pattern,
      text,
    }
  );

  return response.data;
};

export const getHistory = async () => {
  const response = await api.get(`${API_ENDPOINTS.TOOLS.HISTORY.LIST}/`);
  return response.data;
};

export const deleteHistory = async (id: string) => {
  const response = await api.delete(`${API_ENDPOINTS.TOOLS.HISTORY.DELETE}/${id}`);

  return response.data;
};

export const clearHistory = async () => {
  const response = await api.delete(`${API_ENDPOINTS.TOOLS.HISTORY.CLEAR}/`);
  return response.data;
};