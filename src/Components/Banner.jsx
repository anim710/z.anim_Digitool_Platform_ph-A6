import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 text-purple-600 text-sm font-medium px-5 py-2 rounded-full">
            ✨ New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-gray-900">
            Supercharge Your
            <br />
            <span className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-gray-900">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity

software—all in one place. Start creating faster today.


Explore Products

          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-purple-600 hover:bg-purple-700 transition-all px-6 py-3 rounded-full font-semibold text-white shadow-md">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border border-gray-300 hover:border-purple-400 transition-all px-6 py-3 rounded-full font-medium text-gray-700">
              {/* <Play className="w-4 h-4 fill-gray-700" /> */}
              Watch Demo
            </button>
          </div>

          
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;