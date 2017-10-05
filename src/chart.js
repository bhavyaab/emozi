function createChart(id, dataArray){
  var chartData = [];
  for(var prop in dataArray){
    chartData.push(dataArray[prop]);
  }
  var canvas = document.getElementById( id ).getElementsByClassName('right')[0].getElementsByTagName('canvas')[0];
  new Chart(canvas, {
    type: 'doughnut',
    // type: 'pie',
    // type: 'polarArea',
    data: {
      labels: ['anger', 'contempt', 'disgust', 'fear', 'joy', 'neutral', 'sad', 'surprise'],
      datasets: [
        {
          label: 'scores',
          backgroundColor: ['#e50012','#3cba9f','#769e15','#f8f9d7','#f4ee34','#E58E66','#0e83e1','#9414e6'],
          data: chartData
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Emotion Color Doughnut'
      }
    }
  });
  console.log('canvas == ', canvas, 'chart data = ', chartData);

  var p = document.getElementById( id ).getElementsByClassName('right').innerHTML += canvas;
}
