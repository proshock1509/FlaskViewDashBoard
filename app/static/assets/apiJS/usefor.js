//DEFINE FUNCTION
function r() { return Math.floor(Math.random() * 255) }
function gen_datasets(data){
    datasets = []
    for (district in data["sl"]){
        x = r()
        y = r()
        z = r()
        set = {}
        set["label"] = district
        set["data"] = data["sl"][district]
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
            label: "Population (millions)",
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
            position : "top",
            labels :{
                fontSize: 15,
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
            position : "top",
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

}

var useforSurfaceChart = function(us_data){

}
















var total_usefor_data
var usefor_district_data, usefor_type_data, usefor_price_data
var usefor_surface_data
//CALL API
$.ajax('/api/usefor', {
    type : "post",
    async : false,
    success: function(res){
        total_usefor_data = res["data"]
        //alert(total_usefor_data["sl"])
    },
    error: function(){
        alert("Error")
    }
})

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
        alert("Price")
    })
    $("#usefor_surface_btn").click(function(){
        alert("Surface")
    })
})