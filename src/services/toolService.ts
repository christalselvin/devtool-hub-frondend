import api from "../api/axios";

export const formatJson = async (json: string) => {
  const response = await api.post("/tools/json/format", {
    json,
  });

  return response.data;
};

export const minifyJson = async (json: string) => {
  const response = await api.post("/tools/json/minify", {
    json,
  });

  return response.data;
};

export const validateJson = async (json: string) => {
  const response = await api.post("/tools/json/validate", {
    json,
  });

  return response.data;
};

export const encodeBase64 = async (text: string) => {
  const response = await api.post(
    "/tools/base64/encode",
    {
      text,
    }
  );

  return response.data;
};

export const decodeBase64 = async (text: string) => {
  const response = await api.post(
    "/tools/base64/decode",
    {
      text,
    }
  );

  return response.data;
};

export const decodeJwt = async (token: string) => {
  const response = await api.post("/tools/jwt/decode", {
    token,
  });

  return response.data;
};

export const verifyJwt = async (token: string) => {
  const response = await api.post("/tools/jwt/verify", {
    token,
  });

  return response.data;
};

export const generateUuidV1 = async () => {
  const response = await api.get("/tools/uuid/v1");
  return response.data;
};

export const generateUuidV4 = async () => {
  const response = await api.get("/tools/uuid/v4");
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
    "/tools/password/generate",
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
  const response = await api.post("/tools/hash/md5", {
    text,
  });

  return response.data;
};

export const generateSha1 = async (text: string) => {
  const response = await api.post("/tools/hash/sha1", {
    text,
  });

  return response.data;
};

export const generateSha256 = async (text: string) => {
  const response = await api.post("/tools/hash/sha256", {
    text,
  });

  return response.data;
};

export const generateSha512 = async (text: string) => {
  const response = await api.post("/tools/hash/sha512", {
    text,
  });

  return response.data;
};

export const encodeUrl = async (text: string) => {
  const response = await api.post("/tools/url/encode", {
    text,
  });

  return response.data;
};

export const decodeUrl = async (text: string) => {
  const response = await api.post("/tools/url/decode", {
    text,
  });

  return response.data;
};

export const toUnixTimestamp = async (date: string) => {
  const response = await api.post(
    "/tools/timestamp/to-unix",
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
    "/tools/timestamp/from-unix",
    {
      timestamp,
    }
  );

  return response.data;
};

export const generateQr = async (text: string) => {
  const response = await api.post(
    "/tools/qr/generate",
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
    "/tools/regex/test",
    {
      pattern,
      text,
    }
  );

  return response.data;
};

export const getHistory = async () => {
  const response = await api.get("/history/");
  return response.data;
};

export const deleteHistory = async (id: string) => {
  const response = await api.delete(`/history/${id}`);

  return response.data;
};

export const clearHistory = async () => {
  const response = await api.delete("/history/");
  return response.data;
};