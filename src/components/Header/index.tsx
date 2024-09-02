import {AiOutlineMenu} from 'react-icons/ai';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.content}>
        <div className={styles.left}>
          <h1>Ben Ge</h1>
          <span>My Resume</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
