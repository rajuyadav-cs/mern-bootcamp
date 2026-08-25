const localURL = process.env.NEXT_APP_URL;

const api = (route: string) => {
  return `${localURL}/api/${route}`;
};

export default api;
