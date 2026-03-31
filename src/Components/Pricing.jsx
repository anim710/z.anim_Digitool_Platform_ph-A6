const Pricing = () => {
  return (
    <div className="py-16 px-6 bg-white">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-3">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">

        {/* Starter */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Starter</h3>
            <p className="text-sm text-gray-500 mt-1">Perfect for getting started</p>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold text-gray-900">$0</span>
            <span className="text-sm text-gray-500 mb-1">/Month</span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> Access to 10 free tools</li>
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> Basic templates</li>
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> Community support</li>
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> 1 project per month</li>
          </ul>
          <button className="w-full py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all">
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className="relative border border-purple-600 rounded-2xl p-8 flex flex-col gap-6 bg-purple-600 text-white scale-105 shadow-2xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-yellow-300 text-yellow-900 text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-sm text-purple-200 mt-1">Best for professionals</p>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-sm text-purple-200 mb-1">/Month</span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-sm"><span>✓</span> Access to all premium tools</li>
            <li className="flex items-center gap-2 text-sm"><span>✓</span> Unlimited templates</li>
            <li className="flex items-center gap-2 text-sm"><span>✓</span> Priority support</li>
            <li className="flex items-center gap-2 text-sm"><span>✓</span> Unlimited projects</li>
            <li className="flex items-center gap-2 text-sm"><span>✓</span> Cloud sync</li>
            <li className="flex items-center gap-2 text-sm"><span>✓</span> Advanced analytics</li>
          </ul>
          <button className="w-full py-3 rounded-full bg-white text-purple-600 font-semibold hover:bg-purple-50 transition-all">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
            <p className="text-sm text-gray-500 mt-1">For teams and businesses</p>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold text-gray-900">$99</span>
            <span className="text-sm text-gray-500 mb-1">/Month</span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> Everything in Pro</li>
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> Team collaboration</li>
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> Custom integrations</li>
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> Dedicated support</li>
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> SLA guarantee</li>
            <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-purple-600">✓</span> Custom branding</li>
          </ul>
          <button className="w-full py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;