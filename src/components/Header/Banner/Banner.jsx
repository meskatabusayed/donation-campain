

const Banner = () => {
  const handleSearch = () => {
        const searchFeild = document.getElementById('search-field');
        const searchText = searchFeild.value;
        console.log(searchText);
  }
  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: `url('https://i.ibb.co/LYRRHjS/Rectangle-4281.png')`,
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50">
     
        <h1 className="text-center text-5xl font-bold text-black pt-60">
          I Grow By Helping People In Need
        </h1>

        <div  className="flex justify-center items-center pt-5">
          <div>
            <input id="search-field"
              type="text"
              placeholder="Search here...."
              className="input input-bordered  w-full max-w-xs"
            />
          </div>
          <div>
            <button onClick={() => handleSearch()}
              className="middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
