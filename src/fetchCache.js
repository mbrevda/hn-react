let cache = {}

export default (url, opts = {}) => {
  if (opts && opts.method && opts.method != 'GET') return fetch(url, opts)
  return new Promise(resolve => {
    if (cache[url]) return resolve(cache[url])

    let {onlyFromCache, ...rest} = opts

    // if we only want cached results, return the default 'loading' state and nothing else
    if (onlyFromCache) return resolve()

    return fetch(url, rest)
      .then(res => res.json())
      .then(data => {
        cache[url] = data
        resolve(cache[url])
      })
  })
}
