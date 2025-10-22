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
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'Asmail790/PhoneDB',
          'Asmail790/Yolov1',
          'Asmail790/unblock_me_solver_on_android',
          'Asmail790/IconGenerator',
          'Asmail790/house-price-prediction',
          'Asmail790/Calculator',
          'Asmail790/DjangoRestNoteEditor',
          'Asmail790/DjangoNoteEditor',
          'Asmail790/Simple-Android-Note-Editor-App',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Word segmenter',
          description: `A word segmenter that segments words such as "don't"  into "do", "not" and "qu'environ"
            into "qu" and "environ". Tools used are Sklearn, Keras, Numpy and Matplotlib`,
          imageUrl: '',
          link: '',
        },
        {
          title: 'Surveillance system',
          description: `A surveillance system that monitors the front door. 
          If the door is opened, the system sends a push notification to a phone app and immediately begins recording a live video stream.
          The live stream is also processed in real-time for face detection.
          Within the phone application, users can view the live stream, jump back in time, or navigate directly to specific face detection timestamps. 
          Previously recorded live streams are also accessible for viewing in the app.
          
          Currently the following hardware is used to detect the door's state (open/closed) and record the video stream:
          Raspberry Pi Zero W2 device,camera module,magnetic sensor,Raspberry Pi 4 and PC.

          Currently the languages used in the project include Python, TypeScript, Kotlin, and C. Tools utilized are 
          Node.js, OpenCV, Linux, Nfty, Mediamtx, Android, and FFmpeg.
          The project is ongoing.
          `,
          imageUrl: '',
          link: '',
        },
        {
          title: 'Self hosted services',
          description: `A home server configured for self-hosting services.
          Currently a Seafile (a file-sharing server) and Forgejo (a git service, ie. a platform for managing software projects) is serviced.
          Docker Compose is used for containerization and Nginx serves as a TCP proxy. Other tools used are Linux and Wireshark.
          `,
          imageUrl: '',
          link: '',
        },
        {
          title: 'Document management App',
          description: `An app to streamline the handling of work environment
          documents. The app retrieves public data from "Arbetsmiljöverket" and "Allabolag.se". Collected data can be exported as CSV or stored in an internal
          database. The app can also extract information from specific PDF document types
          from the Arbetsmiljöverket. The information about why Arbetsmiljöverket is inspecting a company and what
          deficiencies have been identified according to Arbetsmiljöverket  is also summarized from the PDF to provide a clearer overview. The app has also functions for sorting, editing and filtering
          documents in the database. The app is built upon TypeScript, React and Electron. Other tools used are sqlite,React, Vitest, OpenAI, 
          Mantine, Kysely,sqlite FTS5, Electron, zod, cheerio, pdf2json, jotai, React Query, CircleCI CI/CD.
          `,
          imageUrl: '',
          link: 'https://drive.google.com/drive/folders/1MC9SP8L_2auuRJSAtU7zAUISaTk3AyQn?usp=drive_link',
        },
        {
          title: 'House sale price analysis',
          description: `A data analysis predicting sales house prices (regression) was performed using features such as built date, heating, total rooms, total above ground area, and total lot area.
The analysis also included outlier detection and imputation. 
The following tools were used: pandas, scipy, sklearn, mlxtend, matplotlib, and seaborn.
          `,
          imageUrl: '',
          link: 'https://www.kaggle.com/code/asmailabdulkarim/house-prices-final',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Asmail Abdulkarim',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'asmail-abdulkarim-5250a3181',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'Asmail.Abdulkarim.125@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    ...[
      'Java',
      'Python',
      'C++',
      'C',
      'C#',
      'Kotlin',
      'JavaScript',
      'TypeScript',
      '.Net core',
      'EF core',
      'SQL',
      'Svelte',
      'Playwright',
      'Android',
      'React',
      'Node',
      'Git',
      'Docker',
      'Docker compose',
      'Bash',
      'Vitest',
      'CSS',
      'Matplotlib',
      'Sklearn',
      'Numpy',
      'Pandas',
      'Seaborn',
      'Pytorch',
      'Tensorflow',
      'Ultralytics',
      'Tailwind',
      'Django',
      'Electron',
      'Zod',
      'Cheerio',
      'Kysely',
      'Puppeter',
      'Storybook',
      'Sqlite FTS5',
      'PIL',
      'CProfile',
      'Networkx',
    ].toSorted(),
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Dmitri Nesteruk, Udemy',
      degree: 'Parallel Programming with C# and .NET',
      from: '2025',
      to: '2025',
    },
    {
      institution: 'Felipe Gavilán, Udemy',
      degree: 'React 19 and ASP.NET Core 9',
      from: '2025',
      to: '2025',
    },

    {
      institution: 'Skovde University',
      degree: 'PLC and robot programming with virtual models',
      from: '2024',
      to: '2024',
    },
    {
      institution: 'Kristanstad University',
      degree: 'Progamming in C',
      from: '2024',
      to: '2024',
    },
    {
      institution: 'Kristanstad University',
      degree: 'Progamming in C++',
      from: '2024',
      to: '2024',
    },
    {
      institution: 'Lund University',
      degree: 'Computer science master',
      from: '2017',
      to: '2022',
    },
    {
      institution: 'Umeo University',
      degree: 'Mobile application development',
      from: '2020',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'ML-driven self-tuning MySQL-database',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: 'https://lup.lub.lu.se/student-papers/search/publication/9103095',
      description: `
         Improved MySQL database performance by leveraging machine learning
    to optimize parameter configuration. Used Bayesian optimization for
    efficient parameter selection, resulting in significant speedup (440% in
    TPC-C benchmark, 261% in Twitter benchmark, and 200% in YCSB
    benchmark) over default settings. Technologies used include
    HyperMapper, BenchBase, AWS EC2, and CAVE. The code is written in
    Python.
        `,
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

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

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
