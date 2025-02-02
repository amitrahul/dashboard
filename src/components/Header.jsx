import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center ">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
