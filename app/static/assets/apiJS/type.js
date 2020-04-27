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





var totalTypeChart = function(tt_data){
    var donutData = {
        labels: tt_data["type_re_name"],
        datasets: [
          {
            label: "Số lượng Agency",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#aad668", "#ffff00",
            "#3cba9f","#e8c3b9","#c45850","#c900ff", "#ff0097", "#ff000c"],
            data: tt_data["sl"]
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
          text: "Biểu đồ thống kê số lượng nhà môi giới theo nhu cầu sử dụng",
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




var typeDistrictChart =function(td_data){
    var barChartData = {
        labels : td_data["type_re_name"],
        datasets : gen_datasets(td_data)
        
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






var typeUseforChart = function(tu_data){
    var barChartData = {
        labels : tu_data["type_re_name"],
        datasets : gen_datasets(tu_data)
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





var typePriceChart = function(tp_data){
    var barChartData = {
        labels : tp_data["type_re_name"],
        datasets : gen_datasets(tp_data)
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




var typeSurfaceChart = function(ts_data){
    var barChartData = {
        labels : ts_data["type_re_name"],
        datasets : gen_datasets(ts_data)
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

    $('#tcChart').remove(); // this is my <canvas> element
    $('#tcChartDad').append('<canvas class = "col-md bg-transparent" id="tcChart"><canvas>');
    var ctx = document.getElementById("tcChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
}



var typeDayChart = function(tday_data){
    var barChartData = {
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

   
    var ctx = document.getElementById("dayChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "line",
        data: barChartData,
        options: chartOptions
    });
}






var total_data
var len
$.ajax("/api/type", {
    type : "post",
    async : false,
    success : function(res){
        total_data = res["data"]
        len = total_data["sl"].length
    },
    error : function(){
        alert("Error")
    }
})

for(var i = 0; i <len ; i++){
    $("#list").append('<li class="col-lg col-sm-6" style = "float:left; border: 1px solid #f2f2f2">\
    <a class="nav-link text-darker" href="/type/type_re_name='+ total_data["type_re_name"][i]+ '?">\
    <p style="text-align:center;">'+ total_data["sl"][i] + '+ Agencies chuyên</p><p style="text-align:center;">' + total_data["type_re_name"][i] +'</p>\
    </a></li>')
    
  }


var type_district_data
$.ajax("/api/type_district", {
    type : "post",
    async : false,
    success : function(res){
        type_district_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})


var type_usefor_data
$.ajax("/api/type_usefor", {
    type : "post",
    async : false,
    success : function(res){
        type_usefor_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})


var type_price_data
$.ajax("/api/type_price", {
    type : "post",
    async : false,
    success : function(res){
        type_price_data = res["data"]
        //alert(type_price_data["type_re_name"])
    },
    error : function(){
        alert("Error")
    }
})





var type_surface_data
$.ajax("/api/type_surface", {
    type : "post",
    async : false,
    success : function(res){
        type_surface_data = res["data"]
        //alert(type_surface_data["type_re_name"])
    },
    error : function(){
        alert("Error")
    }
})





var type_day_data
var fromday = "2020-01-21",  today = "2020-02-01"
$.ajax("/api/type_day", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify({"fromday": fromday, "today": today}),
    success : function(res){
        type_day_data = res["data"]
       // alert(type_day_data["type_re_name"])
    },
    error : function(){
        alert("Error")
    }
})








totalTypeChart(total_data)
typeDistrictChart(type_district_data)
typeDayChart(type_day_data)


$(document).ready(function(){
    $("#totalBtn").click(function(){
        totalTypeChart(total_data)
    })
    $("#monthBtn").click(function(){
        alert("Month")
    })
    $("#weekBtn").click(function(){
        alert("Week")
    })
    $("#districtBtn").click(function(){
        typeDistrictChart(type_district_data)
    })
    $("#useforBtn").click(function(){
        typeUseforChart(type_usefor_data)
    })
    $("#priceBtn").click(function(){
        typePriceChart(type_price_data)
    })
    $("#surfaceBtn").click(function(){
        typeSurfaceChart(type_surface_data)
    })
})