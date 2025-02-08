import { useRef } from "react";
import arrow from "../assets/icon-arrow.svg";
import classes from "./input.module.css";
function Input(props) {
  const inputIp = useRef();
  return (
    <div className={classes.input_container}>
      <input
        ref={inputIp}
        type="text"
        name="ip"
        id="ip"
        defaultValue={props.defValue}
        className={classes.ip_input}
        placeholder="Search for any IP address or domain"
      />
      <button
        onClick={() => {
          props.updateIp(inputIp.current.value);
        }}
      >
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default Input;
