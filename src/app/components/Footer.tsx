import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
      <div className="max-w-screen-xl px-1 py-12 mx-auto space-y-8 overflow-hidden sm:px-3 lg:px-3">
        <div className="flex justify-center space-x-6">
          <a
            href="www.linkedin.com/in/cornelia-mustika-6984ab283"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/cornelia_mustika/"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="mailto:corneliamustika0223@gmail.com"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">Email</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1.17 1.293L12 11.293 4.17 5.293A1 1 0 013 5h18a1 1 0 01-.83.293zM3 18V8l9 7 9-7v10H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/ccandradewi"
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.843 9.485.5.092.682-.217.682-.483v-1.6c-2.774.605-3.36-1.263-3.36-1.263-.453-1.157-1.107-1.464-1.107-1.464-.905-.617.069-.605.069-.605 1 .071 1.614 1.027 1.614 1.027 1.126 1.93 2.951 1.373 3.67 1.053.114-.815.44-1.373.8-1.688-2.664-.306-5.467-1.331-5.467-5.932 0-1.31.468-2.378 1.238-3.217-.124-.305-.536-1.53.118-3.183 0 0 1.007-.322 3.297 1.224.957-.266 1.983-.398 3.001-.402 1.018.004 2.042.136 3.001.402 2.292-1.546 3.297-1.224 3.297-1.224.656 1.654.243 2.879.118 3.183.77.839 1.238 1.906 1.238 3.217 0 4.609-2.81 5.623-5.485 5.92.453.393.855 1.169.855 2.354v3.504c0 .269.182.578.688.48C17.136 20.197 20 16.442 20 12.017 20 6.484 15.523 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cornelia Mustika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
