import { Trails } from "../../springs/Trails";
import { Input, TextArea } from "../atoms";
import { Comment } from "../../elements/clients/Comment";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Target, validateContactForm } from "../../utils/validateContactForm";
import { useState } from "react";

export const ContactForm: React.FC = () => {
  const [errMsg, setErrMsg] = useState("");

  const handleErrMsg = (msg: string) => {
    setErrMsg(msg);
    setTimeout(() => {
      setErrMsg("");
    }, 3500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as Target;
    const data = {
      name: target.name.value,
      email: target.email.value,
      phoneNumber: target.phoneNumber.value,
      msg: target.msg.value,
    };
    const validInputs = validateContactForm(data);
    if (!validInputs.valid) {
      handleErrMsg(validInputs.error);
    }
    console.log("Valid form:", validInputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Trails>
          <div className=" bg-yellow">
            <Comment comment="Happy to collaborate!" />
          </div>
          <Input label="Name*" placeholder="Jane Smith" id="name" name="name" />
          <Input
            label="Email*"
            placeholder="JaneSmith@gmail.com"
            id="email"
            name="email"
          />
          <Input
            label="Phone Number (optional)"
            placeholder="(661)-099-9090"
            id="phoneNumber"
            name="phoneNumber"
          />
          <TextArea
            label="Let's chat"
            placeHolder="Hi, I have an app idea I need to come to life!"
            id="msg"
            name="msg"
          />
          <div className=" mt-24 flex justify-end pr-3">
            <button
              onClick={() => handleSubmit}
              type="submit"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-iGrey px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iBlue"
            >
              Send
              <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Trails>
        <p className=" text-red px-3">{errMsg}</p>
      </form>
    </>
  );
};
