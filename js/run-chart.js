window.onload = function() {
  const json = typeof chartDataJson === 'string' ? chartDataJson : ''
  const data = utilsChart.prepareData(json)
  doDoughnutChart(data, 'canvas-doughnut')
  doStackedChart(data, 'canvas-stacked')
}
