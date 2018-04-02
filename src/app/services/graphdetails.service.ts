import { Injectable } from '@angular/core';

@Injectable()
export class GraphDetailsService {
chartValues = [];
  constructor() { }

  getChartValues(){
  	return this.chartValues = ChartValues;

  }

}

const ChartValues =[
{
	"type" : "1",
	"xAxis" : "Sun",
	"yAxis" : "18.12"
},

{
	"type" : "1",
	"xAxis" : "Mon",
	"yAxis" : "20.12"
},
{
	"type" : "1",
	"xAxis" : "Tues",
	"yAxis" : "22.12"
},

{
	"type" : "1",
	"xAxis" : "Wed",
	"yAxis" : "24.12"
},
{
	"type" : "1",
	"xAxis" : "Thrus",
	"yAxis" : "26.12"
}

];


];
