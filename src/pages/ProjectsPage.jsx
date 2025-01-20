import ProjectBox from "../components/projects_page/ProjectBox.jsx";
import NationalDex from "../assets/NationalDex.png";
import Optimetrix from "../assets/Optimetrix.png";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col justify-start place-items-ceneter gap-y-2 w-full h-full px-5 lg:px-10 xl:px-16 2xl:px-20 py-2 text-darkest overflow-y-auto">
      <div className="flex justify-center place-items-center w-full animate-fadeFromLeft">
        <p className="text-2xl drop-shadow-lg">My Projects</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-2 w-full">
        <ProjectBox
          name={"Optimetrix"}
          image={Optimetrix}
          hyperlink={
            "http://ec2-54-193-62-149.us-west-1.compute.amazonaws.com/"
          }
          description={
            "I primarily worked the front end on this site. The 3D map (Resium) package was particularly challenging to work with, but was undeniably satisfying to figure out."
          }
        />
        <ProjectBox
          name={"NationalDex.net"}
          image={NationalDex}
          hyperlink={"https://nationaldex.net"}
          description={
            "NationalDex.net functions like a Pokedex from the beloved Pokémon franchise and allows user to build their own Pokémon teams. It started out as a simple portfolio builder but quickly turned into a passion project that I put a lot of time and effort into."
          }
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
