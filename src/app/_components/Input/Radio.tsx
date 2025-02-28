import { ChangeEvent } from "react";

interface InputProp {
  id?: string;
  value: string;
  setValue: (val: string) => void;
  classes?: string;
  option: Array<{ label: string; value: string }>;
}

export default function Radio({
  id,
  value,
  setValue,
  classes,
  option,
}: InputProp) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-start sm:items-center justify-end sm:justify-start">
      {option.map((item, idx) => (
        <div
          className="flex flex-row-reverse sm:flex-row items-center justify-start sm:justify-center gap-2"
          key={item.value}
        >
          <label
            htmlFor={`${item.label}${idx}`}
            className="text-sm cursor-pointer text-gray-700"
          >
            {item.label}
          </label>
          <input
            type="radio"
            value={item.value}
            onChange={onChangeHandler}
            className={`${classes} cursor-pointer mt-0.5`}
            id={`${item.label}${idx}`}
            name={id}
          />
        </div>
      ))}
    </div>
  );
}
