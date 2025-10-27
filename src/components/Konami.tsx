'use client';

import useKonami from 'use-konami';

const Konami = () => {
  useKonami({ onUnlock: () => alert('Konami code activated!') });

  return null;
};

export default Konami;
