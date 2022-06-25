import React from 'react';
import { format, isPast } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { gql, useQuery } from '@apollo/client';

import { CheckCircle, Lock } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface ILesson {
  title: string;
  slug: string;
  type: "class" | "live";
  availableAt: Date;
}

const Lesson: React.FC<ILesson> = ({
  slug,
  availableAt,
  type,
  title
}) => {
  const isLessonAvailable = isPast(availableAt);

  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  return (
  <Link to={`/event/lesson/${slug}`} className="group">

    <span className="text-gray-300">
      {availableDateFormatted}
    </span>

    <div className="flex flex-col mt-3 p-4 border border-gray-500 rounded group-hover:border-green-300 transition-colors">
      <header className="flex justify-between items-center">
        {isLessonAvailable ? (
          <span className="text-sm font-medium text-blue-500 flex items-center gap-2">
          <CheckCircle size={20} />
            Conteúdo Liberado
          </span>
        ) : (
          <span className="text-sm font-medium text-orange-500 flex items-center gap-2">
          <Lock size={20} />
            Em breve
          </span>
        )}

        <span className="px-2 py-[0.125rem] text-sm text-white font-bold border border-green-300 rounded">
         {(type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA')}
        </span>
      </header>


      <strong className="mt-5 text-gray-200 block">
        {title}
      </strong>
    </div>
  </Link>
  );
}

export { Lesson };
