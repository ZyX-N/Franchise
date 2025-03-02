import { ChangeEvent, useState } from "react";

interface DropdowProp {
  id?: string;
  placeholder?: string;
  value: string;
  setValue: (val: string) => void;
  classes?: string;
  option: Array<any>;
}

export default function Dropdown({
  id,
  placeholder,
  value,
  setValue,
  classes,
  option,
}: DropdowProp) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const focusHandler = () => {
    setDropdownOpen(true);
  };

  const blurHandler = () => {
    setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder || ""}
        value={value}
        onChange={() => setValue(value)}
        className={`${classes} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#bf9877] focus:border-[#bf9877] outline-none block w-full p-2.5 cursor-pointer`}
        id={id}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {dropdownOpen && (
        <ul className="absolute top-full left-0 flex flex-col w-full rounded-md bg-white border shadow-lg">
          {option.map((item, idx) => (
            <li
              key={item.value}
              className={`cursor-pointer h-10 flex items-center px-4 hover:bg-[rgba(0,0,0,0.1)] ${
                idx !== 0 && idx !== option.length - 1 ? "border-y" : ""
              }`}
              onClick={() => {
                setValue(item.value);
                setTimeout(() => {
                  setDropdownOpen(false);
                }, 200);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
