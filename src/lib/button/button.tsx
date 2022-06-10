import { h } from "preact";
import classes from "./button.module.css";

export type ButtonProps = h.JSX.HTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => (
  <div class={classes.div}>
    <button {...props} />
  </div>
);
