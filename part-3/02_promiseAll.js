function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
    return Promise.all([fetch(newsURL).then(data => data.json()),fetch(weatherURL).then(data => data.json())])
    .then((data) =>{
      return {
        news : data[0].data,
        weather : data[1]
      }
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}

