// import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useStore } from "../stores";

function Header() {
  const { temperatureUnit, setTemperatureUnit, aqiType, setAqiType } =
    useStore();

  console.log("temperatureUnit:", temperatureUnit);

  return (
    <div className="w-full bg-slate-50 h-16 flex justify-between items-center px-4 fixed top-0 left-0">
      <div className="flex justify-start h-10 p-2">
        {/* logo */}
        <svg
          width="w-auto"
          height="h-auto"
          viewBox="0 0 1096 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2_27)">
            <path
              d="M160.078 528.707C160.078 539.124 157.962 548.889 153.73 558.004C149.824 567.118 144.453 575.094 137.617 581.93C130.781 588.766 122.806 594.137 113.691 598.043C104.577 601.949 94.974 603.902 84.8828 603.902C74.4661 603.902 64.7005 601.949 55.5859 598.043C46.7969 594.137 38.9844 588.766 32.1484 581.93C25.3125 575.094 19.9414 567.118 16.0352 558.004C12.1289 548.889 10.1758 539.124 10.1758 528.707C10.1758 518.616 12.1289 509.013 16.0352 499.898C19.9414 490.784 25.3125 482.809 32.1484 475.973C38.9844 469.137 46.7969 463.766 55.5859 459.859C64.7005 455.953 74.4661 454 84.8828 454C94.974 454 104.577 455.953 113.691 459.859C122.806 463.766 130.781 469.137 137.617 475.973C144.453 482.809 149.824 490.784 153.73 499.898C157.962 509.013 160.078 518.616 160.078 528.707Z"
              fill="url(#paint0_linear_2_27)"
            />
            <path
              d="M1041.09 285.098C1041.09 322.858 1033.93 358.503 1019.61 392.031C1005.28 425.234 985.751 454.368 961.012 479.434C936.272 504.173 907.301 523.867 874.098 538.516C840.895 552.838 805.413 560 767.652 560C662.965 617.234 602.535 620.365 490.797 560C453.036 560 417.555 552.838 384.352 538.516C351.148 523.867 322.177 504.173 297.438 479.434C273.023 454.368 253.655 425.234 239.332 392.031C225.009 358.503 217.848 322.858 217.848 285.098C217.848 285.098 116.971 46.9266 217.848 10.1953C254.579 -3.17935 281.214 -3.17935 317.945 10.1953C418.822 46.9266 317.945 285.098 317.945 285.098C317.945 309.186 322.34 331.81 331.129 352.969C340.243 373.802 352.613 392.194 368.238 408.145C383.863 423.77 402.092 436.302 422.926 445.742C444.085 454.857 466.708 459.577 490.797 459.902C490.797 459.902 404.245 45.9096 579.664 10.1953C617.595 2.47274 640.854 2.47274 678.785 10.1953C854.204 45.9096 767.652 459.902 767.652 459.902C791.741 459.577 814.202 454.857 835.035 445.742C856.194 436.302 874.586 423.77 890.211 408.145C905.836 392.194 918.206 373.802 927.32 352.969C936.435 331.81 940.992 309.186 940.992 285.098C940.992 285.098 840.115 46.9266 940.992 10.1953C977.724 -3.17935 1004.36 -3.17935 1041.09 10.1953C1141.97 46.9266 1041.09 285.098 1041.09 285.098Z"
              fill="url(#paint1_linear_2_27)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2_27"
              x="0.175781"
              y="0.164307"
              width="1095.75"
              height="623.943"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.7875 0 0 0 0 0.7875 0 0 0 0 0.7875 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_27"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2_27"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2_27"
              x1="373"
              y1="-136"
              x2="373"
              y2="676.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.173907" stopColor="#E69FFF" />
              <stop offset="0.920095" stopColor="#2DA2F7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_27"
              x1="373"
              y1="-136"
              x2="373"
              y2="676.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.173907" stopColor="#E69FFF" />
              <stop offset="0.920095" stopColor="#2DA2F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="w-full h-full flex justify-end items-center gap-4 pr-1">
        <div className="w-36 sm:w-40 rounded-md">
          <RadioGroup value={aqiType} onChange={setAqiType}>
            <div className="w-fulll flex justify-center items-center">
              <RadioGroup.Option
                value="us"
                className={({ checked }) =>
                  `
                  ${
                    checked
                      ? "bg-white"
                      : "bg-slate-200 text-white shadow-inner"
                  }
                    relative flex cursor-pointer rounded-l-md shadow-sm focus:outline-none w-full h-full justify-center items-center sm:py-1`
                }
              >
                <p className="ordinal text-slate-600 font-normal text-sm sm:text-base">
                  US AQI
                </p>
              </RadioGroup.Option>
              <RadioGroup.Option
                value="cn"
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
                <p className="ordinal text-slate-600 font-normal text-sm sm:text-base">
                  CN AQI
                </p>
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </div>
        <div className="w-20 sm:w-24 rounded-md">
          <RadioGroup value={temperatureUnit} onChange={setTemperatureUnit}>
            <div className="w-fulll flex justify-center items-center">
              <RadioGroup.Option
                value="fahrenheit"
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
                <p className="ordinal text-slate-600 font-normal text-sm sm:text-base">
                  oF
                </p>
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
                <p className="ordinal text-slate-600 font-normal text-sm sm:text-base">
                  oC
                </p>
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default Header;
