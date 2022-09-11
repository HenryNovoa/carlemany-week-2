const data = {
  labels: [
    "Socialistas",
    "Liberales",
    "Animalistas",
    "Centristas",
    "Ecologistas",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [1, 0, 0, 0, 0],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "orange",
        "green",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
};

const myChart = new Chart(document.getElementById("myChart"), config);

// Without this, the chart is uncomfortably large, taken out of docs
myChart.canvas.parentNode.style.height = "512px";
myChart.canvas.parentNode.style.width = "512px";

function vote(position) {
  myChart.data.datasets[0].data[position] += 1;
  myChart.update();
}

function reset() {
  myChart.data.datasets[0].data = [0, 0, 0, 0, 0];
  myChart.update();
}
