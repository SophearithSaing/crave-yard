import { restaurantData } from './data.js';

$(() => {
  renderRestaurantData();

  const data = {
    labels: ['Taste', 'Location', 'Service', 'Price', 'X-factor'],
    datasets: [],
  };

  const item = restaurantData[0];
  const restaurant = {
    label: item.name,
    data: [item.taste, item.location, item.service, item.price, item.xFactor],
  };
  data.datasets.push(restaurant);

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
          suggestedMin: 1,
          suggestedMax: 10,
        },
      },
      plugins: {
        colors: {
          forceOverride: true,
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById('chart'), config);
  bindCompareEvent(myChart);
});

function bindCardEvent() {
  $('.card .name').on('click', function () {
    $(this).parent().siblings('.content').slideToggle(200);
  });
}

function bindCompareEvent(myChart) {
  $('.compare').on('click', function () {
    const item = restaurantData[$(this).data('index')];
    const restaurant = {
      label: item.name,
      data: [item.taste, item.location, item.service, item.price, item.xFactor],
    };

    myChart.data.datasets.push(restaurant);
    myChart.update();
  });
}

function renderRestaurantData() {
  restaurantData.sort((a, b) => b.total - a.total);
  restaurantData.forEach((data, index) => {
    const html = `
      <div class="card">
        <div class="title">
          <span class="compare" data-index="${index}">Compare</span> 
          <span class="name">${data.name}</span> 
          <span class="score">${(data.total * 2).toFixed(2)}%</span></div>
        <div class="content">
          <p>Taste: <span>${data.taste.toFixed(2)}</span></p>
          <p>Price: <span>${data.price.toFixed(2)}</span></p>
          <p>Location: <span>${data.location.toFixed(2)}</span></p>
          <p>Service: <span>${data.service.toFixed(2)}</span></p>
          <p>X-factor: <span>${data.xFactor.toFixed(2)}</span></p>
        </div>
      </div>
    `;

    $('.restaurants').append(html);
  });

  bindCardEvent();
}
