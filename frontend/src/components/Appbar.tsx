import { Link } from "react-router-dom";

export const Appbar = ({ usedfor }: { usedfor: string }) => {
  return (
    <div className="flex  justify-between items-center px-8 border-b-2 py-3">
      <div className="flex gap-x-5    ">
        <Link to="/blogs">
          <div className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1043.63 592.71"
              className="w-[3rem]"
            >
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-x-5 sm:gap-x-8">
        {usedfor === "navbar" ? (
          <div className="flex items-center gap-x-5 sm:gap-x-8">
            <div className=" sm:border-b-2 px-4 py-[0.2rem] sm:rounded-lg sm:border-slate-600 ">
              <div className="flex items-center gap-x-3     ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-[1.5rem]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="  max-sm:hidden  border-1 focus:outline-none placeholder:text-slate-600"
                />
              </div>
            </div>
            <div>
              <Link
                to="/publish"
                className="flex gap-x-2 items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Write"
                  className="w-[1.5rem]"
                >
                  <path
                    d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                    stroke="currentColor"
                  />
                </svg>
                <div className="max-md:hidden ">
                  <p className="text-slate-600">Write</p>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Link to="https://help.medium.com/hc/en-us/articles/115004681607-Getting-started-with-a-Medium-publication">
              Help?
            </Link>
          </div>
        )}
        <div>
          <div className="bg-blue-200 rounded-full w-9 h-9"></div>
        </div>
      </div>
    </div>
  );
};
