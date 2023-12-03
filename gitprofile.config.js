// gitprofile.config.js

const config = {
  github: {
    username: 'GiraldoS', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'santi00gi@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'MySQL',
    'Git',
    'PHPUnit',
    'CSS',
  ],
  Badges: [
    {
      name: 'Course Badges',
      body: 'Packet Tracer, ISC2, AWS badge',
      year: 'November 2023',
      Link: '"https://docs.google.com/document/d/1bdjGRkQ2ELkl_uv_Pm_aHUYT87RWmZxSsBKalNvzXzg/edit"',
    },
  ],
  education: [
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

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Incident Report',
      description:
        'Incident Report analysis assignment done in MIS 4123',
      imageUrl: '',
      link: 'https://docs.google.com/document/d/1_EktYHSvcm5sJYqzs_oWfrcBIqZqok4FHJNpypUlO_4/edit?resourcekey=0-CkZ0iK1O7xryku6WuTBs9A',
    },
    {
      title: 'Try Hack me',
      description:
        'completed Web Application try hack me room, and Walking an application try hack me room.',
      link: 'https://docs.google.com/document/d/1Vy2XooLmzQxlLSFpqijSgxNFqkbUiIv-WV17KrQ1J0Q/edit',
    },
    {
     title: 'Badges',
      description:
        'complete AWS, Packet Tracer, and ISC2',
      imageUrl: '',
      link: 'https://docs.google.com/document/d/1bdjGRkQ2ELkl_uv_Pm_aHUYT87RWmZxSsBKalNvzXzg/edit'
    },
     {
     title: 'Security Audit',
      description:
        'XYZ Financial Services security audit with Stakeholder memo, audit scope n goals, and control assessment',
      imageUrl: '',
      link: 'https://docs.google.com/document/d/1PqJxm7K2jyYXjH7Nk1CwAqFIkOyqSg1pnOv3lCteZ8Q/edit?resourcekey=0-hZZvlMgWN_w_p47Trb9glA'
    },
    {
     title: 'Professional Pitch',
      description:
        'Professional Pitch Video',
      imageUrl: '',
      link: 'https://docs.google.com/document/d/1foa8XpNIujXa3om3eTvtJEsYRADnIni0ntOf26SW8Aw/edit'
    },
      {
     title: 'Final Project',
      description:
        'Final Project with group presentation',
      imageUrl: '',
      link: 'https://docs.google.com/document/d/1soT6gupQdU5xaoBQV2IhXGG6gri3IByum5dvfVlicZ4/edit'
    },
         {
     title: '',
      description:
        '',
      imageUrl: '',
      link: ''
    },
         {
     title: '',
      description:
        '',
      imageUrl: '',
      link: ''
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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
};

export default config;
