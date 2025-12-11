export default function Footer() {
  return (
    <footer className="w-full bg-black font-['inter2'] text-neutral-300 px-6 md:px-16 py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="space-y-3">
          <h2 className="text-xl font-[inter2] tracking-wide font-semibold  text-white drop-shadow-md flex items-center gap-2 group">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></span>
            <span className="text-shadow-lg shadow-white animate-pulse group-hover:scale-150 transition-transform duration-300">Krishna</span>
          </h2>
          <p className="text-sm leading-relaxed hover:text-neutral-100 transition-colors duration-300">
            High level experience in web design and development knowledge, producing quality work.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-white text-lg font-medium drop-shadow flex items-center gap-2">
            <i className="ri-briefcase-line text-blue-400"></i>
            Use Cases
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-palette-line text-xs text-blue-400"></i>
              Web-designers
            </li>
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-megaphone-line text-xs text-blue-400"></i>
              Freelancer
            </li>
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-store-2-line text-xs text-blue-400"></i>
              Full-Stack Developers
            </li>
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-tools-line text-xs text-blue-400"></i>
              Consultant
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-white text-lg font-medium drop-shadow flex items-center gap-2">
            <i className="ri-building-line text-blue-400"></i>
            Info's
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-information-line text-xs text-blue-400"></i>
              About Me
            </li>
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-user-star-line text-xs text-blue-400"></i>
              Academics & Skills
            </li>
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-question-line text-xs text-blue-400"></i>
              Experience
            </li>
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-team-line text-xs text-blue-400"></i>
              Projects & Works
            </li>
            <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-2">
              <i className="ri-mail-line text-xs text-blue-400"></i>
              Contact Us
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-white text-lg font-medium drop-shadow flex items-center gap-2">
            <i className="ri-share-line text-blue-400"></i>
            Follow Me
          </h3>
          <div className="flex items-center gap-4 text-xl">
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 hover:-rotate-12 transition-all duration-300 hover:text-blue-400 group"
              aria-label="Facebook"
            >
              <i className="ri-facebook-fill group-hover:animate-bounce"></i>
            </a>
            <a 
              href="https://x.com/_k_r_ishna" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 hover:rotate-12 transition-all duration-300 hover:text-sky-400 group"
              aria-label="Twitter"
            >
              <i className="ri-twitter-x-fill group-hover:animate-bounce"></i>
            </a>
            <a 
              href="https://dribbble.com/krishnakumar637290" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 hover:-rotate-12 transition-all duration-300 hover:text-pink-400 group"
              aria-label="Dribbble"
            >
              <i className="ri-dribbble-fill group-hover:animate-bounce"></i>
            </a>
            <a 
              href="https://www.instagram.com/_k_r_i_s_h_n_a_86/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 hover:rotate-12 transition-all duration-300 hover:text-pink-500 group"
              aria-label="Instagram"
            >
              <i className="ri-instagram-fill group-hover:animate-bounce"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/krishna-kumar-mahakul-a13a28256/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 hover:-rotate-12 transition-all duration-300 hover:text-blue-500 group"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill group-hover:animate-bounce"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left text-neutral-500 text-sm flex items-center gap-2">
          <i className="ri-copyright-line"></i>
          <span>2025 Your Company. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-neutral-500">
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            <i className="ri-shield-check-line"></i>
            Privacy Policy
          </a>
          <span>•</span>
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            <i className="ri-file-text-line"></i>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}