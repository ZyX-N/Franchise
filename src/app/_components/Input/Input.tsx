import { ChangeEvent } from "react";

interface InputProp {
  type: string;
  id?: string;
  placeholder?: string;
  value: string;
  setValue: (val: string) => void;
  classes?: string;
}

export default function Input({
  type = "text",
  id,
  placeholder,
  value,
  setValue,
  classes,
}: InputProp) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder || ""}
        value={value}
        onChange={onChangeHandler}
        className={`${classes} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#bf9877] focus:border-[#bf9877] outline-none block w-full p-2.5`}
        id={id}
      />
    </div>
  );
}
