export default function Home() {
  return (
    <>
      {/* Header */}

      <header className="bg-slate-200">
        <nav
          className="mx-auto flex items-center p-5 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Alpse</span>
              <img
                className="h-8 w-auto"
                src="./favicon.ico"
                alt="Website Logo"
              />
            </a>
          </div>

          <div className="lg:flex lg:gap-x-12">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Start Here
            </a>
            <a
              href="/"
              className="text-xl font-bold leading-6 text-gray-900 overline"
            >
              ALPSE
            </a>
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About Us
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Page Content and Buttons */}

      <div className="flex items-center justify-center h-screen">
        <div className="text-white">
          <div>
            <h1 className="text-6xl font-bold tracking-tight text-slate-200">
              Flight Information → All In One Place.
            </h1>
            <div className="mt-5 flex items-center justify-center gap-x-6 lg:justify-start text-slate-200">
              <a
                href="/"
                className="rounded-md bg-slate-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                href="/"
                className="animate-pulse text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
