const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>Hello, I'm Gastone Canessa, a Junior Java Developer with a passion for technology and a particular fondness for JavaScript and Python. My approach to tech is driven by experimentation and a desire to understand the intricacies of each new tool I encounter.

        My journey has been marked by a continuous exploration of various technologies, where I've enjoyed experimenting with:

        Setting up databases and experimenting with MySQL.
        Playing with API creation using Spring and React, seeing firsthand how these technologies connect to form full applications.
        Exploring web development possibilities through Django and tinkering with Node.js alongside Express to get a taste of server-side programming.
        I'm also captivated by the world of aviation, modeling, drones, and the broader maker culture. I'm at my happiest when I'm experimenting with these hobbies, which fuel my creative thinking and problem-solving skills.</p>
    </>
  );
};
//S

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
