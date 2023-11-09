module.exports = {
  clientId: '972b6ffa-2546-45ff-af96-b366c6c12105',
  obfuscatedClientSecret: 'U2FsdGVkX1/nvHYLohmRx9vkWlJdIELCf6f6X+0pIvwhSNLeOZEUD6khWnQxu+ZCfCrQNI7//nI+p/uCRtSoYA==',

  redirectUri: 'http://localhost',

  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  scope: 'user.read files.read.all offline_access',

  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}