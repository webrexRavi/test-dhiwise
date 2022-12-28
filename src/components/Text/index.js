import React from "react";
const variantClasses = {
  h1: "font-normal sm:text-[32px] md:text-[34px] text-[36px]",
  h2: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  h3: "font-light sm:text-[26px] md:text-[28px] text-[30px]",
  h4: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "sm:text-[18px] md:text-[20px] text-[22px]",
  h6: "text-[20px]",
  body1: "font-semibold text-[18px]",
  body2: "text-[16px]",
  body3: "text-[14px]",
  body4: "text-[13px]",
  body5: "font-normal text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
