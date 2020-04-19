function r() { return Math.floor(Math.random() * 255) }
function gen_datasets(data){
    datasets = []
    for (elem in data["sl"]){
        x = r()
        y = r()
        z = r()
        set = {}
        set["label"] = elem
        set["data"] = data["sl"][elem]
        set.borderWidth = 1
        set.backgroundColor = 'rgba(' + x +',' + y + ',' + z + ',0.4)'
        set.borderColor = 'rgba(' + x +',' + y + ',' + z + ',1)'
        set.lineTension = 0
        set.fill = false
        datasets.push(set)
    }
    return datasets
}

function gen_datasets_2(data){
    datasets = {}
    backgroundColor = []
    borderColor = []
    for (elem in data["day"]){
        x = r()
        y = r()
        z = r()
        bgColor = 'rgba(' + x +',' + y + ',' + z + ',0.4)'
        bdColor = 'rgba(' + x +',' + y + ',' + z + ',1)'
        backgroundColor.push(bgColor)
        borderColor.push(bdColor)
    }
    datasets.backgroundColor = backgroundColor
    datasets.borderColor = borderColor
    datasets.data = data["sl"]
    datasets.label='Số lượng Môi giới'
    return datasets
}









var monthChart = function(m_data){
    var barChartData  = {
        labels: m_data["day"],
        datasets: [gen_datasets_2(m_data)]
    }

    console.log(gen_datasets_2(m_data))
    var chartOptions = {
        legend: {
            position: "top",
            labels: {
              // This more specific font property overrides the global property
              fontSize: 15,
              fontColor	: "rgba(255,255,255,0.7)"
  
          }
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                }
            }],
            xAxes: [{
                ticks: {
                beginAtZero: true,
                fontColor	: "rgba(255,255,255,0.7)"
                }
            }]
          }
    }

    $('#ovChart').remove(); // this is my <canvas> element
    $('#ovDadChart').append('<canvas class = "col-md bg-transparent" id="ovChart"><canvas>');
    var ctx = document.getElementById('ovChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data:  barChartData,
      options: chartOptions
      });
  }





  var districtDayChart = function(dd_data){

    var lineChartData = {
        labels :dd_data["day"],
        datasets : gen_datasets(dd_data)
    }

    var chartOptions = {
        fill: false,
        responsive: true,
        legend : {
            position : "top",
            labels :{
                fontSize: 12,
                fontColor: "rgba(255,255,255,0.7)"
            }
        },
        title:{
            display: true,
            position: "top",
            text: "Biểu đồ thống kê số lượng nhà môi giới từ " + fromday+ " đến " + today,
            fontColor	: "rgba(255,255,255,0.7)",
            fontSize	: 20
        },
        scales : {
            yAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }],
            xAxes : [{
                
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)",
                    type : "time",
                    time: {
                        unit : "day"
                    }
                }
                
            }]
        }
    }
    $('#tcChart').remove(); // this is my <canvas> element
    $('#tcChartDad').append('<canvas class = "col-md bg-transparent" id="tcChart"><canvas>');
    var ctx = document.getElementById("tcChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: lineChartData,
        options: chartOptions
    });
}





  var surfaceDayChart = function(sday_data){
    var lineChartData = {
        labels : sday_data["day"],
        datasets : gen_datasets(sday_data)
    }

    var chartOptions = {
        responsive: true,
        legend : {
            position : "top",
            labels :{
                fontSize: 15,
                fontColor: "rgba(255,255,255,0.7)"
            }
        },
        title:{
            display: true,
            position: "top",
            text: "Biểu đồ thống kê số lượng nhà môi giới từ: " + fromday + " đến " + today,
            fontColor	: "rgba(255,255,255,0.7)",
            fontSize	: 20
        },
        scales : {
            yAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }],
            xAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }]
        }
    }

    $('#tcChart').remove(); // this is my <canvas> element
    $('#tcChartDad').append('<canvas class = "col-md bg-transparent" id="tcChart"><canvas>');
    var ctx = document.getElementById("tcChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: lineChartData,
        options: chartOptions
    });
}



var useforDayChart = function(uday_data){
    var lineChartData = {
        labels : uday_data["day"],
        datasets : gen_datasets(uday_data)
    }

    var chartOptions = {
        responsive: true,
        legend : {
            position : "top",
            labels :{
                fontSize: 15,
                fontColor: "rgba(255,255,255,0.7)"
            }
        },
        title:{
            display: true,
            position: "top",
            text: "Biểu đồ thống kê số lượng nhà môi giới từ: " + fromday + " đến " + today,
            fontColor	: "rgba(255,255,255,0.7)",
            fontSize	: 20
        },
        scales : {
            yAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }],
            xAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }]
        }
    }

   
    $('#tcChart').remove(); // this is my <canvas> element
    $('#tcChartDad').append('<canvas class = "col-md bg-transparent" id="tcChart"><canvas>');
    var ctx = document.getElementById("tcChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: lineChartData,
        options: chartOptions
    });
}




var typeDayChart = function(tday_data){
    var lineChartData = {
        labels : tday_data["day"],
        datasets : gen_datasets(tday_data)
    }

    var chartOptions = {
        responsive: true,
        legend : {
            position : "left",
            labels :{
                fontSize: 15,
                fontColor: "rgba(255,255,255,0.7)"
            }
        },
        title:{
            display: true,
            position: "top",
            text: "Biểu đồ thống kê số lượng nhà môi giới từ: " + fromday + " đến " + today,
            fontColor	: "rgba(255,255,255,0.7)",
            fontSize	: 20
        },
        scales : {
            yAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }],
            xAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }]
        }
    }

   
    $('#tcChart').remove(); // this is my <canvas> element
    $('#tcChartDad').append('<canvas class = "col-md bg-transparent" id="tcChart"><canvas>');
    var ctx = document.getElementById("tcChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: lineChartData,
        options: chartOptions
    });
}


var priceDayChart = function(pday_data){
    var lineChartData = {
        labels : pday_data["day"],
        datasets : gen_datasets(pday_data)
    }

    var chartOptions = {
        responsive: true,
        legend : {
            position : "top",
            labels :{
                fontSize: 15,
                fontColor: "rgba(255,255,255,0.7)"
            }
        },
        title:{
            display: true,
            position: "top",
            text: "Biểu đồ thống kê số lượng nhà môi giới từ: " + fromday + " đến " + today,
            fontColor	: "rgba(255,255,255,0.7)",
            fontSize	: 20
        },
        scales : {
            yAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }],
            xAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(255,255,255,0.7)"
                  }
            }]
        }
    }

   
    $('#tcChart').remove(); // this is my <canvas> element
    $('#tcChartDad').append('<canvas class = "col-md bg-transparent" id="tcChart"><canvas>');
    var ctx = document.getElementById("tcChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: lineChartData,
        options: chartOptions
    });
}











var month_fromday = "2020-02-01",  month_today = "2020-03-01"
var month_data
$.ajax("/api/day", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": month_fromday, "today": month_today}),
    success : function(res){
        month_data = res["data"]
        //alert(res["message"])
    },
    error : function(){
        alert("Error")
    }
})






var fromday = "2020-02-01",  today = "2020-03-01"
var day_district_data
$.ajax("/api/day_district", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
       // alert(res["message"])
        day_district_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})


var day_usefor_data
$.ajax("/api/day_usefor", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
        //alert(res["message"])
        day_usefor_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})




var day_type_data
$.ajax("/api/day_type", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
        //alert(res["message"])
        day_type_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})



var day_price_data
$.ajax("/api/day_price", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
        //alert(res["message"])
        day_price_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})


var day_surface_data
$.ajax("/api/day_surface", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
        //alert(res["message"])
        day_surface_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})

var day_district_data
$.ajax("/api/day_district", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
        //alert(res["message"])
        day_district_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})



















monthChart(month_data)

surfaceDayChart(day_surface_data)

$(document).ready(function(){
    $("#monthBtn").click(function(){
        alert("Month")
    })
    $("#weekBtn").click(function(){
        alert("Week")
    })
    $("#districtBtn").click(function(){
        //alert("D")
        districtDayChart(day_district_data)
    })
    $("#useforBtn").click(function(){
        //alert("U")
        useforDayChart(day_usefor_data)
    })
    $("#typeBtn").click(function(){
        //alert("T")
        typeDayChart(day_type_data)
    })
    $("#priceBtn").click(function(){
        //alert("P")
        priceDayChart(day_price_data)
    })
    $("#surfaceBtn").click(function(){
        //alert("S")
        surfaceDayChart(day_surface_data)
    })
    
})