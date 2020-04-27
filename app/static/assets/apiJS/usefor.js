//DEFINE FUNCTION
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



var totalUseforChart = function(tu_data){
    var donutData = {
        labels: tu_data["use_for"],
        datasets: [
          {
            label: "Số lượng Agency",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: tu_data["sl"]
          }
        ]
      }
    var chartOptions = {
        responsive: true,
        legend: {
          position: "top",
          labels: {
            // This more specific font property overrides the global property
            fontSize: 15,
            fontColor	: "rgba(255,255,255,0.7)"

        }
        },
        title: {
          display: true,
          position: "top",
          text: "Biểu đồ thống kê số lượng nhà môi giới theo mục đích sử dụng",
          fontColor	: "rgba(255,255,255,0.7)",
          fontSize	: 20

        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor	: "rgba(255,255,255,0.1)"
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor	: "rgba(255,255,255,0.1)"
            }
          }]
        }
      }
    $('#useforChart').remove(); // this is my <canvas> element
    $('#useforDadChart').append('<canvas class = "col-md bg-transparent" id="useforChart"><canvas>');
    var ctx = document.getElementById("useforChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "doughnut",
        data: donutData,
        options: chartOptions
    });
}


var useforDistrictChart =function(ud_data){
    var barChartData = {
        labels : ud_data["use_for"],
        datasets : gen_datasets(ud_data)
    }

    var chartOptions = {
        responsive: true,
        legend : {
            position : "left",
            align : 'start',
            labels :{
                fontSize: 12,
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

    $('#tcUseforChart').remove(); // this is my <canvas> element
    $('#tcUseforChartDad').append('<canvas class = "col-md bg-transparent" id="tcUseforChart"><canvas>');
    var ctx = document.getElementById("tcUseforChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });

}

var useforTypeChart = function(ut_data){
    var barChartData = {
        labels : ut_data["use_for"],
        datasets : gen_datasets(ut_data)
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

    $('#tcUseforChart').remove(); // this is my <canvas> element
    $('#tcUseforChartDad').append('<canvas class = "col-md bg-transparent" id="tcUseforChart"><canvas>');
    var ctx = document.getElementById("tcUseforChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
}

var useforPriceChart = function(up_data){
    var barChartData = {
        labels : up_data["use_for"],
        datasets : gen_datasets(up_data)
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

    $('#tcUseforChart').remove(); // this is my <canvas> element
    $('#tcUseforChartDad').append('<canvas class = "col-md bg-transparent" id="tcUseforChart"><canvas>');
    var ctx = document.getElementById("tcUseforChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
}

var useforSurfaceChart = function(us_data){
    var barChartData = {
        labels : us_data["use_for"],
        datasets : gen_datasets(us_data)
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
            text: "Biểu đồ thống kê số lượng nhà môi giới nhóm cụm diện tích",
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

    $('#tcUseforChart').remove(); // this is my <canvas> element
    $('#tcUseforChartDad').append('<canvas class = "col-md bg-transparent" id="tcUseforChart"><canvas>');
    var ctx = document.getElementById("tcUseforChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
}


var useforDayChart = function(uday_data){
    var barChartData = {
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

   
    var ctx = document.getElementById("useforDayChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: barChartData,
        options: chartOptions
    });
}
















//CALL API
var len
var total_usefor_data
$.ajax('/api/usefor', {
    type : "post",
    async : false,
    success: function(res){
        total_usefor_data = res["data"]
        len = total_usefor_data["sl"].length
        //alert(total_usefor_data["sl"])
    },
    error: function(){
        alert("Error")
    }
})
for(var i = 0; i <len ; i++){
    $("#list").append('<li class="col-6 col-sm" style = "float:left; border: 1px solid #f2f2f2">\
    <a class="nav-link text-darker" href="/usefor/use_for='+ total_usefor_data["use_for"][i]+ '?">\
    <p style="text-align:center;">'+ total_usefor_data["sl"][i] + '+ Agencies chuyên</p><p style="text-align:center;">' + total_usefor_data["use_for"][i] +'</p>\
    </a></li>')
    
  }


var usefor_district_data
$.ajax('/api/usefor_district', {
    type : "post",
    async : false,
    success: function(res){
        usefor_district_data = res["data"]
        //alert(res["message"])
    },
    error: function(){
        alert("Error")
    }
})


var usefor_type_data
$.ajax('/api/usefor_type', {
    type : "post",
    async : false,
    success: function(res){
        usefor_type_data = res["data"]
    },
    error: function(){
     alert("Error")
    }
})


var usefor_price_data
$.ajax('/api/usefor_price', {
    type : "post",
    async : false,
    success: function(res){
        usefor_price_data = res["data"]
     //   alert(res["message"])
    },
    error: function(){
        alert("Error")
    }
})


var usefor_surface_data
$.ajax('/api/usefor_surface', {
    type : "post",
    async : false,
    success: function(res){
        usefor_surface_data = res["data"]
       // alert(res["message"])
    },
    error: function(){
        alert("Error")
    }
})


var usefor_day_data
var fromday = "2020-01-21", today = "2020-02-01"
$.ajax('/api/usefor_day', {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success: function(res){
        usefor_day_data = res["data"]
       // alert(res["message"])
    },
    error: function(){
        alert("Error")
    }
})














useforDayChart(usefor_day_data)
useforDistrictChart(usefor_district_data)
totalUseforChart(total_usefor_data)
//BAT SU KIEN
$(document).ready(function(){
    $("#totalUseforBtn").click(function(){
        totalUseforChart(total_usefor_data)
    })
    $("#monthUseforBtn").click(function(){
        alert("Month")
    })
    $("#weekUseforBtn").click(function(){
        alert("Week")
    })

    $("#usefor_district_btn").click(function(){
        useforDistrictChart(usefor_district_data)
    })
    $("#usefor_type_btn").click(function(){
        useforTypeChart(usefor_type_data)
    })
    $("#usefor_price_btn").click(function(){
        useforPriceChart(usefor_price_data)
    })
    $("#usefor_surface_btn").click(function(){
        useforPriceChart(usefor_surface_data)
    })
})