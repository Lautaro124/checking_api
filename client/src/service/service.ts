// service app with fetch and get dainamyc result

interface ServiceParams {
  path: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  headers?: HeadersInit
  config?: RequestInit
}

const service = async<D>({ path, method, body, headers, config }: ServiceParams) => {
  const url = `http://localhost:3000${path}`
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
    ...config
  })

  const data: D = await response.json()
  return data
}

export default service
