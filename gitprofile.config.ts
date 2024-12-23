// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kazi-naimul', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
 /* base: '/gitprofile/',*/
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
      title: '@kazinaimul/rabbitmq (NPM Package)',
      description:
        'RabbitMQ Helper: Simplifying RabbitMQ integration in Node.js. Easily connect, publish messages, and consume with easy retry mechanism.',
      imageUrl: 'https://i.ibb.co/PNSDKzh/screenshot-www-npmjs-com-2023-12-25-12-43-16.png" alt="screenshot-www-npmjs-com-2023-12-25-12-43-16',
      link: 'https://www.npmjs.com/package/@kazinaimul/rabbitmq',
    },
    {
      title: 'IMAAA (Mobile APP)',
      description:
        'In this app the ex cadets of International Maritime Academy can find their information. The main purpose of this app is to find their blood group in emergency case.This app is only for IMA ex cadets.',
      imageUrl: 'https://i.ibb.co/Y2f17N6/screenshot-play-google-com-2023-12-25-12-46-10.png" alt="screenshot-play-google-com-2023-12-25-12-46-10',
      link: 'https://play.google.com/store/apps/details?id=com.imaaa&pcampaignid=web_share',
    },
      ],
    },
  },
  seo: {
    title: 'Kazi Naimul Hoque - Portfolio',
    description: 'Tech and Startup Enthusiast',
    imageURL: 'https://avatars.githubusercontent.com/u/90389165?v=4',
  },
  social: {
    linkedin: 'kazinaimul',
    twitter: 'kazinaimul_',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'kazinaimul',
    dev: 'kazinaimul',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://kazinaimulhoque.com/',
    phone: '',
    email: 'naimul.aoyan107@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1YWDZTHdxltcpCB7rg59fcfM3hrlFQIzgWLQanVQ6QPs', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Typescript',
    'Node.js',
    'React.js',
    'Python',
    'MySQL',
    'PostgreSQL',
    'Mongodb',
    'RabbitMQ',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'RoBenDevs',
      position: 'Software Engineer IV & Pod Leader',
      from: 'April 2024',
      to: 'Present',
      companyLink: 'https://robendevs.com',
    },
    {
      company: 'RoBenDevs',
      position: 'Software Engineer III',
      from: 'September 2023',
      to: 'March 2024',
      companyLink: 'https://robendevs.com',
    },
    {
      company: 'Orangetoolz',
      position: 'Sr. Software Engineer',
      from: 'Jan 2022',
      to: 'August 2023',
      companyLink: 'https://orangetoolz.com',
    },
    {
      company: 'Orangetoolz',
      position: 'Software Engineer',
      from: 'Jan 2019',
      to: 'Dec 2021',
      companyLink: 'https://orangetoolz.com',
    },
    {
      company: 'Orangetoolz',
      position: 'Software Engineer',
      from: 'Dec 2017',
      to: 'Dec 2018',
      companyLink: 'https://orangetoolz.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */

  educations: [
     {
      institution: 'Chittagong University of Engineering & Technology',
      degree: 'BSC in CSE',
      from: '2013',
      to: '2017',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'kazinaimul', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-YF5D91SGTX', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
