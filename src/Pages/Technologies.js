import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      {/* <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 all-img">
        <img src={html} title="html" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JS" />
        <img src={react} title="React" alt="REACT" />
        <img src={redux} title="Redux" alt="REDUX" />
        <img src={tailwind} title="Tailwind CSS" alt="TAILWIND" />
        <img src={bootstrap} title="Bootstrap" alt="BOOTSTRAP" />
        <img src={sass} title="SASS" alt="SASS" />
      </section> */}
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 all-img">
        <div className="flex flex-col items-center">
          <img src={html} title="html" alt="HTML" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={css} title="CSS" alt="CSS" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={js} title="JavaScript" alt="JS" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={react} title="React" alt="REACT" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={redux} title="Redux" alt="REDUX" />
          <p className="mt-2">Redux</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={tailwind} title="Tailwind CSS" alt="TAILWIND" />
          <p className="mt-2">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={bootstrap} title="Bootstrap" alt="BOOTSTRAP" />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={sass} title="SASS" alt="SASS" />
          <p className="mt-2">SASS</p>
        </div>
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 all-tool-img">
        <div className="flex flex-col items-center">
          <img src={vscode} title="Visual Studio Code" alt="" />
          <p className="mt-2">Visual Studio</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={git} title="Git" alt="Git" />
          <p className="mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={github} title="Github" alt="Github" />
          <p className="mt-2">Github</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={npm} title="NPM" alt="NPM" />
          <p className="mt-2">NPM</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={postman} title="Postman" alt="Postman" />
          <p className="mt-2">Postman</p>
        </div>
        {/* <img src={figma} title="Figma" alt="Figma" /> */}
      </section>
    </main>
  );
}

export default Technologies;
