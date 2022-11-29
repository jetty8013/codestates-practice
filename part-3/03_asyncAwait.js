const { TestScheduler } = require("jest");

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  return {
    news : await fetch(newsURL).then(data => data.json()).then((data) => data.data),
    weather : await fetch(weatherURL).then(data => data.json())
  }
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}



iasdasd
addEventListener