export const delay = token => {
  const timeNow = parseInt(Date.now().valueOf() / 1000); //unix format
  const expInSec = token.expires - timeNow;
  const expInMil = expInSec * 1000; // ms

  return new Promise(resolve => setTimeout(resolve, expInMil));
};
