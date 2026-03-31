const Rating = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-400 py-10 px-6">

      <div className="max-w-3xl mx-auto grid grid-cols-3 items-center text-center">

        {/* Stat 1 */}
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-bold text-white">50K+</span>
          <span className="text-purple-200 text-sm">Active Users</span>
        </div>

        {/* Divider */}
        <div className="border-l border-purple-300 flex flex-col gap-1">
          <span className="text-4xl font-bold text-white">200+</span>
          <span className="text-purple-200 text-sm">Premium Tools</span>
        </div>

        {/* Divider */}
        <div className="border-l border-purple-300 flex flex-col gap-1">
          <span className="text-4xl font-bold text-white">4.9</span>
          <span className="text-purple-200 text-sm">Rating</span>
        </div>

      </div>
    </div>
  );
};

export default Rating;