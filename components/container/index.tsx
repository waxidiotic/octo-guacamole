import styles from './style.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps): JSX.Element {
  return <div className={styles.container}>{children}</div>;
}
