import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function Header() {
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set("searchTerm", searchTerm)
    const searchQuery = urlParams.toString()
    navigate(`/search/${searchQuery}`)
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParams.get("searchTerm")
    if (searchTermFromUrl) {
        setSearchTerm(searchTermFromUrl)
      }
  }, [location.search])
  return (
    <header className="bg-zinc-600 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-200">Perfect</span>
            <span className="text-blue-400">Estate</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-zinc-300 p-1 rounded-lg flex items-center">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Searh for Realestates"
            className="bg-transparent focus:outline-none p-1 w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-zinc-700" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-zinc-300 hover:underline ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-zinc-300 hover:underline ">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="rounded-full h-7 w-7 object-cover"
              />
            ) : (
              <Link to="/sign-in">
                <li className="hidden sm:inline text-zinc-300 hover:underline ">
                  Sign In
                </li>
              </Link>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
