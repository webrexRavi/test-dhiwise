import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  OutlineWhiteA700: "bg-black_900_4c border border-solid border-white_A700",
  OutlineGray303: "bg-white_A700 border border-gray_303 border-solid",
  srcOutlineGray50: "bg-gray_51 border border-gray_50 border-solid",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  srcRoundedBorder8: "rounded-radius8",
};
const sizes = {
  sm: "p-[11px] sm:p-[5px] md:p-[7px]",
  md: "px-[13px] sm:px-[6px] md:px-[8px] py-[14px] sm:py-[7px] md:py-[9px]",
  smSrc: "p-[13px] sm:p-[6px] md:p-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4", "srcRoundedBorder8"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "OutlineWhiteA700",
    "OutlineGray303",
    "srcOutlineGray50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineBluegray100",
  size: "md",
};

export { Input };
