const intlNumberFormatValues = ['de-DE', 'currency', 'EUR']

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
})


export const httpRequest = (method: 'POST' | 'GET' = 'GET', path: string, query: string = '') => new Promise<any>((resolve, reject) => {
  const xhr = new XMLHttpRequest()

  xhr.open(method, path)

  if (method === 'POST') {
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({ query }))
  } else {
    xhr.send()
  }

  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.response)
      resolve(response)
    } else if (xhr.status === 500) {
      reject({
        statusText: xhr.statusText,
        response: xhr.response
      })
    }
  }
})
