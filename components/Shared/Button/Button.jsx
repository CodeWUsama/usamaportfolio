import styles from './Button.module.scss';

const Button = ({ children, className }) => <button className={className ?? styles.button}>{children}</button>;

export default Button;
