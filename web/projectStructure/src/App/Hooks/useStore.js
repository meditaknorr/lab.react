import {useContext} from 'react';
import {AppContext} from '../Store/AppStore';

export function useStore() {
  const context = useContext(AppContext);

  if (!context) {
    throw new console.error(
      "[STORE:ERROR]: Sorry, something went wrong."
    );
  }

  const {phone, setPhone} = context;
  return {phone, setPhone};
}