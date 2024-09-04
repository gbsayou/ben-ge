import {AiOutlineClose} from 'react-icons/ai';
import styles from './styles.module.scss';
import skills from './skills';

interface SkillSetProps {
  onClose: () => void;
}

const SkillSet = ({onClose}: SkillSetProps) => {
  return (
    <div className={styles['skill-set']}>
      <div className={styles.header}>
        <AiOutlineClose onClick={onClose} color="black" />
      </div>
      <div className={styles.content}>
        {skills.map((section) => (
          <div className={styles.section} key={section.section}>
            <h3>{section.section}</h3>
            {section.skills.map((skill) => (
              <img
                src={skill.icon}
                alt={skill.name}
                key={skill.name}
                title={skill.name}
                width="68"
                height="68"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
