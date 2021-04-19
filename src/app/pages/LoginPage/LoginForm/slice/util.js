export const delay = token => {
  const timeNow = parseInt(Date.now().valueOf() / 1000); //unix format
  const expInSec = token.expires - timeNow;
  const expInMil = expInSec * 1000; // ms
  const refresh5minBeforeExpiry = expInMil - 50000;

  localStorage.setItem('expInMil', refresh5minBeforeExpiry);
  return new Promise(resolve => setTimeout(resolve, refresh5minBeforeExpiry));
};

const auth = () => {
  function getStoredToken() {
    return localStorage.getItem('token');
  }

  function setStoredToken(token) {
    return localStorage.setItem('token', token);
  }

  function clearStoredToken() {
    return localStorage.removeItem('token');
  }

  return {
    getStoredToken,
    setStoredToken,
    clearStoredToken,
  };
};

export default auth;
