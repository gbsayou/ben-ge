import {useState, useEffect} from 'react';
import Image, {StaticImageData} from 'next/image';
import Header from '@/components/Header';
import cn from 'classnames';
import styles from './styles.module.scss';
import scrollInto from '@/utils/scrollInto';
import data from './data';

interface MobileWorkExperienceSectionProps {
  image: StaticImageData;
  title: string;
  company?: string;
  desc: string;
}

interface DesktopWorkExperienceSectionProps {
  title: string;
  company?: string;
  desc: string;
  visibleSection: number;
  id: number;
}

const MobileWorkExperience = ({image, title, company, desc}: MobileWorkExperienceSectionProps) => {
  return (
    <div className={styles['mobile-image-section']}>
      <h3>{title}</h3>
      {company && <span> @ {company}</span>}
      <p dangerouslySetInnerHTML={{__html: desc}} />
      <Image src={image} alt="111" className={styles['mobile-image']} />
    </div>
  );
};

const DesktopWorkExperienceSection = ({
  title,
  company,
  desc,
  visibleSection,
  id,
}: DesktopWorkExperienceSectionProps) => {
  return (
    <div
      className={cn(styles.section, {[styles.active]: visibleSection == id})}
      onClick={() => {
        scrollInto(`desktop-img-${id}`);
      }}>
      <h3>{title}</h3>
      {company && <span> @ {company}</span>}
      <p dangerouslySetInnerHTML={{__html: desc}} />
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
          yPos: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
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
            pos: getPosition('desktop-img-0'),
          },
          {
            section: 2,
            pos: getPosition('desktop-img-1'),
          },
          {
            section: 3,
            pos: getPosition('desktop-img-2'),
          },
        ];

        const scrollPosition = window.scrollY + yOffset;
        if (
          scrollPosition >= 0 &&
          scrollPosition < sectionRefs[0].pos.yPos + sectionRefs[0].pos.height / 4
        ) {
          setVisibleSection(0);
        } else if (
          scrollPosition >= sectionRefs[0].pos.yPos + sectionRefs[0].pos.height / 4 &&
          scrollPosition < sectionRefs[1].pos.yPos + sectionRefs[1].pos.height / 4
        ) {
          setVisibleSection(1);
        } else if (scrollPosition >= sectionRefs[1].pos.yPos + sectionRefs[1].pos.height / 4) {
          setVisibleSection(2);
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
          {data.map((section) => (
            <MobileWorkExperience
              key={section.title}
              title={section.title}
              company={section.company}
              desc={section.description}
              image={section.image}
            />
          ))}
        </div>
        <div className={styles['desktop-sections']}>
          <div className={styles.texts}>
            {data.map((section, index) => (
              <DesktopWorkExperienceSection
                key={section.title}
                title={section.title}
                company={section.company}
                desc={section.description}
                id={index}
                visibleSection={visibleSection}
              />
            ))}
          </div>
          <div className={styles.images}>
            {data.map((section, index) => (
              <Image
                key={section.title}
                src={section.image}
                alt="hero"
                className={styles.image}
                id={`desktop-img-${index}`}
              />
            ))}
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
