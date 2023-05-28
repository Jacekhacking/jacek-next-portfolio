import NextJsImage from '../components/NextJsImage';

const ProjectsPage = () => {
  return (
    <div className="projects-page-wrapper">
      <h2 className="outline-styled-header">PROJECTS</h2>
      {projectData.map(({ link, name, description, gitHub, image }) => (
        <div className="project-container">
          <div>
            <h3>{name}</h3>
            <div>{description}</div>
            <div className="flex center">
              <a href={gitHub}>Github</a>
              <a href={link}>Live</a>
            </div>
          </div>

          <NextJsImage
            height={'250px'}
            width={'400px'}
            imagePath={image}
            alt={'test'}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;

export const projectData = [
  {
    name: 'Middle Ground ',
    description:
      'Website for local massage therapist business Middle Ground Treatment & Training. ReactJS CSS and hosted with AWS Amplify',
    image: '/middle-ground-tt.png',
    link: 'https://middle-ground-production.up.railway.app/',
    gitHub: 'https://github.com/Jacekhacking/Middle-Ground',
  },
  {
    name: 'LCBodywork',
    description:
      'Professional Website for LC Bodyworks. A local massage therapist looking for a professional website.',
    image: '/lcbodywork.png',

    link: 'https://www.lcbodywork.com',
    gitHub: 'https://github.com/jacekhacking/lc-bodywork',
  },
  {
    name: 'YouTube Clone',
    description:
      'YouTube Clone built alongside JavascriptMastery youtube video. Built with ReactJS, ReactRouter, MUI, RapidAPI',
    image: '/youtube-clone.png',
    link: 'https://glittering-scone-de1925.netlify.app',
    gitHub: 'https://github.com/jacekhacking/jsm_youtube_clone',
  },
  {
    name: 'OneWaveGolf',
    description:
      'Website for OneWaveGolf. A company based out of Bandon Oregon specializing in recyclable golf goods, professional caddying, and lessons.',
    image: '/onewavegolf.png',
    link: 'https://www.onewavegolf.com',
    gitHub: 'https://github.com/jacekhacking/OneWaveGolf',
  },
];
