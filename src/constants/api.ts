export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    PROFILE: "/auth/me",
    REFRESH: "/auth/refresh",
  },

  USERS: {
    PROFILE: "/users/profile",
    CHANGE_PASSWORD: "/users/change-password",
  },

  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    USERS: "/users",
    ROLES: "/admin/roles",
    PERMISSIONS: "/admin/permissions",
  },

  TOOLS: {
    JSON: {
      FORMAT: "/tools/json/format",
      MINIFY: "/tools/json/minify",
      VALIDATE: "/tools/json/validate",
    },

    BASE64: {
      ENCODE: "/tools/base64/encode",
      DECODE: "/tools/base64/decode",
    },

    JWT: {
      DECODE: "/tools/jwt/decode",
      VERIFY: "/tools/jwt/verify",
    },

    UUID: {
      V1: "/tools/uuid/v1",
      V4: "/tools/uuid/v4",
    },

    PASSWORD: {
      GENERATE: "/tools/password/generate",
    },

    HASH: {
      MD5: "/tools/hash/md5",
      SHA1: "/tools/hash/sha1",
      SHA256: "/tools/hash/sha256",
      SHA512: "/tools/hash/sha512",
    },

    URL: {
      ENCODE: "/tools/url/encode",
      DECODE: "/tools/url/decode",
    },

    TIMESTAMP: {
      TO_UNIX: "/tools/timestamp/to-unix",
      FROM_UNIX: "/tools/timestamp/from-unix",
    },

    QR: {
      GENERATE: "/tools/qr/generate",
    },

    REGEX: {
      TEST: "/tools/regex/test",
    },

    HISTORY: {
    LIST: "/history",
    DELETE: "/history",
    CLEAR: "/history",
    },
  },
};