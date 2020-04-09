var monthChart = function(data){
    $('#myChart').remove(); // this is my <canvas> element
    $('#myChartDad').append('<canvas class = "col-md bg-transparent" id="myChart"><canvas>');
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: data["district_ten"].slice(0,6),
          datasets: [{
              label: 'Số lượng Môi giới',
              data: data["sl"].slice(0,6),
              backgroundColor: [
                  'rgba(255, 99, 132, 0.4)',
                  'rgba(54, 162, 235, 0.4)',
                  'rgba(255, 206, 86, 0.4)',
                  'rgba(75, 192, 192, 0.4)',
                  'rgba(153, 102, 255, 0.4)',
                  'rgba(255, 159, 64, 0.4)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
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
  
  
      });
  }
  
  


var weekChart = function(wdata){
$('#myChart').remove(); // this is my <canvas> element
$('#myChartDad').append('<canvas class = "col-md bg-transparent" id="myChart"><canvas>');

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: wdata["district_ten"].slice(0,6),
        datasets: [{
            label: 'Số lượng Môi giới',
            data: wdata["sl"].slice(0,6),
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
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


    });

}



var districtUseforChart = function(du_data){
    var barChartData = {
        labels: du_data["district_ten"],
        datasets: [
          {
            label: "Cho thuê", //RENT
            backgroundColor: 'rgba(255, 206, 86, 0.4)',
            borderColor: 'rgba(255, 206, 86,1)',
            borderWidth: 1,
            data: du_data["RENT"],
            fontSize : 24
          },
          {
            label: "Bán", // SALE
            backgroundColor:'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            data: du_data["SALE"]
          }
        ]
    };
      
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
          text: "Biểu đồ thống kê số lượng nhà môi giới theo nhu cầu sử dụng",
          fontColor	: "rgba(255,255,255,0.7)",
          fontSize	: 20

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
      
    $('#tcChart').remove(); // this is my <canvas> element
    $('#tcChartDad').append('<canvas class = "col-md bg-transparent" id="tcChart"><canvas>');
    var ctx = document.getElementById("tcChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
      
      
}


  
var districtTypeChart = function(dt_data){
    var barChartData = {
        labels: dt_data["district_ten"],
        datasets: [
          {
            label: "Biệt thự liền kề", //RENT
            backgroundColor: 'rgba(255, 206, 86, 0.4)',
            borderColor: 'rgba(255, 206, 86,1)',
            borderWidth: 1,
            data: dt_data["Biệt thự liền kề"]
          },
          {
            label: "Căn hộ, chung cư", // SALE
            backgroundColor:'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            data: dt_data["Căn hộ, chung cư"]
          },
          {
            label: "Cửa hàng ki-ốt", //RENT
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            borderColor: 'rgba(255, 0, 0,1)',
            borderWidth: 1,
            data: dt_data["Cửa hàng ki-ốt"],
          },
          {
            label: "Kho, nhà xưởng", //RENT
            backgroundColor: 'rgba(158, 206, 86, 0.4)',
            borderColor: 'rgba(158, 206, 86,1)',
            borderWidth: 1,
            data: dt_data["Kho, nhà xưởng"],
          },
          {
            label: "Nhà mặt phố", //RENT
            backgroundColor: 'rgba(0, 255, 170, 0.4)',
            borderColor: 'rgba(0, 255, 170,1)',
            borderWidth: 1,
            data: dt_data["Nhà mặt phố"],
          },
          {
            label: "Nhà riêng để ở", //RENT
            backgroundColor: 'rgba(0, 112, 255, 0.4)',
            borderColor: 'rgba(0, 112, 255,1)',
            borderWidth: 1,
            data: dt_data["Nhà riêng để ở"],
          },
          {
            label: "Nhà trọ, phòng trọ", //RENT
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderColor: 'rgba(255, 255, 255,1)',
            borderWidth: 1,
            data: dt_data["Nhà trọ, phòng trọ"],
          },
          {
            label: "Văn phòng", //RENT
            backgroundColor: 'rgba(209, 0, 255, 0.4)',
            borderColor: 'rgba(209, 0, 255,1)',
            borderWidth: 1,
            data: dt_data["Văn phòng"],
          },
          {
            label: "Bất động sản loại khác", //RENT
            backgroundColor: 'rgba(139, 243, 216, 0.4)',
            borderColor: 'rgba(139, 243, 216,1)',
            borderWidth: 1,
            data: dt_data["Bất động sản loại khác"],
          },
        ]
    };
      
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
          text: "Biểu đồ thống kê số lượng nhà môi giới theo nhu cầu sử dụng",
          fontColor	: "rgba(255,255,255,0.7)",
          fontSize	: 20

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
      
    $('#tcChart').remove(); // this is my <canvas> element
    $('#tcChartDad').append('<canvas class = "col-md bg-transparent" id="tcChart"><canvas>');
    var ctx = document.getElementById("tcChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
    
      
}




var districtPriceChart = function(dp_data){
    var barChartData = {
        labels : dp_data["district_ten"],
        datasets : [
            {
                label : "Giá rẻ",
                backgroundColor : 'rgba(255, 206, 86, 0.4)',
                borderColor : 'rgba(255,206,86,1)',
                borderWidth : 1,
                data : dp_data["Giá rẻ"]
            },
            {
                label: "Tầm trung", // SALE
                backgroundColor:'rgba(153, 102, 255, 0.4)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                data: dt_data["Tầm trung"]
              },
              {
                label: "Cao cấp", //RENT
                backgroundColor: 'rgba(255, 0, 0, 0.4)',
                borderColor: 'rgba(255, 0, 0,1)',
                borderWidth: 1,
                data: dt_data["Cao cấp"],
              },
              {
                label: "Khác", //RENT
                backgroundColor: 'rgba(158, 206, 86, 0.4)',
                borderColor: 'rgba(158, 206, 86,1)',
                borderWidth: 1,
                data: dt_data["Khác"],
              }
        ]
    }
}



















var data, wdata, district_usefor_data, district_type_data,district_price_data,district_surface_data ;
$.ajax('/api/district', {
    type: 'post',
    async : false,
    contentType: "application/json",
    success : function(res) {
    data = res["data"]
      //alert(data)        
    },
    error: function() {
        alert("Error");
    }
});

contentData = JSON.stringify({"fromday" : "2020-01-23", "today" : "2020-01-23"})
$.ajax('/api/district_day', {
    type: 'post',
    data: contentData,
    async : false,
    dataType: 'json',
    contentType : "application/json",
    success : function(res) {
    wdata = res["data"]
      //alert(res["data"])        
    },
    error: function() {
        alert("Error");
    }
});

$.ajax('/api/district_usefor', {
    type: "post",
    async : false,
    success : function(res){
        district_usefor_data = res["data"]
        //alert(res["data"]["district_ten"])
    },
    error: function(){
        alert("Error")
    }
})

$.ajax('/api/district_type', {
    type: "post",
    async : false,
    success : function(res){
        district_type_data = res["data"]
        //alert(res["data"]["district_ten"])
    },
    error: function(){
        alert("Error")
    }
})

$.ajax('/api/district_price', {
    type: "post",
    async : false,
    success: function(res){
        alert(res["data"]["district_ten"])
        district_price_data = res["data"]
    },
    error: function(){
        alert("Error")
    }
})










districtUseforChart(district_usefor_data)
monthChart(data)
$(document).ready(function(){
  $("#mdischart").click(function(){
  	monthChart(data);
  })
  $("#wdischart").click(function(){
  	weekChart(wdata);
  })
  $("#district_usefor_chart").click(function(){
  	districtUseforChart(district_usefor_data);
  })
  $("#district_type_chart").click(function(){
    districtTypeChart(district_type_data);
})
});