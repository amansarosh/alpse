export default function about() {
  return (
    <>
      {/* Header */}

      <header className="bg-slate-200">
        <nav className="flex p-5 justify-center" aria-label="Global">
          <div className="flex gap-x-12">
            <a
              href="/search"
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
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </a>
          </div>
        </nav>
      </header>

      <section className="pt-80">
        <h1 className="text-5xl text-slate-200 font-bold leading-6 text-gray-900 overline text-center">
          ALPSE
        </h1>
        <figure className="mt-10">
          <blockquote className="flex-auto text-center text-slate-200 text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              ALPSE (pronounced "Alps" like the mountains) is built to find the
              most up-to-date and reliable information of flights happening all
              around the world. With the AirLabs Data API, all realtime
              information is easily available in a matter of seconds.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/55336738?v=4"
              alt="Profile Picture"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-slate-200">Aman Sarosh</div>
              <div className="text-slate-500">Creator of ALPSE</div>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
