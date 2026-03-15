const logoutLink = document.getElementById("logoutLink");

// Logout functionality
if (logoutLink) {
  logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  });
}

// Chart.js - GPA Progress (Line Chart)
const ctxGpa = document.getElementById('gpaChart')?.getContext('2d');
if (ctxGpa) {
  new Chart(ctxGpa, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
      datasets: [{
        label: 'GPA',
        data: [3.2, 3.5, 3.4, 3.1, 2.8, 3.3, 3.7, 3.8],
        borderColor: '#4f46e5',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(79, 70, 229, 0)');
          gradient.addColorStop(1, 'rgba(79, 70, 229, 0.2)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#4f46e5',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          min: 0,
          max: 4.0,
          ticks: { stepSize: 0.5 },
          grid: { borderDash: [5, 5] }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });
}

// Chart.js - Marks by Subject (Bar Chart)
const ctxMarks = document.getElementById('marksChart')?.getContext('2d');
if (ctxMarks) {
  new Chart(ctxMarks, {
    type: 'bar',
    data: {
      labels: ['Real Analysis 2', 'SAD', 'Web Design', 'Intro to R/Python', 'Regression line', 'Operational Research'],
      datasets: [{
        label: 'Marks',
        data: [85, 75, 90, 80, 70, 88],
        backgroundColor: '#6366f1',
        borderRadius: 8,
        barThickness: 35
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { borderDash: [5, 5] }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });
}
