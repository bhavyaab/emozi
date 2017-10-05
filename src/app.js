'use strict';
var image = 'http://art16.photozou.jp/pub/659/901659/photo/58352995_624.jpg';
var scores = localStorage.getItem(image);
if(scores){
  scores = JSON.parse(scores);
  console.log('Getting data from localStorage');
  insertImages(image, scores);
}else {
  makeACall(image);
}


function makeACall(image){
  var params = {};
  var scores;
  $.ajax({
    url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?' + $.param(params),
    beforeSend: function(xhrObj){
      xhrObj.setRequestHeader('Content-Type','application/json');
      xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key','8173de78172644d88ddd3073a61b9200');
    },
    type: 'POST',
    data: `{"url": "${image}"}`,
  })
  .done(function(data) {
    scores = data[0].scores;
    insertImages(image, scores);
    localStorage.setItem(image, JSON.stringify(scores));
  })
  .fail(function(error) {
    var socres = 0;
    insertImages(image, scores);
  });
}


function insertImages(image, scores){
  if(!scores) scores = 0;
  var li = '<li id=\'' + image +
  '\'><img class=\'left\' src=\'' + image +
  '\'><p class=\'right\'></p></li>';

  var emotion = document.getElementById('emotion');
  emotion.innerHTML += li;
  highestScore(image, scores);
}

function highestScore(image, obj){
  var emotion = {};
  var status = 'anger';
  for(var prop in obj){
    if(obj[status] < obj[prop]) status = prop;
  }
  emotion.name = status;
  emotion.url = emozi[status];
  if(!obj) {
    emotion.name = '??????????????';
    emotion.url = emozi.dontKnow;
  }
  var result = '<li style=\'margin-left:10%\'> ' + emotion.name + '</li>';
  var p = document.getElementById( image ).getElementsByClassName('right')[0];

  p.innerHTML += '<canvas></canvas>';
  p.innerHTML += result;
  if(obj !== 0)createChart(image, obj);
  return emotion;
}
