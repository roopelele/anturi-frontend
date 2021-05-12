const config = {
  urls: {
    currentUrl: 'https://roopelele.fi/data/temperature/current.json',
    historyUrl: 'https://roopelele.fi/data/temperature/',
    configUrl: 'https://roopelele.fi/data/temperature/config.json',
    gitHubUrl: 'https://github.com/roopelele',
    mainUrl: 'https://roopelele.fi/',
    temperatureUrl: 'https://roopelele.fi/temperatures',
  },
  colors: {
    grid: '#495057',
    background: [
      'rgb(0, 97, 189)',
      'rgb(50, 130, 0)',
    ],
    border: [
      'rgba(0, 97, 189, 0.5)',
      'rgba(50, 130, 0, 0.5)',
    ]
  },
  graph: {
    yMin: 15.0,
    yMax: 30.0,
    legend: {
      pos: 'top',
      alignment: 'start',
    },
    pointRadius: 1,
  },
  messages: {
    noData: 'no data',
  },
  styles: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
}

export default config
