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






var totalDistrictChart = function(t_data){
    var TreeChartData = {
        labels : t_data["district_ten"].slice(1,-1),
        datasets : [{
            label: "Số lượng Agency",
            backgroundColor : "rgba(153, 102, 255,0.6)",
            borderColor: "rgba(153, 102, 255,1)",
            borderWidth: 1,
            data : t_data["sl"].slice(1,-1)
        }]
        
    }


    var chartOptions = {
        responsive: true,
        legend : {
            position : "top",
            align : 'start',
            labels :{
                fontSize: 10,
                fontColor: "rgba(0,0,0,0.7)"
            }
        },
        title:{
            display: true,
            position: "top",
            text: "Biểu đồ thống kê số lượng nhà môi giới nhóm cụm khu vực",
            fontColor	: "rgba(0,0,0,0.7)",
            fontSize	: 20
        },
        scales : {
            yAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(0,0,0,0.7)"
                  }
            }],
            xAxes : [{
                ticks: {
                    beginAtZero: true,
                    fontColor	: "rgba(0,0,0,0.7)"
                  }
            }]
        }
    }


    $('#ovChart').remove(); // this is my <canvas> element
    $('#ovDadChart').append('<canvas class = "col-md bg-transparent" id="ovChart"><canvas>');
    var ctx = document.getElementById("ovChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: TreeChartData,
        options: chartOptions
    });
}

var total_district_data
$.ajax('/api/district', {
    type: 'post',
    async : false,
    contentType: "application/json",
    success : function(res) {
        total_district_data = res["data"]
        //alert(total_district_data["district_ten"])        
    },
    error: function() {
        alert("Error");
    }
});


$(document).ready(function(){
    totalDistrictChart(total_district_data)
})