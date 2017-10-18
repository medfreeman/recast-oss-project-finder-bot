const github = require('./providers/github')

const search = (query) => {
  return github.search.repos({
    q: query,
    sort: 'stars',
    order: 'desc',
    per_page: 2,
  })
  .then((projects) => {
    const { data } = projects
    const { items } = data
    return items
  })
  .catch((err) => {
    console.log(err.code, err.message)
    return []
  })
}

const find = (purpose, language) => {
  return new Promise((resolve, reject) => {
    search(purpose)
    .then((projects) => {
      // console.log(JSON.stringify(projects, null, 2))
      const projectsString = projects
        .slice(0, 2)
        .map((project) => {
          return `${project.name} / ${project.html_url}`
        })
        .join(' & ')

      return resolve({ type: 'text', content: `2 most relevant projects found (only based on stars): ${projectsString}` })
    })
  })
}

module.exports = {
  find,
}
