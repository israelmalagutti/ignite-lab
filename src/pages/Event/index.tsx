import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Video } from "../../components/Video";
import { Footer } from "../../components/Footer";

const Event: React.FC = () => {
  const { slug } = useParams<{slug: string}>()

  return (
    <div>
      <Header />

      <main className="flex">
        {slug
          ? (
            <div className="flex flex-1 flex-col">
              <Video lessonSlug={slug} />
              <Footer />
            </div>
          )
          : <div className="flex-1" />
        }
        <SideBar />
      </main>

    </div>
  );
};

export { Event };
