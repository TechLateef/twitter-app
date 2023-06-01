import profile from "../asset/profile.jpg";
const navItems = [
  {
    class: "material-symbols-outlined",
    name: "home",
    description: "Home",
  },
  {
    class: "material-symbols-outlined",
    name: "tag",
    description: "Explore",
  },
  {
    class: "material-symbols-outlined",
    name: "notifications",
    description: "Notifications",
  },
  {
    class: "material-symbols-outlined",
    name: "mail",
    description: "Messages",
  },
  {
    class: "material-symbols-outlined",
    name: "featured_play_list",
    description: "List",
  },
  {
    class: "material-symbols-outlined",
    name: "bookmark",
    description: `Bookmark`,
  },
  {
    class: "material-symbols-outlined",
    name: "person",
    description: "Profile",
  },
  {
    class: "material-symbols-outlined",
    name: "more_horiz",
    description: "More",
  },
];

const Nav = ({ url }) => {
  return (
    <div className="border-r ">
      <section className="nav">
        {navItems.map((item) => {
          return (
            <>
              <span className={item.class}>{item.name}</span>
            </>
          );
        })}

        <button className="buttons">Tweet</button>
        <div className=" flex items-center">
          <img
            src={profile}
            className="w-[100px]  object-cover h-[100px] m-5 rounded-full focus:border-none"
          />
          <div>
            <h1 className="font-bold">Tech_Lateef</h1>
            <p className="text-gray-500">@mk_lateef</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
