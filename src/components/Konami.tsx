'use client';

import { useKonami } from 'use-konami';

const Konami = () => {
  useKonami(() => {
    alert('Konami code activated!');
  });

  return null;
};

export default Konami;
