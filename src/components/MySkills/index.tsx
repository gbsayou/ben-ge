import Header from '@/components/Header';
import Image from 'next/image';
import avatar from '@/assets/images/avatar.png';
import styles from './styles.module.scss';

const MySkills = () => {
  return (
    <div className={styles.container} id="skill-mid-section">
      <Header />
      <div className={styles.content}>
        <div className={styles['hero-image']}>
          <Image
            src={avatar}
            alt="Picture of the author"
            className={styles.image}
          />
        </div>
        <div className={styles['hero-text']}>
          <h1>Ben Ge</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nunc
            nec nisl tincidunt tincidunt. Sed eu nunc nec nisl tincidunt
            tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
