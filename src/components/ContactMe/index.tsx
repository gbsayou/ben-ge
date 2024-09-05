import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import styles from './styles.module.scss';
const ContactMe = () => {
  return (
    <div className={styles['contact-me']}>
      <h2>Talk with me!</h2>
      <p>
        I&apos;m currently looking out for a remote work opportunity.
        <span>
          <br />
        </span>
        Or if you have cool ideas in mind, let&apos;s get in touch!
      </p>
      <div className={styles['contact-links']}>
        <a href="https://github.com/gbsayou" target="_blank" rel="noreferrer">
          <AiFillGithub />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/ben-ge-9a166319a" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
          Linkedin
        </a>
        <a href="mailto:gbsayou@gmail.com" target="_blank" rel="noreferrer">
          <AiOutlineMail />
          Email
        </a>
      </div>
    </div>
  );
};
export default ContactMe;
