function doStackedChart(data, canvasId) {
const barChartData = {
	labels: [''],
	datasets: [{
		label: utilsChart.group[1].name,
		backgroundColor: utilsChart.group[1].color,
		data: [data[1], 100]
	},{
		label: utilsChart.group[2].name,
		backgroundColor: utilsChart.group[2].color,
		data: [data[2]]
	},{
		label: utilsChart.group[3].name,
		backgroundColor: utilsChart.group[3].color,
		data: [data[3]]
	}]
}

const config = {
  type: 'bar',
  data: barChartData,
  options: {
		responsive: true,
		legend: {
			display: false
		},
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    },
  }
}

const ctx = document.getElementById(canvasId).getContext('2d')
const chart = new Chart(ctx, config)
// chart.canvas.parentNode.style.width = '100%';
// chart.canvas.parentNode.style.height = '400px';
}
