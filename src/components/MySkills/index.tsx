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
          <h1>My Skills</h1>
          <p>I have extensive full-stack development experience.</p>
          <p>
            I am proficient in front-end technologies such as HTML, CSS, and
            JavaScript, with a strong command of frameworks like React and
            Next.js.
          </p>
          <p>On the back-end, I am skilled in Node.js and PostgreSQL.</p>
          <p>
            I have significant experience with CI/CD processes, utilizing tools
            like Git, Jenkins, and Docker for continuous integration and
            delivery.
          </p>
          <p>
            Additionally, I have a year of experience as a team lead, guiding
            teams to successfully complete projects.
          </p>
          <p>
            I emphasize code maintainability, scalability, and effective team
            collaboration.
          </p>
          <span className={styles['skill-button']}>see my skill set</span>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
