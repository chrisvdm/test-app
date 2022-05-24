module.exports = (config) => {
  // In development, when we use a symlink to redwood-stripe to work on the library, we need
  // webpack to resolve redwood-stripe's dependencies relative to the the symlink's location
  // in order to resolve redwood-stripe's peer dependencies (e.g. @redwoodjs/web) to the same place
  // as the dependencies in this project.
  config.resolve.symlinks = false
  return config
}
