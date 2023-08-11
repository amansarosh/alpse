import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Main Page Content and Buttons */}

      <div className="flex items-center justify-center h-screen">
        <div className="text-white">
          <div>
            <h1 className="text-6xl font-bold text-slate-200">
              Flight Information → All In One Place.
            </h1>
            <div className="mt-5 flex items-center justify-center gap-x-6 lg:justify-start text-slate-200">
              <Link
                href="/search"
                className="rounded-md bg-slate-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
