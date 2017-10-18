const GitHubApi = require('github')

const github = new GitHubApi({
  // optional
  debug: true,
  Promise: require('bluebird'),
  timeout: 5000,
  host: 'api.github.com',
  pathPrefix: '',
  protocol: 'https',
})

module.exports = github
