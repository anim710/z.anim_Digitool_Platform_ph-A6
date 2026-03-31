const Explore = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-400 py-16 px-6">

      {/* Content */}
      <div className="text-center flex flex-col items-center gap-6">

        <div>
          <h2 className="text-4xl font-bold text-white">Ready To Transform Your Workflow?</h2>
          <p className="text-purple-200 mt-3">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br />
            Start your free trial today.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-purple-600 transition-all">
            Explore Products
          </button>
          <button className="px-6 py-3 rounded-full bg-white text-purple-600 font-semibold hover:bg-purple-50 transition-all">
            View Pricing
          </button>
        </div>

        <p className="text-purple-200 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default Explore;