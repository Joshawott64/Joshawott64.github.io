const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col justify-start place-items-center gap-y-4 xl:gap-y-8 w-full h-fit px-12 xl:px-20 py-6 xl:py-12 text-darkest bg-lightest rounded-lg drop-shadow-lg animate-fadeFromBottom">
        <p className="text-4xl font-extralight drop-shadow-lg">About me...</p>
        <p className="xl:text-lg font-extralight drop-shadow-lg">
          {" "}
          I got my start in software development in late high school. After
          graduating from{" "}
          <a
            href="https://stech.edu/"
            target="_blank"
            className="text-light underline-offset-4 hover:text-dark hover:underline transition-colors duration-200"
          >
            Southwest Technical College
          </a>{" "}
          with certifications in Software Development and IT, I spent some time
          in the workforce before setting my sights on full stack web
          development. I enrolled in{" "}
          <a
            href="https://devmountain.com/"
            target="_blank"
            className="text-light underline-offset-4 hover:text-dark hover:underline transition-colors duration-200"
          >
            Devmountain's
          </a>{" "}
          web development bootcamp where I learned the fundamentals of React,
          NodeJS, PostgreSQL, and more. <br />
          <br />I was born and raised in Cedar City, Utah and enjoy LEGO,
          writing, listening to movie/game soundtracks, cats, 3D printing,
          weight lifting, shiny Pokemon hunting, and gaming of the video and
          tabletop varieties. In the future, I hope to develop and publish my
          own games.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
