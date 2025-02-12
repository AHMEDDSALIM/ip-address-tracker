import { useRef } from "react";
import arrow from "../assets/icon-arrow.svg";
import classes from "./input.module.css";
function Input(props) {
  const inputIp = useRef();
  return (
    <form className={classes.input_container} onSubmit={() => {
      props.updateIp(inputIp.current.value);
    }}>
      <input
        ref={inputIp}
        type="text"
        name="ip"
        id="ip"
        defaultValue={props.defValue ? props.defValue.ip : ""}
        className={classes.ip_input}
        placeholder="Search for any IP address"
        pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
        title="Please enter a valid IP address"
      />
      <button type="submit">
        <img src={arrow} alt="arrow" />
      </button>
    </form>
  );
}

export default Input;
