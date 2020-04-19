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








var totalPriceChart = function(tp_data){
    var donutData = {
        labels: tp_data["price_level"],
        datasets: [
          {
            label: "Số lượng Agency",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#aad668", "#ffff00",
            "#3cba9f","#e8c3b9","#c45850","#c900ff", "#ff0097", "#ff000c"],
            data: tp_data["sl"]
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





var priceDistrictChart =function(pd_data){
    var barChartData = {
        labels : pd_data["price_level"],
        datasets : gen_datasets(pd_data)
        
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




var priceUseforChart = function(pu_data){
    var barChartData = {
        labels : pu_data["price_level"],
        datasets : gen_datasets(pu_data)
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



var priceTypeChart = function(pt_data){
    var barChartData = {
        labels : pt_data["price_level"],
        datasets : gen_datasets(pt_data)
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





var priceSurfaceChart = function(ps_data){
    var barChartData = {
        labels : ps_data["price_level"],
        datasets : gen_datasets(ps_data)
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
            text: "Biểu đồ thống kê số lượng nhà môi giới nhóm cụm diện tích sử dụng",
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





var priceDayChart = function(pday_data){
    var barChartData = {
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

   
    var ctx = document.getElementById("dayChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: barChartData,
        options: chartOptions
    });
}











































var total_data
$.ajax("/api/price", {
    type : "post",
    async : false,
    success : function(res){
        total_data = res["data"]
        //alert(total_data["price_level"])
    },
    error : function(){
        alert("Error")
    }
})


var price_district_data
$.ajax("/api/price_district", {
    type : "post",
    async : false,
    success : function(res){
        //alert(res["message"])
        price_district_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})



var price_usefor_data
$.ajax("/api/price_usefor", {
    type : "post",
    async : false,
    success : function(res){
        //alert(res["data"]["price_level"])
        price_usefor_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})




var price_type_data
$.ajax("/api/price_type", {
    type : "post",
    async : false,
    success : function(res){
       //alert(res["data"]["price_level"])
        price_type_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})



var price_surface_data
$.ajax("/api/price_surface", {
    type : "post",
    async : false,
    success : function(res){
        //alert(res["data"]["price_level"])
        price_surface_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})


var price_day_data
var fromday = "2020-01-21",  today = "2020-02-01"
$.ajax("/api/price_day", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
        price_day_data = res["data"]
        //alert(res["data"]["day"])
    },
    error : function(){
        alert("Error")
    }
})























totalPriceChart(total_data)
priceDistrictChart(price_district_data)
priceDayChart(price_day_data)
$(document).ready(function(){
    $("#totalBtn").click(function(){
        //alert("total")
        totalPriceChart(total_data)
    })
    $("#monthBtn").click(function(){
        alert("Month")
    })
    $("#weekBtn").click(function(){
        alert("Week")
    })
    $("#districtBtn").click(function(){
        //alert("D")
        priceDistrictChart(price_district_data)
    })
    $("#useforBtn").click(function(){
        //alert("U")
        priceUseforChart(price_usefor_data)
    })
    $("#typeBtn").click(function(){
        //alert("T")
        priceTypeChart(price_type_data)
    })
    $("#surfaceBtn").click(function(){
        //alert("S")
        priceSurfaceChart(price_surface_data)
    })
    
})