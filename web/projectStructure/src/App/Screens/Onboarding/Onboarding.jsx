import React from 'react';
import {useStore} from '../../Hooks/useStore';

export default function Onboarding() {
  const {phone, setPhone} = useStore();

  return (
    <React.Fragment>
      {phone}
    </React.Fragment>
  )
}
