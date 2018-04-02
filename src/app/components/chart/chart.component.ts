import { Component,Input,OnChanges,OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GraphDetailsService } from '../../services/graphdetails.service';

@Component({
    selector: 'line-chart',
    templateUrl : './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit  {
    chartData:any[] = [];
    xAxisData = [];
    yAxisData = [];
    chart:Chart;
    constructor(private chartservice:GraphDetailsService){
        
        
    }
    ngOnInit(){
      this.chartData = this.chartservice.getChartValues();
      
      for (var key in this.chartData) {
      
          this.xAxisData.push(this.chartData[key].xAxis);
          this.yAxisData.push(this.chartData[key].yAxis);
      }
       
      console.log('H!!'+this.yAxisData);
       this.chart = new Chart({
    chart: {
      type: ''
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
      xAxis: {
        categories:  this.xAxisData
    },
    series: [{
      name: 'Line 1',
      data: [30.5,31.5,20.5,36.5],

    }]
  });
      
    }
    generateChart(){
    
    }


   

  // add point to chart serie
  add() {
   // this.chart.addPoint(Math.floor(Math.random() * 10));
  }
 
   
}