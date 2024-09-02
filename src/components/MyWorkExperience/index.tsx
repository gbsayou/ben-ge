import {useState, useEffect} from 'react';
import Image, {StaticImageData} from 'next/image';
import Header from '@/components/Header';
import cn from 'classnames';
import styles from './styles.module.scss';
import hero from '@/assets/images/hero.png';
import scrollInto from '@/utils/scrollInto';

interface MobileWorkExperienceSectionProps {
  image: StaticImageData;
  title: string;
  desc: string;
}

const MobileWorkExperience = ({
  image,
  title,
  desc,
}: MobileWorkExperienceSectionProps) => {
  return (
    <div className={styles['mobile-image-section']}>
      <Image src={image} alt="111" className={styles['mobile-image']} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const MyWorkExperience = () => {
  const [visibleSection, setVisibleSection] = useState(0);

  const yOffset = -67; // header height

  useEffect(() => {
    const getPosition = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        return {
          yPos:
            element.getBoundingClientRect().top -
            document.body.getBoundingClientRect().top,
          height: element.clientHeight,
        };
      }
      return {
        yPos: 0,
        height: 0,
      };
    };
    const handleScroll = () => {
      if (window.innerWidth >= 801) {
        const sectionRefs = [
          {
            section: 1,
            pos: getPosition('desktop-img-1'),
          },
          {
            section: 2,
            pos: getPosition('desktop-img-2'),
          },
          {
            section: 3,
            pos: getPosition('desktop-img-3'),
          },
        ];

        const scrollPosition = window.scrollY + yOffset;
        if (
          scrollPosition >= 0 &&
          scrollPosition <
            sectionRefs[0].pos.yPos + sectionRefs[0].pos.height / 4
        ) {
          setVisibleSection(1);
        } else if (
          scrollPosition >=
            sectionRefs[0].pos.yPos + sectionRefs[0].pos.height / 4 &&
          scrollPosition <
            sectionRefs[1].pos.yPos + sectionRefs[1].pos.height / 4
        ) {
          setVisibleSection(2);
        } else if (
          scrollPosition >=
          sectionRefs[1].pos.yPos + sectionRefs[1].pos.height / 4
        ) {
          setVisibleSection(3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection, yOffset]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h2>My Work Experience</h2>
        <div className={styles['mobile-sections']}>
          <MobileWorkExperience
            image={hero}
            title="tkww"
            desc="full stack developer"
          />
          <MobileWorkExperience
            image={hero}
            title="tkww"
            desc="full stack developer"
          />
          <MobileWorkExperience
            image={hero}
            title="tkww"
            desc="full stack developer"
          />
        </div>
        <div className={styles['desktop-sections']}>
          <div className={styles.texts}>
            <div
              className={cn(styles.section, {
                [styles.active]: visibleSection == 1,
              })}
              onClick={() => {
                scrollInto('desktop-img-1');
              }}>
              <h3>tkww</h3>
              <p>full stack developer</p>
            </div>
            <div
              className={cn(styles.section, {
                [styles.active]: visibleSection == 2,
              })}
              onClick={() => {
                scrollInto('desktop-img-2');
              }}>
              <h3>tkww</h3>
              <p>full stack developer</p>
            </div>
            <div
              className={cn(styles.section, {
                [styles.active]: visibleSection == 3,
              })}
              onClick={() => {
                scrollInto('desktop-img-3');
              }}>
              <h3>tkww</h3>
              <p>full stack developer</p>
            </div>
          </div>
          <div className={styles.images}>
            <Image
              src={hero}
              alt="hero"
              className={styles.image}
              id="desktop-img-1"
            />
            <Image
              src={hero}
              alt="hero"
              className={styles.image}
              id="desktop-img-2"
            />
            <Image
              src={hero}
              alt="hero"
              className={styles.image}
              id="desktop-img-3"
            />
          </div>
        </div>

        <div className={styles.footer}>
          <h1>Give me a job, please</h1>
          <a href="https://www.linkedin.com/in/tkww/">linkedin</a>
        </div>
      </div>
    </div>
  );
};

export default MyWorkExperience;
