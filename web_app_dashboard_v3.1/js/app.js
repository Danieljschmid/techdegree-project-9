const dot = document.querySelector('.dot');
const alertBox = document.querySelector('.alert-box');
const alertButton = document.querySelector('.alert-button');

const lineChart = document.getElementById('lineChart').getContext('2d');
const barChart = document.getElementById('barChart').getContext('2d');
const pieChart = document.getElementById('pieChart').getContext('2d');

// close alert box
function displayNone() {
  alertBox.style.display = 'none';
}

alertButton.addEventListener('click', (e) => {
  alertBox.style.opacity = '0';
  setTimeout(displayNone, 1000);
  dot.style.display = 'none';
});

//Charts

Chart.defaults.global.defaultFontFamily = 'Raleway';

let lineChart1 = new Chart(lineChart, {
  type:'line',
  data: {
    labels:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets:[{
      data:[
        150, 350, 700, 675, 400, 715, 750
      ],
      label: "Traffic",
      backgroundColor: 'rgba(102,48,150, 0.2)',
      borderColor: '#9975b9',
      borderWidth: .8,
      lineTension: 0,
      pointRadius: 4.5,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2
    }]
  },
  options: {
    legend: {
            display: false,
            },
    maintainAspectRatio: false,
  }
});

let barChart1 = new Chart(barChart, {
  type:'bar',
  data: {
    labels:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets:[{
      data:[
        150, 350, 700, 675, 400, 715, 750
      ],
      label: "Traffic",
      backgroundColor: '#663096',
      borderRadius: '5px',
      borderColor: '#9975b9',
      borderWidth: .8,
    }]
  },
  options: {
    legend: {
            display: false,
            },
    maintainAspectRatio: false,
  }
});

let pieChart1 = new Chart(pieChart, {
  type:'doughnut',
  data: {
    labels:['Phones', 'Tablets', 'Desktop'],
    datasets:[{
      backgroundColor: ['#66b966', '#663096', '#9975b9'],
      boxWidth: 10,
      data:[
        250, 350, 450,
      ],
    }]
  },
  options: {
        legend: {
          position: 'right',
          labels: {
          boxWidth: 13,
          padding: 15,
        },
      },
    maintainAspectRatio: false,
  }
});
