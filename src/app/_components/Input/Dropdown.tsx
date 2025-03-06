import { ChevronDownIcon } from "@heroicons/react/24/outline";
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
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const focusHandler = () => {
    setDropdownOpen(true);
  };

  const blurHandler = () => {
    setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.target.value;
    setValue(currentValue);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder || ""}
        value={value}
        onChange={onChangeHandler}
        className={`${classes} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#bf9877] focus:border-[#bf9877] outline-none block w-full p-2.5 cursor-pointer`}
        id={id}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {dropdownOpen && (
        <ul className="absolute top-full left-0 flex flex-col w-full rounded-md bg-white border-2 shadow-lg shadow-gray-300 max-h-[200px] overflow-x-hidden overflow-y-auto z-40">
          {option.map(
            (item, idx) =>
              item?.value
                ?.toLowerCase()
                .includes(value.toLowerCase() || "") && (
                <li
                  key={`${item.value}-${idx}`}
                  // className={`relative cursor-pointer min-h-10 flex items-center px-4 hover:bg-[rgba(0,0,0,0.1)] ${
                  //   idx !== 0 ? "border-t" : ""
                  // } ${item.value === value ? "bg-blue-200" : "bg-white"}`}
                  className={`relative cursor-pointer min-h-10 flex items-center px-4 hover:bg-[rgba(0,0,0,0.1)] ${
                    idx !== 0 ? "border-t" : ""
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
              )
          )}
        </ul>
      )}

      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-5 transition-all duration-300 ease-in-out"
      >
        <ChevronDownIcon
          className={`size-4 text-gray-500 ${
            dropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
}
