import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: () => JSX.Element = () => {
  const [stickyClass, setStickyClass] = useState("bg-[#FFC100]");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 400
        ? setStickyClass("bg-white  ")
        : setStickyClass("bg-[#FFC100]");
    }
  };

  return (
    <div
      className={`h-20 w-full bg-[#FFC100] ${stickyClass}    pt-4 lg:px-[10rem] sticky z-50 top-0 transition ease-in-out delay-400 border-b-[1px] border-black  `}
    >
      <div className="flex justify-between   max-[729px]:px-4 items-center ">
        <div>
          <img src="logo.svg" width={"160rem"} />
        </div>

        <div className="flex  gap-x-11">
          <div className="flex gap-x-5 max-[729px]:hidden ">
            <NavbarLinks linkTitle="Our Story" />
            <NavbarLinks linkTitle="Membership" />
            <NavbarLinks linkTitle="Write" />
          </div>

          <div className="flex gap-x-11">
            <div className="max-[554px]:hidden flex items-center">
              <NavbarLinks linkTitle="Sign in" link="/signin" />
            </div>
            <Link to="/signup">
              <button
                className={`${
                  stickyClass === "bg-[#FFC100]" ? "bg-black " : "bg-gr"
                } text-md  text-white font-medium py-3 px-6 rounded-full text-sm`}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
function NavbarLinks({
  linkTitle,
  link,
}: {
  linkTitle: string;
  link?: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <ul className="   text-md font-normal">
        <li>
          {linkTitle === "Sign in" ? (
            <Link to={`${link}`}>{linkTitle}</Link>
          ) : (
            <Link to="">{linkTitle}</Link>
          )}
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
