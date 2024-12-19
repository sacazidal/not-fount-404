import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState(
    "Back to Homepage",
  );
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;
    if (loading) {
      timeout = setTimeout(() => {
        navigate("/"); // Переход на главную страницу
      }, 1000); // Задержка в 2 секунды
    }
    return () => clearTimeout(timeout);
  }, [loading, navigate]);

  const handleClick = () => {
    setButtonText("Loading...");
    setLoading(true);
  };

  return (
    <div className="bg-neutral-900">
      <div className="flex flex-col space-y-3 min-h-screen items-center justify-center relative p-5 md:p-0">
        <h1 className="z-10 absolute text-neutral-800 font-bold text-gxl 2xl:text-uxl xl:text-mxl lg:text-lxl md:text-axl sm:text-gxl">
          404
        </h1>
        <h2 className="font-bold text-3xl md:text-6xl z-20 text-center">
          Page not found
        </h2>
        <p className="text-neutral-400 text-base md:text-xl pb-4 z-20 text-center">
          The page was not found, maybe you made a mistake?{" "}
        </p>
        <button
          type="button"
          className="py-2 md:py-3 px-3 md:px-5 bg-red-700 hover:bg-rose-700 rounded-2xl z-20 flex justify-center items-center text-sm lg:text-base"
          onClick={handleClick}
        >
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
