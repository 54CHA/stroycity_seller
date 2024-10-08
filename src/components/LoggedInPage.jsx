import { Link } from "react-router-dom";

const LoggedInPage = () => {
  return (
    <div className="relative bg-[url('/images/sunrise.jpg')] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-slate-600 bg-opacity-30"></div>
      <div className="h-[86vh] relative w-[87%] m-auto">
        <div className=" h-full left-0 top-0 absolute " />
        <div className=" text-[#f9e6e4] text-[7vw] font-bold w-7/12 pt-20">
          КАЧЕСТВО, НАДЕЖНОСТЬ, ПРОФЕССИОНАЛИЗМ.
        </div>
        <Link
          to="/Store"
          className="ml-[40%] w-2.5/12 text-white text-[2vw] bg-[#FF8900] py-5 px-7 hover:bg-[#ff6a00] hover:scale-[1.01] transition-all duration-200"
        >
          Открыть каталог
        </Link>
        <div className="w-[2.5%] h-[5%] left-[92.5%] top-[35%] absolute transition-colors hover:bg-[#ff5a00]/50 mt-20">
          <button className="w-full h-full left-0 top-0 absolute bg-[#ff8800]/50" />
          <img
            src="/arrowRight.svg"
            className="absolute w-full h-full "
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LoggedInPage;
