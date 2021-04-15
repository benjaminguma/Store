import {useContext} from 'react';
import context from '../../state/context';

const useCtxHook = () => {
  const state = useContext (context);
  return state;
};

export default useCtxHook;
