importScripts('filter.js')

self.addEventListener('message', (e) => {
  const { config, source } = e.data

  const filter = dither[config.nature]

  self.postMessage({
    result: filter(config.lookup)(source)
  })
})
