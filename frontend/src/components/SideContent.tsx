import { Link } from "react-router-dom";

const SideContent = () => {
  return (
    <div className="  w-full  lg:sticky lg:top-[100px] ">
      <div>
        <h1 className="text-[1.03rem] text-slate-700 font-medium">
          Discover more of what matters to you
        </h1>
      </div>
      <div className="flex flex-wrap gap-3 p-4 ">
        <LinkElement title="Programming" />
        <LinkElement title="Data Science" />
        <LinkElement title="Technology" />
        <LinkElement title="Self Improvement" />
        <LinkElement title="Writing" />
        <LinkElement title="Relationships" />
        <LinkElement title="Machine Learning" />
        <LinkElement title="Productivity" />
        <LinkElement title="Politics" />
      </div>
      <div className="pt-3">
        <Link to="/blogs" className="text-md font-medium text-gr">
          See more topics
        </Link>
      </div>
      <div className="lg:border-b lg:border-slate-200 lg:p-2"></div>
      <div className="lg:flex lg:gap-x-6 lg:gap-y-2 lg:pt-5 lg:px-5 lg:flex-wrap hidden">
        <FooterLink title="Help" />
        <FooterLink title="Status" />
        <FooterLink title="About" />
        <FooterLink title="Careers" />
        <FooterLink title="Blog" />
        <FooterLink title="Privacy" />
        <FooterLink title="Terms" />
        <FooterLink title="Text to speech" />
        <FooterLink title="Teams" />
      </div>
    </div>
  );
};
function LinkElement({ title }: { title: string }) {
  return (
    <div>
      <p className="text-[14px] font-medium text-black-400 bg-slate-100 px-4 py-2 rounded-full   cursor-pointer lg:text-md">
        <Link
          to="/blogs "
          className="flex justify-center
        "
        >
          {title}
        </Link>
      </p>
    </div>
  );
}

function FooterLink({ title }: { title: string }) {
  return (
    <div>
      <p className="text-sm text-slate-600 font-base text-black-400 cursor-pointer lg:text-md ">
        <Link
          to="/blogs "
          className="flex justify-center
        "
        >
          {title}
        </Link>
      </p>
    </div>
  );
}

export default SideContent;
