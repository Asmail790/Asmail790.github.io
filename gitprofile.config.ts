// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Asmail790', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      // manual: {
      //   // Properties for manually specifying projects
      //   projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      // },
    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: { title: 'Portfolio of Asmail ', description: '', imageURL: '' },
  social: {
    linkedin: 'https://www.linkedin.com/in/asmail-abdulkarim-5250a3181/',
    x: 'arif_szn',
    mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    // website: 'https://www.arifszn.com',
    phone: '',
    email: 'Asmail.Abdulkarim.125@gmail.com',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],

  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  enablePWA: true,
};

export default CONFIG;
