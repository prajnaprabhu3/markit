import Searchbar from "../search/searchbar";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Logo from "../ui/logo";

const Header = () => {
  return (
    <div className="py-4 border-b dark:border-zinc-700 drop-shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-20">
        <Logo />
        <Searchbar />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
