import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Gastone Canessa è un appassionato sviluppatore full stack che crea siti web e applicazioni che ti piacerebbe utilizzare"
      />
      <meta
        name="keywords"
        content="gastone canessa, gastone, canessa, portfolio sviluppatore web, portfolio gastone, sviluppatore gastone, stack MERN, portfolio gastone canessa, vscode-portfolio"
      />
      <meta property="og:title" content="Il Portfolio di Gastone Canessa" />
      <meta
        property="og:description"
        content="Uno sviluppatore full-stack che realizza siti web che ti piacerebbe usare."
      />
      <meta property="og:image" content="/Screenshot.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Gastone Canessa',
};
