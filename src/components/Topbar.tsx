import { Link } from "react-router-dom";
export const Topbar = () => {
  return (
    <div className="max-w-screen-lg w-full bg-black align-center px-5 pb-5 pt-8">
      {/* <img src="/logo.png" className="max-w-56" /> */}
      <div className="text-8xl text-white">CodeX</div>
      <NavBar />
    </div>
  );
};

const topbarItems = [
  {
    id: 1,
    title: "About",
    route: "/about",
  },
  {
    id: 2,
    title: "Acitivity",
    route: "/activity",
  },
  {
    id: 3,
    title: "Problems",
    route: "/problems",
  },
  {
    id: 4,
    title: "Leaderboard",
    route: "/leaderboar",
  },
];
function NavBar() {
  return (
    <div className="flex mt-4">
      {topbarItems.map((item) => (
        <NavbarItem key={item.id} route={item.route} title={item.title} />
      ))}
    </div>
  );
}

function NavbarItem({ title, route }: { title: string; route: string }) {
  return (
    <div className="mr-10 text-slate-400 cursor-pointer hover:text-white text-base font-light">
      {title}
    </div>
  );
}
