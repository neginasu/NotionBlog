import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="constainer mx-auto lg:px-2 px-5 lg:w-2/5">
        <div className="container flex items-center justify-between mx-auto">
          <Link href="/" className="text-2xl font-medium">
            neginasu
          </Link>
          <div>
            <ul className="flex items-center text-sm py-4">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 hover:text-violet-300 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="block px-4 py-2 hover:text-violet-300 transition-all duration-300">
                <Link href="https://zenn.dev/neginasu">Zenn</Link>
              </li>
              <li className="block px-4 py-2 hover:text-violet-300 transition-all duration-300">
                <Link href="https://github.com/neginasu">GitHub</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
