export default function(context, inject) {
  const appId = context.$config.algoliaAppId
  const apiKey = context.$config.algoliaAppKey
  const reqHeaders = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  }

  inject('dataApi', {
    getHome,
  })

  async function getHome(homeId) {
    try {
      return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/nuxt-bnb-homes/${homeId}`, {
        headers: reqHeaders,
      }))
    }
    catch (error) {
      debugger
      return getErrorResponse(error)
    }
  }

  async function unWrap(response) {
    const json = await response.json()
    const { ok, status, statusText } = response
    return {
      json,
      ok,
      status,
      statusText,
    }
  }

  function getErrorResponse(error) {
    return {
      ok: false,
      status: 500,
      statusText: error.message,
      json: {},
    }
  }
}
