import lodash from "lodash";

const ProjectBox = ({ name, image, hyperlink, description }) => {
  // animate-fadeFromBottom animate-fadeFromTop animate-fadeFromLeft animate-fadeFromRight

  // array for animation selection
  const animations = ["Bottom", "Top", "Left", "Right"];
  // random index
  const randomIndex = lodash.random(0, 3);
  console.log("randomIndex:", randomIndex);

  return (
    <div
      className={`bg-lightest text-center rounded-lg drop-shadow-lg animate-fadeFrom${animations[randomIndex]}`}
    >
      <div className="flex justify-center place-items-center w-full bg-dark text-lightest text-xl rounded-t-lg drop-shadow-lg">
        <a
          href={hyperlink}
          target="_blank"
          className="py-1 underline underline-offset-4 drop-shadow-lg hover:text-light transition-colors duration-200"
        >
          {name}
        </a>
      </div>
      <div className="flex flex-col gap-y-2 px-5 pt-2 pb-5">
        <a href={hyperlink} target="_blank">
          <img src={image} alt={name} className="rounded-lg drop-shadow-lg" />
        </a>
        <p className="drop-shadow-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProjectBox;
