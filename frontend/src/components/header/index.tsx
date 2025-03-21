import {FC} from 'react';
import {Link} from 'react-router-dom';
import {usePlaces} from '../../utils/service';

const Header: FC = () => {
  const {data} = usePlaces();

  return (
    <header className="border-b border-zinc-300">
      <div className="container flex justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer animate-gradient">
            Tripster
          </h1>

          <nav className="flex gap-5 items-center text-lg">
            <Link
              to="/"
              className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Hotels ({data?.length})
            </Link>
            <Link
              to="/"
              className="max-md:hidden relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Popular
            </Link>
            <Link
              to="/create"
              className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Create
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="border border-blue-500 rounded-full py-2 px-6 max-md:hidden text-lg hover:bg-blue-500 hover:text-white transition-all">
            Sign Up
          </button>
          <button className="bg-blue-500 text-white rounded-full py-2 px-6 text-lg hover:bg-blue-600 transition-all">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
