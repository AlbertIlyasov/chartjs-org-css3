const utilsChart = {
	group: [
		{
			color: '#cccccc',
			name: 'не обнаружен, %',
		},
		{
			color: '#9400d3',
			name: 'месяц, %',
		},
		{
			color: '#d342ff',
			name: 'неделя, %',
		},
		{
			color: '#ff99ff',
			name: 'сутки, %',
		},
	],

	prepareData: function(chartDataJson) {
		  let data = [0,0,0]
		  if (typeof chartDataJson === 'string') {
				try {
		    	data = JSON.parse(chartDataJson)
				} catch (error) {
					console.error('Eror format of variable chartDataJson')
				}
		  }

		  let sum = 0
		  data.map(function(value) {
		    sum += value
		  })
		  data.unshift(100-sum)

			return data
	},

	randomScalingFactor: function() {
		return Math.round(Math.random() * 100)
	}
}
