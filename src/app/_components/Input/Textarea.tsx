import { ChangeEvent } from "react";

interface InputProp {
  id?: string;
  placeholder?: string;
  value: string;
  setValue: (val: string) => void;
  classes?: string;
  rows?: number;
}

export default function Textarea({
  id,
  placeholder,
  value,
  setValue,
  classes,
  rows = 5,
}: InputProp) {
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <textarea
        placeholder={placeholder || ""}
        value={value}
        rows={rows}
        onChange={onChangeHandler}
        className={`${classes} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#bf9877] focus:border-[#bf9877] outline-none block w-full p-2.5 resize-none`}
        id={id}
      ></textarea>
    </div>
  );
}
