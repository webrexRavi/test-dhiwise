import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  icbCircleBorder16: "rounded-radius16",
  icbRoundedBorder8: "rounded-radius8",
};
const variants = {
  FillBluegray50: "bg-bluegray_50 text-gray_901",
  OutlineRedA700:
    "bg-red_A700 border border-red_A700 border-solid text-white_A700",
  FillRedA700: "bg-red_A700 text-white_A700",
  FillBlue50: "bg-blue_50 text-blue_500",
  FillLightgreen100: "bg-light_green_100 text-green_700",
  FillAmber100: "bg-amber_100 text-amber_700",
  FillDeeporange50: "bg-deep_orange_50 text-red_A701",
  OutlineRedA700_1:
    "bg-red_400_19 border border-red_A700 border-solid text-red_A700",
  OutlineBlack90033:
    "border border-black_900_33 border-solid text-bluegray_900_7f",
  icbOutlineGray302: "bg-gray_50 border border-gray_302 border-solid",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[6px]",
  md: "sm:p-[4px] md:p-[6px] p-[9px]",
  lg: "p-[13px] sm:p-[6px] md:p-[8px]",
  smIcn: "sm:p-[4px] md:p-[5px] p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "icbCircleBorder16",
    "icbRoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray50",
    "OutlineRedA700",
    "FillRedA700",
    "FillBlue50",
    "FillLightgreen100",
    "FillAmber100",
    "FillDeeporange50",
    "OutlineRedA700_1",
    "OutlineBlack90033",
    "icbOutlineGray302",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbOutlineGray302",
  size: "md",
};

export { Button };
