import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Bishal',
  lastName: 'Kumar',
  initials: 'BK', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇮🇳',
      text: 'based in the Guwahati, India',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer at Attosol Technologies',
    },
    {
      emoji: '📧',
      text: 'bishalkumar.war@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://drive.google.com/file/d/1om5vP6cckYiihzIUpTRhVOJ1dTc0jrke/view?usp=sharing', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-id-card',
      label: 'resume',
    },
    {
      link: 'https://www.instagram.com/bishalkumar.war/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/blast0',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/bishal-kumar-832398158/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Hello! I'm Bishal kumar. I'm a Full Stack Developer. I enjoy building web applications and learning new technologies. I'm currently working at Attosol Technologies as a Full Stack Developer. I'm also a freelance Artist. I love to travel and explore new places. I'm currently based in Guwahati, India.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['TypeScript', 'JavaScript', 'REACT', 'Python', 'HTML/CSS/SASS/SCSS/LESS'],
    frameworks: [
      'React',
      'Redux',
      'Material UI',
      'Angular',
      'Nodejs',
      'Express',
      'Spring Boot',
      'Bootstrap/jQuery',
    ],
    databases: ['MySQl', 'MongoDB', 'PostgreSQL', 'TypeORM'],
    cloudServices: ['AWS EC2', 'Heroku', 'Netlify'],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'Swagger',
      'npm',
      'yarn',
      'Jest',
      'Jira',
    ],
  },
  hobbies: [
    {
      label: 'Photography',
      emoji: '📷',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Guitar',
      emoji: '🎸',
    },
    {
      label: 'Anime',
      emoji: '🎞',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
    {
      label: 'Fishing',
      emoji: '🎣',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'CryptoGoGo - Online Cryptocurrency Community and Trading platform',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/Andy8647/CryptoGoGo', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.ibb.co/6BsWs6f/01.jpg',
    },
    {
      title: 'Dynrank.js - High-performance dynamic bar chart visualization library',
      live: null,
      source: 'https://github.com/Andy8647/dynrank',
      image: 'https://i.ibb.co/HFkMKtH/02.jpg',
    },
  ],
};
