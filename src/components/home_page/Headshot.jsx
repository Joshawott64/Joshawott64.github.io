import headshot from "../../assets/Headshot.jpg";

const Headshot = () => {
  return (
    <div className="flex justify-center place-items-center w-full animate-fadeFromLeft">
      <div className="w-60 xl:w-72 h-60 xl:h-72 bg-[url('../src/assets/Headshot.jpg')] bg-cover bg-center rounded-lg drop-shadow-lg"></div>
    </div>
  );
};

export default Headshot;
