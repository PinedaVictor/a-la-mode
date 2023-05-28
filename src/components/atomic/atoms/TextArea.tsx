export const TextArea: React.FC = () => {
  return (
    <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5">
      <label htmlFor="comment" className="block leading-6 text-gray-900">
        Let's chat!
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full bg-offWhite rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-iGrey placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
    </div>
  );
};
