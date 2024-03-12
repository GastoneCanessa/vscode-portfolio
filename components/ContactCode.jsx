import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'nitinranganath.me',
  //   href: 'https://nitinranganath.me',
  // },
  {
    social: 'email',
    link: 'gastonecanessa@gmail.com',
    href: 'mailto:nitinranganath@gmail.com',
  },
  {
    social: 'github',
    link: 'GastoneCanessa',
    href: 'https://github.com/GastoneCanessa',
  },
  {
    social: 'linkedin',
    link: 'gastone-canessa',
    href: 'https://www.linkedin.com/in/gastone-canessa/',
  },
  {
    social: 'X',
    link: 'CanessaGastone',
    href: 'https://www.twitter.com/CanessaGastone',
  },
  {
    social: 'instagram',
    link: 'gastonecanessa',
    href: 'https://www.instagram.com/gastonecanessa',
  },
  {
    social: 'telegram',
    link: 'gastonecanessa',
    href: 'https://t.me/gastonecanessa',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
