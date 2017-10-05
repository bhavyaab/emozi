
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["anger", "contempt", "disgust", "fear", "joy", "neutral", "sad", "surprise"],
      datasets: [
        {
          label: "scores",
          backgroundColor: ["#e50012","#3cba9f","#769e15","#f8f9d7","#f4ee34","#E58E66","#0e83e1","#9414e6"],
          // red,cyan,green,cream,yellow,brown,blue,violet
          data: [1.0570484E-08,1.52679547E-09,1.60232943E-07,6.00660363E-12,0.9999998,9.449728E-09,1.23025981E-08, 9.91396E-10]
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
