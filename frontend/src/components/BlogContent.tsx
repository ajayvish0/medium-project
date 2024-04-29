import { Link } from "react-router-dom";

interface BlogContentProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  smallTitle: string;
  size?: string;
  id: string;
}
const BlogContent = ({
  id,
  authorName,
  title,
  content,
  publishDate,
  smallTitle,
  size,
}: BlogContentProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="grid lg:grid-cols-4    mb-5  grid-cols-3  gap-2 ">
        <div className=" flex flex-col lg:col-span-3  col-span-2 max-md:pr-4  ">
          <div className=" max-w-full pr-4">
            <div className="flex space-x-2 md:space-x-3  items-center  ">
              <div className="w-7 max-sm:w-9  ">
                <Avatar name={authorName} />
              </div>
              <div className="flex  flex-wrap  items-center       ">
                <h1 className="text-[14px] font-semibold lg:text-[15px] ">
                  {authorName}
                </h1>

                <p className="text-[14px] lg:text-[15px] max-sm:text-xs  font-semibold  ">
                  <span className="text-xs max-sm:text-xs   min-[455px]:pl-1 text-slate-400">
                    in
                  </span>{" "}
                  {smallTitle}
                </p>
              </div>
            </div>
            <div className="">
              {/* Title*/}
              <h1 className="text-xl font-extrabold max-sm:pt-4 pt-2 max-sm:text-[19px] max-sm:leading-5   ">
                {title}
              </h1>
              <p
                className={`${
                  size === "blogs" ? "pt-1 " : ""
                }text-[0.89rem] font-medium text-slate-500 hidden md:block `}
              >
                {content.length > 200 ? content.slice(0, 200) : content}
                {content.length > 200 ? "..." : ""}
              </p>
            </div>
            <div
              className={`${
                size === "blogs" ? "xl:pt-6 sm:pt-9 max-sm:pt-12" : ""
              } text-[0.8rem] font-base text-slate-400   flex justify-between pt-2 `}
            >
              <div className="flex">
                <p>{publishDate} </p>
                <div className="h-3 flex justify-center items-center ">
                  <p className=" ">&nbsp;&nbsp;.&nbsp;</p>
                </div>

                <p>&nbsp;{`${Math.ceil(content.length / 100)} min read`}</p>
              </div>
              <div className="flex items-center">
                <img src="save-instagram.png" className="h-4 w-4" alt="save" />
              </div>
            </div>
          </div>
        </div>
        <div className=" self-center justify-self-end">
          <img src="0.jpg" className=" object-cover h-[8rem] " />
        </div>
      </div>
    </Link>
  );
};

function Avatar({ name }: { name: string }) {
  //<img src="0.jpg" className="rounded-md    bg-cover h-7 w-full " />
  const initial = name.split(" ");
  let a = "";
  if (initial.length > 1) {
    a = initial[0][0] + initial[1][0];
  } else {
    a = initial[0][0];
  }
  console.log(a);
  return (
    <div className="h-7 rounded-full w-7 bg-slate-300 flex items-center justify-center p-4 text-[1rem]  ">
      {a}
    </div>
  );
}
export default BlogContent;
