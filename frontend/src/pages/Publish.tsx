import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import Spinner from "../Loaders/Spinner";

const Publish = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const Navigate = useNavigate();
  async function handleRequest() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      );
      Navigate(`/blog/${response.data.id}`);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      <Appbar usedfor="" />
      <div className="   pt-[3rem] w-full px-5  xl:px-[16rem]">
        <div className="flex flex-col gap-y-10">
          <div className="relative w-full min-w-[200px] flex gap-x-4 items-center">
            <textarea
              onChange={(e) => setTitle(e.target.value)}
              className="peer   w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans    text-blue-gray-700 outline outline-0 transition-all text-4xl font-medium  placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 placeholder:font-normal"
              placeholder="Tell your story..."
            ></textarea>
          </div>
          <div className="relative w-full min-w-[200px] flex gap-x-4 items-center">
            <textarea
              onChange={(e) => setContent(e.target.value)}
              className="peer h-[10rem]  w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans    text-blue-gray-700 outline outline-0 transition-all text-2xl text-slate-700 font-normal  placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 placeholder:font-normal"
              placeholder="Description"
            ></textarea>
          </div>
        </div>

        <Button isLoading={loading} onClick={handleRequest} />
      </div>
    </div>
  );
};

function Button({
  onClick,
  isLoading,
}: {
  onClick: () => void;
  isLoading: boolean;
}) {
  return (
    <div className=" mt-[2rem] flex items-center gap-x-5">
      {isLoading && <Spinner />}
      <button
        {...(isLoading && { disabled: true })}
        onClick={onClick}
        className="bg-gr w-[10rem]  text-white px-9 py-2 rounded-lg  "
      >
        Publish
      </button>
    </div>
  );
}
export default Publish;
