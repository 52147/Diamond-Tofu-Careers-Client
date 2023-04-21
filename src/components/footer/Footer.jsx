import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



export const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = (window.innerHeight + window.pageYOffset) >= document.body.scrollHeight;
      setShowFooter(isBottom);
    };

    const handleResize = () => {
      const isFullHeight = document.documentElement.clientHeight >= document.documentElement.scrollHeight;
      const isShortContent = document.documentElement.scrollHeight <= window.innerHeight;
      setShowFooter(isFullHeight || isShortContent);
    }

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <footer className="text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <img src="DT logo.png" alt="" className="mb-6" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-white">Get in Touch</h2>
                <ul>
                  <li className="flex items-center mb-2">
                    <span className="footer-list-icon mr-2">
                      <FontAwesomeIcon icon={faLocation} />
                    </span>
                    <label htmlFor="" className="text-white">
                      MA, Cambridge, US
                    </label>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="footer-list-icon mr-2">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </span>
                    <label htmlFor="" className="text-white">
                      diamond-tofu
                    </label>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="footer-list-icon mr-2">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <label htmlFor="" className="text-white">
                      support@gmail.com
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-2 text-white">
                Subscribe to our newsletter
              </h2>
              <p className="text-white mb-6">
                Stay up to date with our latest news and promotions.
              </p>
              <form className="flex flex-wrap">
                <div className="w-full md:w-2/3">
                  <input
                    type="email"
                    className="form-control rounded-none rounded-r-lg mb-2 md:mb-0"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <button className="btn btn-primary btn-block rounded-none rounded-l-lg">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-white">
              © 2023 Diamond Tofu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
