import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Heart, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-semibold text-slate-700">
              Mental health Advisor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-slate-600 hover:text-indigo-600 transition"
            >
              Home
            </Link>
            <SignedIn>
              <Link
                to="/questionnaire"
                className="text-slate-600 hover:text-indigo-600 transition"
              >
                Assessment
              </Link>
              <Link
                to="/dashboard"
                className="text-slate-600 hover:text-indigo-600 transition"
              >
                Resources
              </Link>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              className="block py-2 text-slate-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <SignedIn>
              <Link
                to="/questionnaire"
                className="block py-2 text-slate-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Assessment
              </Link>
              <Link
                to="/dashboard"
                className="block py-2 text-slate-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>

              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
