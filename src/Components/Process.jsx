
import Userimage from "../assets/user.png";
import Packageimage from "../assets/package.png";
import Rocketimage from "../assets/rocket.png";
const Process = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mt-3">Start using premium digital tools in minutes, not hours.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* Step 1 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-sm">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
            01
          </div>
          <div className="bg-purple-100 p-5 rounded-full">
            <img src={Userimage} alt="" srcset="" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Create Account</h3>
          <p className="text-sm text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-sm">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
            02
          </div>
          <div className="bg-purple-100 p-5 rounded-full">
            <img src={Packageimage} alt="" srcset="" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Choose Products</h3>
          <p className="text-sm text-gray-500">Browse our catalog and select the tools that fit your needs.</p>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-sm">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
            03
          </div>
          <div className="bg-purple-100 p-5 rounded-full">
            <img src={Rocketimage} alt="" srcset="" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Start Creating</h3>
          <p className="text-sm text-gray-500">Download and start using your premium tools immediately.</p>
        </div>

      </div>
    </div>
  );
};

export default Process;