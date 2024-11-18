import { restaurantData } from './data.js';

$(() => {
  renderRestaurantData();

  const data = {
    labels: ['Taste', 'Location', 'Service', 'Price', 'X-factor'],
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

function bindCardEvent() {
  $('.card').on('click', function () {
    $(this).find('.content').slideToggle(200);
  });
}

function renderRestaurantData() {
  restaurantData.sort((a, b) => b.total - a.total);
  restaurantData.forEach((data) => {
    const html = `
      <div class="card">
        <div class="title">${data.name} <span class="score">${(data.total * 2).toFixed(2)}%</span></div>
        <div class="content">
          <p>Taste:     <span>${data.taste.toFixed(2)}</span></p>
          <p>Price:     <span>${data.price.toFixed(2)}</span></p>
          <p>Location:  <span>${data.location.toFixed(2)}</span></p>
          <p>Service:   <span>${data.service.toFixed(2)}</span></p>
          <p>X-factor:  <span>${data.xFactor.toFixed(2)}</span></p>
        </div>
      </div>
    `;

    $('.restaurants').append(html);
  });

  bindCardEvent();
}
