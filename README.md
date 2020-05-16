#Вёрстка
Пример: http://chartjs-org-css3.11121.ru

##Группы

Предполагается, что всегда будет **3 группы**.

###Значения групп
Значения групп хранятся в js-переменной chartDataJson файла `index.html` в формате JSON вида `[20,8,6]`. Эта переменная используется в файле `js/run-chart.js` для построения графиков.

###Цвета групп
При необходимости цвет нужно изменять в следующих файлах:
* **css/index.css** - переменные `mainLegendColor1 - mainLegendColor4`
* **js/utils-chart.js** - свойство `utilsChart.group[].color`

###Наименования групп
Наименования изменяются в файлах:
* **index.html** - в html-коде
* **js/utils-chart.js** - свойство `utilsChart.group[].name`
﻿
