import React from "react";

import { gql, useQuery } from "@apollo/client";

import { Lesson } from "../Lesson";

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    type: "class" | "live";
  }[];
}
// TODO Fazer layout responsivo
const GET_LESSON_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

const SideBar: React.FC = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSON_QUERY);

  return (
    <aside className="flex flex-col min-h-screen w-[22rem] px-6 bg-gray-700 border-l border-gray-600">
      <span className=" my-6 pb-6 border-b border-gray-500 text-2xl font-bold block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              slug={lesson.slug}
              title={lesson.title}
              type={lesson.type}
              availableAt={new Date(lesson.availableAt)}
            />
          );
        })}
      </div>
    </aside>
  );
};

export { SideBar };
