import React from "react";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";

import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface ILesson {
  title: string;
  slug: string;
  type: "class" | "live";
  availableAt: Date;
}

const Lesson = (props: ILesson) => {
  const { slug } = useParams<{ slug: string }>();
  const isActive = slug === props.slug;

  const isLessonAvailable = isPast(props.availableAt);

  const handleOnClick = (e: any) => {
    if (!isLessonAvailable) {
      e.preventDefault();
    }
  };

  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link
      to={`/event/lesson/${props.slug}`}
      className={classNames("group", {
        "pointer-events-none": !isLessonAvailable,
      })}
      onClick={handleOnClick}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          "flex flex-col mt-3 p-4 border rounded group-hover:border-green-300 transition-colors",
          {
            "bg-green-500": isActive,
            "bg-gray-700": !isActive,
          }
        )}
      >
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-white": isActive,
                  "text-blue-500": !isActive,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm font-medium text-orange-500 flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              "px-2 py-[0.125rem] text-[.75rem] text-white font-bold border border-green-300 rounded",
              {
                "border-white": isActive,
                "border-green-300": !isActive,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="mt-5 text-gray-200 block">{props.title}</strong>
      </div>
    </Link>
  );
};

export { Lesson };
