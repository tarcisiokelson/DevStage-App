import styles from './Header.module.css';
import devstageLogo from '../assets/logo-original-light.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={devstageLogo} alt="Logo DevStage" />
    </header>
  );
}
