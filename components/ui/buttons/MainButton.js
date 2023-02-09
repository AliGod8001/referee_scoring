/* Styles imoprts */
import styles from "./MainButton.module.scss";

const MainButton = (props) => {
  const classes = `${styles.button} ${props.className}`
  if (props.onClick) {
    const buttonClickHandler = (event) => {
      props.onClick(event);
    };


    return (
      <button onClick={buttonClickHandler} className={classes} {...props.items}>
        {props.children}
      </button>
    );
  }

  return <button className={classes} {...props.items}>{props.children}</button>;
};

export default MainButton;
