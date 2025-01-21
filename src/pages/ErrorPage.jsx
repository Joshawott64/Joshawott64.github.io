import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.error(error);

  return (
    <>
      <div className="flex flex-col justify-center place-items-center h-svh w-full text-text-light bg-gradient-to-b from-lightest to-dark to-[130%] drop-shadow-lg">
        <div className="flex flex-col justify-center place-items-center w-72 h-1/2 bg-lightest rounded-3xl p-6 drop-shadow-lg">
          <div className="flex-1 flex flex-col justify-center place-items-center text-center">
            <p className="text-dark-accent text-5xl font-semibold drop-shadow-lg">
              {error.status}
            </p>
            <p className="text-4xl font-semibold drop-shadow-lg">-</p>
            <p className="text-2xl font-semibold drop-shadow-lg">
              {error.statusText}
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center place-items-center text-center">
            <p className="text-center drop-shadow-lg">Error:</p>
            <p className="text-center drop-shadow-lg">{error.error.message}</p>
          </div>
          <div className="flex-1 flex flex-col justify-center place-items-center text-center drop-shadow-lg">
            <p
              onClick={() => navigate("/")}
              className="text-lightest bg-dark bg-opacity-90 p-4 border-2 border-dark rounded-full cursor-pointer hover:border-darkest drop-shadow-lg transition-all duration-300"
            >
              Return to home page
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
