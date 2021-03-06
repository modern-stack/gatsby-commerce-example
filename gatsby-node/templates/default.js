const path = require(`path`)

module.exports = (node, context, createPage) => {
  const { slug, template } = node.data || {}

  return new Promise(resolve => {
    createPage({
      path: `${slug.text}`,
      component: path.resolve(`./src/templates/${template.toLowerCase()}.js`),
      context: {
        ...node.data,
        ...context,
      },
    })

    return resolve()
  })
}
