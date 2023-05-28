type InputProps = {
  label: string;
  placeholder: string;
  id: string;
  name: string;
};

export const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 w-full">
        <label htmlFor={props.label} className="block text-gray-900">
          {props.label}
        </label>
        <input
          type="text"
          name={props.name}
          id={props.id}
          className="block w-full bg-offWhite border-b-2 border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:leading-6"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};
