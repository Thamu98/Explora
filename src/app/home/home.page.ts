import { Component } from '@angular/core';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Select: string = "HomeCare";

  constructor() { }
  ngOnInit() {



    this.change();
    // if (this.Select == "HomeCare") {

    


    //   var data = new google.visualization.DataTable();

    //   data.addColumn('string', 'Topping');
    //   data.addColumn('number', 'order');
    //   data.addRows([
    //     ['Jan', 6],
    //     ['Feb', 2],
    //     ['Mar', 3],
    //     ['Apr', 1],
    //     ['May', 3],
    //     ['Jun', 4],
    //     ['Jul', 1],
    //     ['Aug', 3],
    //     ['Sep', 1],
    //     ['Oct', 2],
    //     ['Nov', 4],
    //     ['Dec', 1],

    //   ]);

    //   // Set chart options
    //   var options = {
    //     'title': 'Number Of Orders Per Month',
    //     is3D: true,
    //     'width': 600,
    //     'height': 300,
    //   };

    //   // Instantiate and draw our chart, passing in some options.
    //   var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    //   chart.draw(data, options);

    //   var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
    //   chart1.draw(data, options);

    //   var chart2 = new google.visualization.LineChart(document.getElementById('chart_div2'));
    //   chart2.draw(data, options);
    // }
  }
  change() {

    if (this.Select == "HomeCare") {



      var data = new google.visualization.DataTable();

      data.addColumn('string', 'Topping');
      data.addColumn('number', 'order');
      data.addRows([
        ['Jan', 6],
        ['Feb', 2],
        ['Mar', 3],
        ['Apr', 1],
        ['May', 3],
        ['Jun', 4],
        ['Jul', 1],
        ['Aug', 3],
        ['Sep', 1],
        ['Oct', 2],
        ['Nov', 4],
        ['Dec', 1],

      ]);

      // Set chart options
      var options = {
        'title': 'Number Of Orders Per Month',
        is3D: true,
        'width': 600,
        'height': 300,
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);

    

      var chart2 = new google.visualization.LineChart(document.getElementById('chart_div2'));
      chart2.draw(data, options);

      var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
      chart1.draw(data, options);
    }


    if (this.Select == "CovidCare") {



      var data = new google.visualization.DataTable();

      data.addColumn('string', 'Topping');
      data.addColumn('number', 'order');
      data.addRows([
        ['Jan', 3],
        ['Feb', 7],
        ['Mar', 2],
        ['Apr', 4],
        ['May', 3],
        ['Jun', 8],
        ['Jul', 1],
        ['Aug', 3],
        ['Sep', 1],
        ['Oct', 6],
        ['Nov', 4],
        ['Dec', 3],

      ]);

      // Set chart options
      var options = {
        'title': 'Number Of Orders Per Month',
        is3D: true,
        'width': 600,
        'height': 300,
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);

   

      var chart2 = new google.visualization.LineChart(document.getElementById('chart_div2'));
      chart2.draw(data, options);

      var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
      chart1.draw(data, options);
    }


     if (this.Select == "Electronics") {



      var data = new google.visualization.DataTable();

      data.addColumn('string', 'Topping');
      data.addColumn('number', 'order');
      data.addRows([
        ['Jan', 2],
        ['Feb', 5],
        ['Mar', 1],
        ['Apr', 7],
        ['May', 6],
        ['Jun', 3],
        ['Jul', 9],
        ['Aug', 3],
        ['Sep', 7],
        ['Oct', 3],
        ['Nov', 1],
        ['Dec', 5],

      ]);

      // Set chart options
      var options = {
        'title': 'Number Of Orders Per Month',
        is3D: true,
        'width': 600,
        'height': 300,
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);

    

      var chart2 = new google.visualization.LineChart(document.getElementById('chart_div2'));
      chart2.draw(data, options);

      var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
      chart1.draw(data, options);
    }


  }
}






