import React from "react";

import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

import { gql, useQuery } from "@apollo/client";

import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";
import { Link } from "react-router-dom";

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      videoId
      title
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;

interface IGetLessonBySlug {
  lesson: {
    videoId: string;
    title: string;
    description: string;
    teacher: {
      avatarURL: string;
      bio: string;
      name: string;
    };
  };
}

interface IVideo {
  lessonSlug: string;
}
// TODO Fazer layout responsivo

const Video: React.FC<IVideo> = ({ lessonSlug }) => {
  const { data } = useQuery<IGetLessonBySlug>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="flex-1 flex-col">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId} />
            {/* FIXME Video não está se comportando da maneira correta */}
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="font-bold text-2xl">{data?.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data?.lesson.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to="https://discord-service.rocketseat.dev/signin/ignite-lab"
              className="flex items-center justify-center p-4 gap-2 rounded uppercase bg-green-500 font-bold text-sm text-white hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade no discord
            </Link>
            <Link
              to="https://evento.rocketseat.com.br/ignite-lab/desafios/checkpoints"
              className="flex items-center justify-center p-4 gap-2 rounded uppercase border border-blue-500 font-bold text-sm text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesso o desafio
            </Link>
          </div>
        </div>

        <div className="flex gap-4 mt-6 items-center">
          <img
            src={data?.lesson.teacher.avatarURL}
            alt="Imagem do seu Professor"
            className="rounded-full h-16 border-2 border-white"
          />

          <div>
            <h1 className="font-bold text-2xl">{data?.lesson.teacher.name}</h1>
            <p className="text-sm text-gray-300">{data?.lesson.teacher.bio}</p>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <Link
            to="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
            className="flex gap-6 items-stretch overflow-hidden rounded bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 flex h-full p-6 items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar os eu
                desenvolvimento
              </p>
            </div>

            <div className="flex h-full p-6 items-center">
              <CaretRight size={24} />
            </div>
          </Link>

          <Link
            to="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR"
            className="flex gap-6 items-stretch overflow-hidden rounded bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 flex h-full p-6 items-center">
              <Image size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>

            <div className="flex h-full p-6 items-center">
              <CaretRight size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Video };
