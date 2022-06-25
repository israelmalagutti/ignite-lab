import React from 'react';

import LogoRocketseat from '../LogoRocketseat';

const Footer: React.FC = () => {
  return (
    <footer className="flex py-6 mx-6 items-center justify-between  border-t text-gray-300 bg-gray-900">
      <div className="flex gap-6 items-center">
        <LogoRocketseat />

        <span>
          Rocketseat - Todos os direitos reservados
        </span>
      </div>

      <span>
        Políticas de privacidade
      </span>
    </footer>
  );
}

export { Footer };
