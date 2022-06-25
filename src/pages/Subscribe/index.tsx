import React from "react";

import { Footer } from "../../components/Footer";
import Logo from "../../components/Logo";

const Subscribe: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blur bg-cover bg-no-repeat">
      <div className="flex w-full max-w-[1100px] mt-20 mx-auto items-center justify-between">
        <div className="flex flex-col max-w-[640px]">
          <Logo />

          <h1 className="mt-8 leading-tight text-[2.5rem]">
            Construa uma <strong className="text-blue-500"> aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 gap-6 rounded border border-gray-500 bg-gray-700">
          <strong className="text-2xl mb-6 block">Increva-se gratuitamente</strong>

          <form className="flex flex-col w-full gap-2">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="h-14 px-5 rounded text-gray-100 placeholder-gray-300 bg-gray-900 hover:border-green-300 focus:border-green-300 transition-colors"
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="h-14 px-5 rounded text-gray-100 placeholder-gray-300 bg-gray-900 hover:border-green-300 focus:border-green-300 transition-colors"
            />

            <button
              type="submit"
              className="mt-4 py-4 rounded uppercase font-bold text-sm bg-green-500 hover:bg-green-700 transition-colors"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" alt="Imagem de um código no VSCode" className="mt-10" />

      <div className="bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export { Subscribe };
