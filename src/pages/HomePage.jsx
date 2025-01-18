import Headshot from "../components/home_page/Headshot";
import AboutMe from "../components/home_page/AboutMe";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start place-items-start gap-y-4 w-full h-full pt-4 lg:pt-12 px-5 lg:px-10 xl:px-16 2xl:px-20">
      <Headshot />
      <AboutMe />
    </div>
  );
};

export default HomePage;
