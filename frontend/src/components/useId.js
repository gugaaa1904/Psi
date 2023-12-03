import { useState } from 'react';

export default function useId() {
  const getId = () => {
    const idString = sessionStorage.getItem('id');
    const userId = JSON.parse(idString);
    return userId?.id
  };

  const [id, setId] = useState(getId());

  const saveId = userId => {
    sessionStorage.setItem('id', JSON.stringify(userId));
    setId(userId.token);
  };

  return {
    setId: saveId,
    id
  }
}