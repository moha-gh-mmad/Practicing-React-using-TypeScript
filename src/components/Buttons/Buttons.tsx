import styles from "./Buttons.module.css";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "srecondary" | "danger";
}

const Buttons = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <button
        className={[styles.myButton, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Buttons;
