function doDoughnutChart(data, canvasId) {
const config = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				data[1],
				data[2],
				data[3],
				data[0],
			],
			backgroundColor: [
          utilsChart.group[1].color,
          utilsChart.group[2].color,
          utilsChart.group[3].color,
          utilsChart.group[0].color,
			],
			label: 'Dataset 1'
		}],

		labels: [
			utilsChart.group[1].name,
			utilsChart.group[2].name,
			utilsChart.group[3].name,
			utilsChart.group[0].name,
    ]
	},
	options: {
		legend: false,
		// tooltips: false,
	}
}

let ctx = document.getElementById(canvasId).getContext('2d')
new Chart(ctx, config)
}
