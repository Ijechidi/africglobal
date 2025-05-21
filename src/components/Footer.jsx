import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaTelegramPlane,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-white text-gray-700 px-10 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
  
          {/* Left Side: Logo and Text Side by Side */}
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-start gap-6">
            {/* Logo */}
            <div className="shrink-0">
              <div className="border border-dotted border-black inline-block px-4 py-2">
                <h1 className="text-3xl font-bold text-green-600">AfricGlobal</h1>
              </div>
            </div>
  
            {/* Description + Contact + Social */}
            <div className="space-y-4">
              <p className="max-w-md">
                Hello, we are ABC. trying to make an effort to put the right people for you
                to get the best results. Just insight
              </p>
              <div>
                <a href="tel:(123)456-7890" className="underline hover:text-gray-900">
                  (123) 456–7890
                </a>
              </div>
              <div>
                <a href="mailto:ABC@gmail.com" className="underline hover:text-gray-900">
                  ABC@gmail.com
                </a>
              </div>
  
              {/* Social Icons */}
              <div className="flex space-x-6 text-xl text-black pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                </a>
               
              </div>
            </div>
          </div>
  
          {/* Company Links */}
<div>
  <h3 className="text-lg font-semibold mb-4 text-black">Company</h3>
  <ul className="space-y-2 text-gray-500">
    <li><a href="#" className="hover:underline">Autocapture</a></li>
    <li><a href="#" className="hover:underline">Data Governance</a></li>
    <li><a href="#" className="hover:underline">Virtual Events</a></li>
    <li><a href="#" className="hover:underline">Virtual Users</a></li>
    <li><a href="#" className="hover:underline">Behavioral Analytics</a></li>
    <li><a href="#" className="hover:underline">Connect</a></li>
  </ul>
</div>

{/* Explore Links */}
<div>
  <h3 className="text-lg font-semibold mb-4 text-black">Explore</h3>
  <ul className="space-y-2 text-gray-500">
    <li><a href="#" className="hover:underline">Resources</a></li>
    <li><a href="#" className="hover:underline">Blog</a></li>
    <li><a href="#" className="hover:underline">Documents</a></li>
  </ul>
</div>

        </div>
      </footer>
    );
  }
  