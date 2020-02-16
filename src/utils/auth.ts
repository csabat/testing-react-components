const auth = () => {
  const getAccountUuid = () => window.localStorage.getItem('accountUuid');

  const setAccountUuid = (uuid: string | null) => {
    window.localStorage.setItem('accountUuid', uuid);
  }

  return { getAccountUuid, setAccountUuid };
};

export default auth;