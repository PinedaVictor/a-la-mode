import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Trails } from "../../springs/Trails";
import { Input, TextArea } from "../atoms";
import { Comment } from "../../elements/clients/Comment";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { validateContactForm, FormData } from "../../utils/validateContactForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

export const ContactForm: React.FC = () => {
  const [errMsg, setErrMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [userName, setUsername] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const sendButtonRef = useRef<HTMLButtonElement>(null);
  const app = getApp();
  const db = getFirestore(app);

  // Reads fields via form.elements instead of form[name] - "name" collides
  // with HTMLFormElement's own reserved `name` property, so form.name would
  // silently return the form's own (empty) name attribute instead of the
  // input's value.
  const readFormValues = (form: HTMLFormElement): FormData => {
    const field = (fieldName: string) =>
      (
        form.elements.namedItem(fieldName) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | null
      )?.value ?? "";
    return {
      name: field("name"),
      email: field("email"),
      phoneNumber: field("phoneNumber"),
      msg: field("msg")
    };
  };

  // Toggles the button's disabled state directly on the DOM node instead of
  // through React state - this runs on every keystroke, and driving it via
  // setState forced the whole form (and its Trails animations) to re-render
  // on every character typed, causing severe input lag.
  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const data = readFormValues(e.currentTarget);
    if (sendButtonRef.current) {
      sendButtonRef.current.disabled = !validateContactForm(data).valid;
    }
  };

  const handleErrMsg = (msg: string) => {
    setErrMsg(msg);
    setTimeout(() => {
      setErrMsg("");
    }, 3500);
  };

  const hanldeSuccess = () => {
    setFormSuccess(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormSuccess(false);
    }, 3500);
  };

  const sendData = async (data: FormData) => {};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = readFormValues(e.currentTarget);
    const validInputs = validateContactForm(data);
    if (!validInputs.valid) {
      handleErrMsg(validInputs.error);
      return;
    }
    setUsername(data.name);
    setUserMessage(data.msg);
    setFormSubmitted(true);
    try {
      // Keep a record in Firestore in addition to the notification email.
      await addDoc(collection(db, "emails"), data);
    } catch (error) {
      console.log("Error writing to firstore:", error);
    }
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phoneNumber,
          message: data.msg
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      // Primary conversion: only counted once EmailJS confirms the send.
      logEvent(getAnalytics(getApp()), "generate_lead", {
        form_location: window.location.pathname
      });
    } catch (error) {
      console.log("Error sending email via EmailJS:", error);
    }
    setTimeout(() => {
      hanldeSuccess();
    }, 3000);
  };

  return (
    <>
      <div className="overflow-hidden">
        <Comment comment="hi" />
      </div>
      {!formSubmitted && (
        <div className="relative mb-8">
          <div className="bg-iGrey text-offBlack rounded-2xl">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              className="px-4 pt-3 pb-2"
            >
              <Input
                label="name*"
                placeholder="Jane Smith"
                id="name"
                name="name"
              />
              <Input
                label="email*"
                placeholder="JaneSmith@gmail.com"
                id="email"
                name="email"
              />
              <Input
                label="phone number (optional)"
                placeholder="(661)-099-9090"
                id="phoneNumber"
                name="phoneNumber"
              />
              <TextArea
                label="message"
                placeHolder="message"
                id="msg"
                name="msg"
              />
              <p className=" text-red px-3">{errMsg}</p>
            </form>
          </div>
          <div
            className="absolute left-4 bottom-0 translate-y-full w-0 h-0"
            style={{
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "12px solid #E5E5EA"
            }}
          />
        </div>
      )}
      {!formSubmitted && (
        <div className="flex justify-end pr-3">
          <button
            ref={sendButtonRef}
            form="contact-form"
            type="submit"
            disabled
            className="inline-flex items-center gap-x-1.5 rounded-md bg-iGrey px-3 py-2 text-sm font-semibold text-white shadow-sm hover:enabled:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iBlue"
          >
            Send
            <ArrowUpCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
      {formSubmitted && (
        <div className="relative max-w-[240px] float-left clear-both mb-8">
          <p className="text-xs text-offBlack/60 text-left pl-2 pb-1">
            {userName}
          </p>
          <div className="bg-iGrey text-offBlack rounded-2xl w-fit max-w-full mr-auto">
            <div className="pl-4 pt-2 pr-3 pb-2 break-words">
              <p>{userMessage}</p>
            </div>
          </div>
          <div
            className="absolute left-4 bottom-0 translate-y-full w-0 h-0"
            style={{
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "12px solid #E5E5EA"
            }}
          />
        </div>
      )}
      {formSubmitted && !formSuccess && (
        <div className="flex justify-end clear-both pr-3 mb-8">
          <div className="bg-iGrey rounded-2xl px-4 py-3 flex items-center gap-1">
            <span
              className="h-2 w-2 rounded-full bg-offBlack/50 animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="h-2 w-2 rounded-full bg-offBlack/50 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="h-2 w-2 rounded-full bg-offBlack/50 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      )}
      {formSuccess && (
        <>
          <Trails>
            <div>
              <Comment
                comment={`Hi ${userName}, we'll be in touch soon! Looking forward to it!`}
              />
            </div>
          </Trails>
        </>
      )}
    </>
  );
};
