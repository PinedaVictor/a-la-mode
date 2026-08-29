import { useState } from "react";
import { MIN_MESSAGE_LENGTH } from "../../utils/validateContactForm";

type TextAreaProps = {
  label: string;
  name: string;
  id: string;
  placeHolder: string;
};
export const TextArea: React.FC<TextAreaProps> = (props) => {
  // Local state so the counter only re-renders this component, not the
  // whole form, on every keystroke.
  const [length, setLength] = useState(0);
  const remaining = Math.max(MIN_MESSAGE_LENGTH - length, 0);

  return (
    <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5">
      <div className="flex items-center justify-between">
        <label htmlFor="comment" className="block leading-6 text-gray-900">
          {props.label}
        </label>
        <p className="text-xs text-gray-500">
          {remaining > 0
            ? `${remaining} more character${remaining === 1 ? "" : "s"} needed`
            : `${length} characters`}
        </p>
      </div>
      <div className="mt-2">
        <textarea
          rows={4}
          name={props.name}
          id={props.id}
          placeholder={props.placeHolder}
          onChange={(e) => setLength(e.target.value.length)}
          className="block w-full bg-iGrey rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-iGrey placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
