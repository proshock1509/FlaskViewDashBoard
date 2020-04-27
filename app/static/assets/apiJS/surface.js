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















var totalSurfaceChart = function(ts_data){
    var donutData = {
        labels: ts_data["surface_level"],
        datasets: [
          {
            label: "Số lượng Agency",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#aad668", "#ffff00",
            "#3cba9f","#e8c3b9","#c45850","#c900ff", "#ff0097", "#ff000c"],
            data: ts_data["sl"]
          }
        ]
      }
    var chartOptions = {
        responsive: true,
        legend: {
          position: "left",
          labels: {
            // This more specific font property overrides the global property
            fontSize: 12,
            fontColor	: "rgba(255,255,255,0.7)"

        }
        },
        title: {
          display: true,
          position: "top",
          text: "Biểu đồ thống kê số lượng nhà môi giới theo nhóm diện tích",
          fontColor	: "rgba(255,255,255,0.7)",
          fontSize	: 20

        }
      }
    $('#ovChart').remove(); // this is my <canvas> element
    $('#ovDadChart').append('<canvas class = "col-md bg-transparent" id="ovChart"><canvas>');
    var ctx = document.getElementById("ovChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "doughnut",
        data: donutData,
        options: chartOptions
    });
}





var surfaceDistrictChart =function(sd_data){
    var barChartData = {
        labels : sd_data["surface_level"],
        datasets : gen_datasets(sd_data)
        
    }

    var chartOptions = {
        responsive: true,
        legend : {
            position : "top",
            align : 'start',
            labels :{
                fontSize: 10,
                fontColor: "rgba(255,255,255,0.7)"
            }
        },
        title:{
            display: true,
            position: "top",
            text: "Biểu đồ thống kê số lượng nhà môi giới nhóm cụm khu vực",
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
        type: "bar",
        data: barChartData,
        options: chartOptions
    });

}




var surfaceUseforChart = function(su_data){
    var barChartData = {
        labels : su_data["surface_level"],
        datasets : gen_datasets(su_data)
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
            text: "Biểu đồ thống kê số lượng nhà môi giới nhóm cụm mục đích sử dụng",
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
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
}




var surfaceTypeChart = function(st_data){
    var barChartData = {
        labels : st_data["surface_level"],
        datasets : gen_datasets(st_data)
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
            text: "Biểu đồ thống kê số lượng nhà môi giới nhóm cụm nhu cầu sử dụng",
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
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
}





var surfacePriceChart = function(sp_data){
    var barChartData = {
        labels : sp_data["surface_level"],
        datasets : gen_datasets(sp_data)
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
            text: "Biểu đồ thống kê số lượng nhà môi giới nhóm cụm phân khúc",
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
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
}




var surfaceDayChart = function(sday_data){
    var barChartData = {
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

   
    var ctx = document.getElementById("dayChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: barChartData,
        options: chartOptions
    });
}









var total_data
var len
$.ajax("/api/surface", {
    type : "post",
    async : false,
    success : function(res){
        total_data = res["data"]
        len = total_data["sl"].length
        //alert(res["message"])
    },
    error : function(){
        alert("Error")
    }
})
for(var i = 0; i <len ; i++){
    $("#list").append('<li class="col-lg col-sm-6" style = "float:left; border: 1px solid #f2f2f2">\
    <a class="nav-link text-darker" href="/surface/surface_level='+ total_data["surface_level"][i]+ '?">\
    <p style="text-align:center;">'+ total_data["sl"][i] + '+ Agencies với</p><p style="text-align:center;">BĐS Diện tích ' + total_data["surface_level"][i] +'</p>\
    </a></li>')
    
  }

var surface_district_data
$.ajax("/api/surface_district", {
    type : "post",
    async : false,
    success : function(res){
        //alert(res["message"])
        surface_district_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})



var surface_usefor_data
$.ajax("/api/surface_usefor", {
    type : "post",
    async : false,
    success : function(res){
        //alert(res["message"])
        surface_usefor_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})



var surface_type_data
$.ajax("/api/surface_type", {
    type : "post",
    async : false,
    success : function(res){
        //alert(res["message"])
        surface_type_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})



var surface_price_data
$.ajax("/api/surface_price", {
    type : "post",
    async : false,
    success : function(res){
        surface_price_data = res["data"]
        //alert(res["message"])
    },
    error : function(){
        alert("Error")
    }
})



var surface_day_data
var fromday = "2020-01-21",  today = "2020-02-01"
$.ajax("/api/surface_day", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
        surface_day_data = res["data"]
       // alert(res["message"])
    },
    error : function(){
        alert("Error")
    }
})















totalSurfaceChart(total_data)
surfaceDistrictChart(surface_district_data)
surfaceDayChart(surface_day_data)
$(document).ready(function(){
    $("#totalBtn").click(function(){
        //alert("total")
        totalSurfaceChart(total_data)
    })
    $("#monthBtn").click(function(){
        alert("Month")
    })
    $("#weekBtn").click(function(){
        alert("Week")
    })
    $("#districtBtn").click(function(){
        //alert("D")
        surfaceDistrictChart(surface_district_data)
    })
    $("#useforBtn").click(function(){
        //alert("U")
        surfaceUseforChart(surface_usefor_data)
    })
    $("#typeBtn").click(function(){
        //alert("T")
        surfaceTypeChart(surface_type_data)
    })
    $("#priceBtn").click(function(){
        //alert("P")
        surfacePriceChart(surface_price_data)
    })
    
})