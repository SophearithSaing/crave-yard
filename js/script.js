$(() => {
  const data = {
    labels: ['Taste', 'Location', 'Service', 'Price', 'Ambiance'],
    datasets: [
      {
        label: 'Saigon Recipe',
        data: [9, 7, 7, 3, 10],
      },
      {
        label: 'Khao Kha Moo',
        data: [8, 6, 7, 7, 5],
      },
    ],
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 2,
        },
      },
      scales: {
        r: {
          angleLines: {
            display: false,
          },
          suggestedMin: 5,
          suggestedMax: 10,
        },
      },
    },
  };

  new Chart(document.getElementById('chart'), config);
});
