import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [text] = useTypewriter({
    words: ["seu negócio", "sua fama", "seu site", "sua visibilidade"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <>
      <Header />

      <section className="h-screen flex flex-col items-center justify-between p-24 pt-40">
        <div className="z-10 w-full items-center justify-center flex flex-col">
          <div className="flex flex-col items-center space-y-5">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-pink-600 rounded-full blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:opacity-90 transition duration-300 animate-tilt"></div>
              <p className="border relative rounded-full font-mono text-xs shadow p-3 border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl bg-gray-200 dark:border-neutral-800 dark:bg-slate-900 dark:from-inherit">
                Impulsione sua empresa de forma profissional com a{" "}
                <span className="group-hover:text-purple-400 transition duration-200 font-semibold">
                  Muad&apos;dib
                </span>
                !
              </p>
            </div>

            <h2 className="text-7xl font-medium leading-tight text-center">
              Inove{" "}
              <span className="font-extrabold">
                {text}
                <Cursor cursorColor="#eee" cursorStyle="█" />
              </span>
              <br />
              Lorem ipsum.
            </h2>

            <span className="max-w-[400px] text-center text-sm font-light pt-2">
              Conheça nossos serviços maravilhosos e bla bla bla e impressione
              seus clientes.
            </span>

            <Button>Entre em contato</Button>
          </div>
        </div>
      </section>
    </>
  );
}
