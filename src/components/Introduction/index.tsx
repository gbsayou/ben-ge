import Header from '@/components/Header';
import styles from './styles.module.scss';

const SubHeader = () => {
  return (
    <div className={styles.container} id="top-content">
      <Header />
      <div className={styles.content}>
        <h3 className={styles.name}>
          Hi there, this is Ben Ge{' '}
          <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="40"></img>
        </h3>
        <h3 className={styles.tip}>I&apos;m a</h3>
        <h2 className={styles.title}>Full Stack Engineer</h2>
        <p className={styles.description}>with over 7 years of experience in web development.</p>
        <p className={styles.expectation}>
          I am currently looking for a remote position as a Full Stack Engineer, Node.js Developer,
          or Front-End Developer. I am eager to join a dynamic and collaborative team where I can
          contribute to innovative projects.
        </p>
      </div>
    </div>
  );
};

export default SubHeader;
