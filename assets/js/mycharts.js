// interests Chart

var time = ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012",
          "2013", "2014", "2015", "2016", "2017", "2018"];
var biomedicine = [8, 10, 10, 10, 8, 4, 5, 3, 2, 2, 1, 2, 3, 3];
var behavior = [2, 3, 4, 6, 7, 4, 7, 10, 10, 10, 10, 10, 10, 10];
var insects = [0, 0, 0, 5, 3, 3, 8, 8, 8, 8, 8, 8, 8, 8];
var compbio = [0, 0, 0, 2, 8, 10, 9, 4, 1, 1, 1, 3, 5, 5];
var learning = [0, 0, 3, 5, 2, 0, 1, 2, 4, 5, 7, 8, 7, 7];
var physio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 7];

const colors = {
  primarycol: {
    fill: '#afcdcf',
    stroke: '#70a5a9',
  },
  secondarycol: {
    fill: '#708ea9',
    stroke: '#394e60',
  },
  lightsalmon: {
    fill: '#f6c4bc',
    stroke: '#ed8a78',
  },
  salmon: {
    fill: '#e6b3cc',
    stroke: '#cc6699',
  },
  darkblue: {
    fill: '#92bed2',
    stroke: '#3282bf',
  },
  darkpurple: {
    fill: '#7f90cc',
    stroke: '#3c5096',
  },
  darkblue: {
    fill: '#6d99c5',
    stroke: '#4173a4',
  },
  red: {
    fill: '#d279bc',
    stroke: '#bf409f',
  },
};




// Line graph using Chart.js library (Chart.min.js)
var ctx = document.getElementById('myInterestChart').getContext('2d');

var newChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: time,
        datasets: [{
            label: "Biomedicine",
            backgroundColor: colors.darkpurple.fill,
            borderColor: colors.darkpurple.stroke,
            borderWidth: 2,
            pointRadius: 0,
            data: biomedicine,
          },{
            label: "Behavior",
            backgroundColor: colors.secondarycol.fill,
            borderColor: colors.secondarycol.stroke,
            borderWidth: 2,
            pointRadius: 0,
            data: behavior,
          },{
            label: "Insects",
            backgroundColor: colors.primarycol.fill,
            borderColor: colors.primarycol.stroke,
            borderWidth: 2,
            pointRadius: 0,
            data: insects,
          },{
            label: "Computational Biology",
            backgroundColor: colors.lightsalmon.fill,
            borderColor: colors.lightsalmon.stroke,
            borderWidth: 2,
            pointRadius: 0,
            data: compbio,
          },{
            label: "Learning and memory",
            backgroundColor: colors.salmon.fill,
            borderColor: colors.salmon.stroke,
            borderWidth: 2,
            pointRadius: 0,
            data: learning,
          },{
            label: "Neurophysiology",
            backgroundColor: colors.red.fill,
            borderColor: colors.red.stroke,
            borderWidth: 2,
            pointRadius: 0,
            data: physio,
          }]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: "Evolution of scientific interests"
      },
      scales: {
        yAxes: [{
          stacked: true,
          display: false
        }],
      },
      animation: {
        duration: 750,
      },
    }
});


/*
var data = {
    labels: time,
    datasets: [{
        label: "Biomedicine",
        fillColor: colors.darkpurple.fill,
        hoverColor: colors.darkpurple.stroke,
        data: biomedicine,
      },{
        label: "Behavior",
        fillColor: colors.secondarycol.fill,
        hoverColor: colors.secondarycol.stroke,
        data: behavior,
      },{
        label: "Insects",
        fillColor: colors.primarycol.fill,
        hoverColor: colors.primarycol.stroke,
        data: insects,
      },{
        label: "Computational Biology",
        fillColor: colors.lightsalmon.fill,
        hoverColor: colors.lightsalmon.stroke,
        data: compbio,
      },{
        label: "Learning",
        fillColor: colors.salmon.fill,
        hoverColor: colors.salmon.stroke,
        data: learning,
      },{
        label: "Neurophysiology",
        fillColor: colors.red.fill,
        hoverColor: colors.red.stroke,
        data: physio,
      }],
};

var options = {
  labelFontColor: '#333',
  stroke: false,
  labelPlacementMethod: 'ideal',
  labelMinimumSize: 9,
  animation: {
    duration: 750,
  },
};


var newChart = new Chart(ctx).Streamgraph(data, options);
*/
