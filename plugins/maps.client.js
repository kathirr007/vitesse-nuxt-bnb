export default function(context, inject) {
  let mapLoaded = false
  let mapWaiting = null
  const mapsAPI = context.$config.mapsAPI

  addScript()
  inject('maps', {
    showMap,
  })

  function addScript() {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsAPI}&libraries=places&callback=initMap`
    script.sync = true
    window.initMap = initMap
    document.head.appendChild(script)
  }

  function initMap() {
    mapLoaded = true
    if (mapWaiting) {
      const { canvas, lat, lng } = mapWaiting
      renderMap(canvas, lat, lng)
      mapWaiting = null
    }
  }

  function showMap(canvas, lat, lng) {
    if (mapLoaded) renderMap(canvas, lat, lng)
    else mapWaiting = { canvas, lat, lng }
  }

  function renderMap(canvas, lat, lng) {
    const mapOptions = {
      zoom: 12,
      scrollwheel: true,
      gestureHandling: 'auto',
      center: new window.google.maps.LatLng(lat, lng),
    }
    const map = new window.google.maps.Map(canvas, mapOptions)
    const position = new window.google.maps.LatLng(lat, lng)
    const marker = new window.google.maps.Marker({ position })
    marker.setMap(map)
  }
}
