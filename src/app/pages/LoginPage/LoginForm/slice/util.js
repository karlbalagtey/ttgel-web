const auth = () => {
  function getStoredToken() {
    return JSON.parse(localStorage.getItem('auth'));
  }

  function setStoredToken(token) {
    return localStorage.setItem('auth', JSON.stringify(token));
  }

  function clearStoredToken() {
    return localStorage.removeItem('auth');
  }

  return {
    getStoredToken,
    setStoredToken,
    clearStoredToken,
  };
};

export default auth();
