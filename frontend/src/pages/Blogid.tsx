import { BlogPostType } from "../hooks";

const Blogid = ({ blog }: { blog: BlogPostType }) => {
  return (
    <div className=" sm:w-[800px] ">
      <div>
        <h1 className="text-[1.9rem] font-bold  sm:text-4xl xl:text-[2.6rem] xl:max-w-[600px]">
          {blog.title}
        </h1>
      </div>
      <div className="py-4 sm:py-7">
        <Card authorName={blog.author.name} publishDate="Apr 24, 2024" />
      </div>
      <div>
        <p className="text-[1.15rem] md:text-[1.3rem] font-normal   tracking-wide pt-4 ">
          {blog.content}
        </p>
      </div>
    </div>
  );
};

function Card({
  authorName,
  publishDate,
}: {
  authorName: string;
  publishDate: string;
}) {
  return (
    <div className="flex items-center gap-x-5   ">
      <div className=" ">
        <Avatarb name={authorName?.length > 0 ? authorName : "Anonymours"} />
      </div>
      <div className=" ">
        <div className="flex gap-3 items-center">
          <h1 className="text-md font-medium xl:text-[1.1rem] cursor-pointer hover:underline text-slate-900">
            {authorName?.length > 0 ? authorName : "Anonymours"}
          </h1>
          <div>
            <p className=" relative bottom-1">.</p>
          </div>
          <button className="text-gr ">Follow</button>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-[14px] font-normal text-slate-700">5 min read</p>
          <div className="relative bottom-1">
            <p className="  ">.</p>
          </div>
          <p className="text-[14px] font-normal text-slate-700">
            {publishDate}
          </p>
        </div>
      </div>
    </div>
  );
}

function Avatarb({ name }: { name: string }) {
  //<img src="0.jpg" className="rounded-md    bg-cover h-7 w-full " />
  const initial = name?.split(" ");
  let a = "";
  if (initial.length > 1) {
    a = initial[0][0] + initial[1][0];
  } else {
    a = initial[0][0];
  }
  console.log(a);
  return (
    <div className="  h-12 w-12 rounded-full   bg-slate-300 flex items-center justify-center pb-1 text-[1.3rem]  ">
      {a}
    </div>
  );
}
export default Blogid;
