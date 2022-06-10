import { h } from "preact";

export type ButtonProps = h.JSX.HTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => <button {...props} />;
