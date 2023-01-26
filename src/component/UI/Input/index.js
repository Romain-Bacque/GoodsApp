import { forwardRef, Fragment } from "react";

const Input = forwardRef((props, ref) => {

  return (
    <Fragment>
      <div>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input
          style={{
            width: "50px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            padding: ".2rem",
          }}
          ref={ref}
          {...props.input}
        />
      </div>
    </Fragment>
  );
});

export default Input;
