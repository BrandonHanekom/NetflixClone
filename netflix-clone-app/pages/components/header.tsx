function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerList">Home</li>
          <li className="headerList">Movies</li>
          <li className="headerList">TV Shows</li>
          <li className="headerList">What's Hot</li>
          <li className="headerList">My List</li>
        </ul>
      </div>
      <div></div>
    </header>
  )
}

export default Header
