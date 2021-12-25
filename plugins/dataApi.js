export default function(context, inject) {
  const appId = process.env.algoliaAppId
  const apiKey = process.env.algoliaAppKey

  inject('dataApi', {
    getHome,
  })

  async function getHome(homeId) {
    const response = fetch(`https://${appId}-defineSSRCustomElement.algolia.net/indexes/homes/${homeId}`, {
      'X-Algolia-API-Key': apiKey,
      'X-Algolia-Application-Id': appId,
    })

    const json = await response.json()
    return json
  }
}
