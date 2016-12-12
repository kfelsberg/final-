var graph = document.getElementById('myChart');

var myChart = new Chart(graph, {
  type: 'pie',
  data: {
      labels: ['>10 years old', '11-17 years old', '17<years old'],
      datasets: [{
          backgroundColor: [
              "#FFE5EB",
              "#e780a5",
              "#e780c9"
          ],
        data: [42, 42, 16]
        }]
      }, //ends data
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Ages when catcalling starts'
        }
      }//
    }); // ends the entire variable

// list of bold items

var bold_Items;

window.onload = getBold_items();

//collect all <strong> tages

function getBold_items() {
  bold_Items = document.getElementsByTagName('strong');
}

//iterate through all bold tags and change color

function highlight() {
    for (var i=0; i < bold_Items.length; i++) {
        bold_Items[i].style.color = "#f08080";
    }
}

// on mouse out highlighted words become black

function return_normal() {
  for (var i=0; i < bold_Items.length; i++) {
      bold_Items[i].style.color = "black";
  }
}
