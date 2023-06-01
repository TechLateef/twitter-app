import profile from "../asset/profile.jpg";
const Main = () => {
  return (
    <div className="main">
      <div className="grid grid-cols-2 fixed bg-white max-w-[657px]">
        <h1 className="col-span-2 font-bold text-2xl m-6 ">Home</h1>
        <div className="col-span-2 flex mt-10 border-b border-b-gray-500">
          <button className="py-4 hover:bg-gray-100 w-[20rem]  text-xl font-bold">
            For you
          </button>
          <button className="py-4 hover:bg-gray-100 w-[22rem] right-0 text-xl font-bold">
            Following
          </button>
        </div>
      </div>
      <div className="scrollable mt-[11rem] grid">
        <div className="grid grid-cols-6">
          <div className="w-[5rem]">
            <img
              src={profile}
              className="w-[90px]  object-cover h-[90px] m-5 rounded-full focus:border-none"
            />
          </div>

          <div className="col-span-5  w-[100%] flex flex-row">
            <div className="w-[100%]">
              <input
                className=" text-2xl h-[5rem] border-none mt-8 w-[100%] focus:outline-none"
                placeholder="What is happening?1"
              />
              <div className="bg-white flex justify-between p-2  items-end">
                <nav className="text-[#1DA1F2] ml-[-16px]">
                  <span className="material-symbols-outlined px-2">image</span>
                  <span className="material-symbols-outlined px-2">
                    gif_box
                  </span>
                  <span className="material-symbols-outlined px-2">ballot</span>
                  <span className="material-symbols-outlined px-2">mood</span>
                  <span className="material-symbols-outlined px-2">event</span>
                  <span className="material-symbols-outlined px-2">
                    location_on
                  </span>
                </nav>
                <button className="button bg-[#1DA1F2] h-9 w-[8rem] rounded-2xl text-white font-bold">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">7</div>
        <div className="item">8</div>
        <div className="item">9</div>
        <div className="item">0</div>
      </div>
    </div>
  );
};

export default Main;
