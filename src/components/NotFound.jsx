import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-neutral-900">
      <div className="flex flex-col space-y-3 min-h-screen items-center justify-center relative">
        <h1 className="z-10 absolute text-neutral-800 font-bold 2xl:text-uxl xl:text-mxl lg:text-lxl md:text-axl sm:text-gxl">
          404
        </h1>
        <h2 className="font-bold text-6xl z-20 text-center">
          Page not found
        </h2>
        <p className="text-neutral-400 text-xl pb-4 z-20 text-center">
          The page was not found, maybe you made a mistake?{" "}
        </p>
        <button
          type="button"
          className="py-3 px-5 bg-red-700 hover:bg-rose-700 rounded-2xl z-20 flex justify-center items-center"
        >
          <Link to="/">Back to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
