module.exports = {
  userPrincipalName: process.env.USER_PRINCIPLE_NAME || 'asamir192039@bscse.uiu.ac.bd',

  icon: '/icons/128.png',

  title: "SamFlix",

  baseDirectory: '/',

  maxItems: 1000,

  googleFontSans: 'Inter',
  googleFontMono: 'Fira Mono',
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  protectedRoutes: ['/Private', '/Demo/😎Another Private Folder Password 123'],

  email: '',

  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/lyc8503',
    },
  ],

  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}