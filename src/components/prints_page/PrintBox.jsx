import lodash from "lodash";

const PrintBox = ({ name, image, description }) => {
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
        <p className="py-1 drop-shadow-lg">{name}</p>
      </div>
      <div className="flex flex-col justify-center place-items-center gap-y-2 px-5 pt-2 pb-5">
        <div className="flex justify-center place-items-center">
          <img
            src={image}
            alt={name}
            className="max-h-72 rounded-lg drop-shadow-lg"
          />
        </div>
        <p className="drop-shadow-lg">{description}</p>
      </div>
    </div>
  );
};

export default PrintBox;
