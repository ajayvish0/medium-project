import { SignupInput } from "@ajayvish/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Quotes from "../components/Quotes";
import axios from "axios";
import { BACKEND_URL } from "../config";
import Spinner from "../Loaders/Spinner";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });
  const sendRequest = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const jwt = response.data.jwt;
      console.log(jwt);
      const token = "Bearer" + " " + jwt;
      localStorage.setItem("authorization", token);
      Navigate("/blogs");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <div className="lg:grid lg:grid-cols-2 ">
      <div className="h-screen flex justify-center items-center">
        <div className="text-center w-96 ">
          <h1 className="text-4xl font-bold">Join Medium</h1>
          <p className="text-slate-400 pt-2 ">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-gr cursor-pointer hover:text-green-800 font-medium"
            >
              Sign in
            </Link>
          </p>

          <div className="pt-10 w-full text-left ">
            <LabelledInput
              label="Name"
              placeholder="Name"
              onChange={(e) => {
                setPostInputs({ ...postInputs, name: e.target.value });
              }}
              type="text"
            />

            <LabelledInput
              label="Username"
              placeholder="Username"
              onChange={(e) => {
                setPostInputs({ ...postInputs, username: e.target.value });
              }}
              type="email"
            />
            <LabelledInput
              label="Password"
              placeholder="Password"
              onChange={(e) => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
              type="password"
            />
          </div>
          {loading && <Spinner />}
          <Button label="Sign Up" isLoading={loading} onClick={sendRequest} />
        </div>
      </div>

      <Quotes />
    </div>
  );
};

type LabelledInputProps = {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputProps) {
  return (
    <div className="mb-4">
      <h3 className="block mb-2 text-md font-medium ">{label}</h3>
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5   "
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}
function Button({
  label,
  onClick,
  isLoading,
}: {
  label: string;
  onClick: () => void;
  isLoading: boolean;
}) {
  return (
    <button
      {...(isLoading && { disabled: true })}
      type="button"
      onClick={onClick}
      className="text-white bg-gray-800 hover:bg-gray-900 w-full focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4 "
    >
      {label}
    </button>
  );
}

export default Signup;
