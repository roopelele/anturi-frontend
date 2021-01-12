const config = {
  urls: {
    currentUrl: 'http://192.168.100.12:5000/current',
    historyUrl: 'http://192.168.100.12:5000/history',
    getDataUrl: 'http://192.168.100.12:5000/get_data',
  },
  colors: {
    grid: '#224A70',
    background: 'rgb(0, 97, 189)',
    border: 'rgba(0, 97, 189, 0.5)',
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