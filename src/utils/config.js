const config = {
  urls: {
    currentUrl: 'https://roopelele.fi/data/temperature/current.json',
    historyUrl: 'https://roopelele.fi/data/temperature/',
    configUrl: 'https://roopelele.fi/data/temperature/config.json',
    gitHubUrl: 'https://github.com/roopelele',
    mainUrl: '/',
    temperatureUrl: '/temperatures',
  },
  menuItems: [
    {
      text: 'front page',
      url: '/'
    },
    {
      text: 'temperatures',
      url: '/temperatures'
    }
  ],
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
    pointRadius: 0,
    options: {
      padding: '20px',
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 15.0,
              suggestedMax: 30.0,
            },
            gridLines: {
              color: '#495057',
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 1440,
            },
            gridLines: {
              color: '#495057',
            }
          }
        ]
      },
      legend: {
        position: 'top',
        align: 'start',
      },
      title: {
        display: true,
        position: 'bottom'
      }
    }
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
