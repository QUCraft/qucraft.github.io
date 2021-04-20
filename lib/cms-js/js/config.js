// Config
var config = {
  elementId: 'cms',

  // Mode 'GITHUB' for Github Pages, 'SERVER' for Self Hosted
  // Defaults to Server mode if not specified
  mode: 'GITHUB',

  // If Github mode is set, your Github username, repo name,
  // and branch to get files from.
  github: {
    username: 'qucraft',
    repo: 'qucraft.github.io',
    branch: 'Website2-0',
    host: 'https://api.github.com',
    // Use prefix option if your site is located in a subdirectory.
    prefix: '',
  },

  layoutDirectory: 'layouts',
  errorLayout: 'error',
  defaultView: 'about',
  types: [
    { name: 'posts', layout: { list: 'post-list', single: 'post' } },
    { name: 'pages', layout: { list: 'page-list', single: 'page' } },
  ],
};

// Initialize CMS.js
var blog = CMS(config);
