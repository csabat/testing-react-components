import { useState, useEffect } from 'react';

const useAuth = () => {
  const getAccountUuid = () => window.localStorage.getItem('accountUuid');

  const setAccountUuid = (uuid: string | null) => {
    window.localStorage.setItem('accountUuid', uuid);
  }

  return { getAccountUuid, setAccountUuid };
};

export default useAuth;