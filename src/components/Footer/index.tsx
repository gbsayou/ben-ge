import {FaExternalLinkAlt} from 'react-icons/fa';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Built with
        <a href="https://nextjs.org" target="_blank">
          Next.js <FaExternalLinkAlt />
        </a>
        and
        <a href="https://vercel.com" target="_blank">
          Vercel <FaExternalLinkAlt />
        </a>
      </p>
    </div>
  );
};
export default Footer;
