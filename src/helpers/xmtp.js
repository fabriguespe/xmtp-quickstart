export const getEnv = () => {
  //"dev" | "production" | "local"
  return process.env.XMTP_ENV || "dev";
};

export const options = {
  env: getEnv(),
};
