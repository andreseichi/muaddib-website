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

      <section className="flex h-screen flex-col items-center justify-between p-24 pt-40">
        <div className="z-10 flex w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-5">
            <div className="group relative">
              <div className="absolute -inset-0.5 animate-tilt rounded-full bg-pink-600 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-300 group-hover:opacity-90"></div>
              <p className="relative rounded-full border border-gray-300 bg-gray-200 bg-gradient-to-b from-zinc-200 p-3 font-mono text-xs shadow backdrop-blur-2xl dark:border-neutral-800 dark:bg-slate-900 dark:from-inherit">
                Impulsione sua empresa de forma profissional com a{" "}
                <span className="font-semibold transition duration-200 group-hover:text-purple-400">
                  Muad&apos;dib
                </span>
                !
              </p>
            </div>

            <h2 className="text-center text-7xl font-medium leading-tight">
              Inove{" "}
              <span className="font-extrabold">
                {text}
                <Cursor cursorColor="#eee" cursorStyle="█" />
              </span>
              <br />
              Lorem ipsum.
            </h2>

            <span className="max-w-[400px] pt-2 text-center text-sm font-light">
              Conheça nossos serviços maravilhosos e bla bla bla e impressione
              seus clientes.
            </span>

            <Button>Entre em contato</Button>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex h-screen flex-col items-center justify-between bg-purple-100 p-24 pt-40 dark:bg-slate-900"
      >
        <div className="flex w-full flex-1 items-center justify-between space-x-10">
          <div className="flex flex-1 flex-col space-y-2">
            <span className="text-3xl font-medium">
              Conheça nossa{" "}
              <span className="text-purple-600 dark:text-purple-400">
                equipe
              </span>
            </span>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              eveniet similique hic praesentium non dignissimos consequatur
              deleniti numquam quisquam aspernatur, pariatur id enim error
              quaerat recusandae maiores aliquam nobis, debitis quis ullam
              deserunt eligendi? Earum sit molestiae maxime similique labore?
            </span>

            <div className="pt-8">
              <Button>Ler mais</Button>
            </div>
          </div>

          <div className="flex-1 object-cover object-center">
            <Image
              src="/team.png"
              width={400}
              height={400}
              priority
              alt="Nossa equipe"
              className="object cover h-full w-full object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
}
