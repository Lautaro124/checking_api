// service app with fetch and get dainamyc result

interface ServiceParams {
  path: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  headers?: HeadersInit
  config?: RequestInit
}

const service = async<D>({ path, method, body, headers, config }: ServiceParams) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_REACT_URL_API ?? ''}/api/v1/${path}`
    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        ...headers
      },
      body,
      redirect: 'follow',
      ...config
    })

    const data: D = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error('An unknown error occurred')
  }
}

export default service
