export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-6 py-2 sm:py-4 shadow-sm fixed w-screen top-0 bg-background z-20">
      <div className="text-2xl sm:text-3xl text-text font-semibold">Soft UI</div>
      <a
        href="https://github.com/ishantchauhan710/softui"
        className="flex items-center justify-center px-4 py-2 text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.165 11.387.597.11.818-.258.818-.575v-2.161c-3.338.729-4.044-1.624-4.044-1.624-.545-1.384-1.333-1.751-1.333-1.751-1.089-.745.083-.73.083-.73 1.204.085 1.836 1.247 1.836 1.247 1.072 1.835 2.809 1.305 3.493.997.107-.776.419-1.305.763-1.606-2.665-.305-5.466-1.333-5.466-5.933 0-1.31.469-2.379 1.239-3.215-.124-.305-.537-1.525.118-3.178 0 0 1.005-.322 3.292 1.229.957-.265 1.98-.398 3.002-.403 1.022.005 2.044.138 3.002.403 2.288-1.551 3.292-1.229 3.292-1.229.657 1.653.242 2.873.118 3.178.77.836 1.239 1.904 1.239 3.215 0 4.621-2.812 5.624-5.481 5.921.432.371.819 1.104.819 2.228v3.293c0 .321.221.69.825.575C20.564 21.798 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
        </svg>
        GitHub
      </a>
    </div>
  );
}
