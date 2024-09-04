import styles from './styles.module.scss';
import {SlCloudDownload} from 'react-icons/sl';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.content}>
        <div className={styles.left}>
          <h1>Ben Ge</h1>
          <a href="/files/BenGe-FullStackEngineer.pdf" download>
            My Resume
            <SlCloudDownload size={24} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
