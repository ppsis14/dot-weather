import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function Header() {
  const [tempUnit, setTempUnit] = useState("fahrenheit");

  return (
    <div className="w-full bg-slate-50 h-16 flex justify-between items-center px-4">
      <div className="w-full flex justify-start">logo</div>
      <div className="w-full flex justify-end items-center gap-2">
        <div className="w-20 sm:w-24 rounded-md">
          <RadioGroup value={tempUnit} onChange={setTempUnit}>
            <div className="w-fulll flex justify-center items-center">
              <RadioGroup.Option
                value="fahenheit"
                className={({ checked }) =>
                  `
                  ${
                    checked
                      ? "bg-white"
                      : "bg-slate-200 text-white shadow-inner"
                  }
                    relative flex cursor-pointer rounded-l-md shadow-sm focus:outline-none w-full justify-center items-center sm:py-1`
                }
              >
                <p className="ordinal text-slate-600 font-normal">oF</p>
              </RadioGroup.Option>
              <RadioGroup.Option
                value="celsius"
                className={({ checked }) =>
                  `
                  ${
                    checked
                      ? "bg-white"
                      : "bg-slate-200 text-white shadow-inner"
                  }
                    relative flex cursor-pointer rounded-r-md shadow-sm focus:outline-none w-full justify-center items-center sm:py-1`
                }
              >
                <p className="ordinal text-slate-600 font-normal">oC</p>
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default Header;
