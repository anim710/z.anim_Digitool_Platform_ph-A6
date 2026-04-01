import React from 'react';
// import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#111827] text-white pt-16 pb-8 px-4 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Templates</a>
              <a href="#">Integrations</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Documentation</a>
              <a href="#">Help Center</a>
              <a href="#">Community</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-[#111827] p-2 rounded-full flex items-center justify-center">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-white text-[#111827] p-2 rounded-full flex items-center justify-center">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-white text-[#111827] p-2 rounded-full flex items-center justify-center">
                <FaTwitter size={20} />
              </a>
            </div>
          </div> */}

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;