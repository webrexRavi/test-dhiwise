import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const sizes = {
  sm: "pb-[13px] sm:pb-[6px] md:pb-[8px] md:pt-[11px] pt-[16px] sm:pt-[8px] px-[13px] sm:px-[6px] md:px-[8px]",
  md: "sm:pb-[4px] md:pb-[6px] pb-[9px] md:pt-[11px] pt-[17px] sm:pt-[9px] sm:px-[4px] md:px-[6px] px-[9px]",
};

const FloatingInput = React.forwardRef(
  (
    {
      wrapClassName = "",
      className,
      name,
      labelClasses,
      wrapperClasses,
      labelText,
      defaultText,
      focusedClasses,
      errors = [],
      onChange,
      prefix,
      suffix,
      size,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = React.useState(defaultText || "");

    function handleChange(e) {
      setValue(e.target.value);
      onChange?.(e.target.value);
    }

    return (
      <div className={`${wrapClassName}   ${sizes[size] || ""}`}>
        {!!prefix && prefix}
        <div className={`input-container group ${wrapperClasses}`}>
          <input
            ref={ref}
            name={name}
            onChange={handleChange}
            className={`${className}`}
            placeholder=" "
            value={value}
            {...rest}
          />
          <label
            className={`transform group-focus-within:translate-y-[4px] group-focus-within:scale-[0.8] ${labelClasses} ${
              value ? "translate-y-[4px] scale-[0.8]" : focusedClasses
            } `}
          >
            {labelText}
          </label>
        </div>
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  }
);

FloatingInput.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  labelClasses: PropTypes.string,
  wrapperClasses: PropTypes.string,
  labelText: PropTypes.string,
  defaultText: PropTypes.string,
  focusedClasses: PropTypes.string,
  onChange: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md"]),
};
FloatingInput.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  labelClasses: "",
  wrapperClasses: "",
  labelText: "",
  defaultText: "",
  focusedClasses: "",
  prefix: null,
  suffix: null,
  size: "md",
};

export { FloatingInput };
