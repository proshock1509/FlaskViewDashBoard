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

function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str.replace(/[ ,.]/g,'');
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
totalDistrictChart(total_district_data)

var count = 8
var districts_l = total_district_data["district_ten"].slice(1,-1)
districts_l.forEach(d=>{
    d_id =removeAccents(d)
    $("#list").append('\
    <div class="container-fluid justify-content-center">\
        <h3 class="mb-5" style="text-align:center;font-size:1.2em">___'+ d +'___</h3>\
        <div class = "row justify-content-center" id ="'+d_id+'">\
        </div>\
    </div>\
    ')

    var district_agency_items_data
    $.ajax("/api/list/district_items", {
        type : "post",
        async : false,
        dataType: 'json',
        contentType : "application/json",
        data : JSON.stringify({"district_ten": d, "count": count}),
        success : function(res){
            district_agency_items_data = res["data"]
        },
        error : function(){
            alert("Error")
        }
    })

    district_agency_items_data.forEach(element => {
        $("#"+d_id).append('\
        <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4 m-xl-0 m-lg-0 mb-xl-5 mb-lg-3 mb-md-2"   style = "box-shadow: 5px 8px 18px #888888;">\
        <div class="card bg-transparent shadow thumb">\
        <a href="#">\
            <div class="card-header bg-transparent" >\
                <strong  id = "test" class="text-darker ls-1 mb-0">' +element["contact"] + '</strong>\
                <p class="text-darker ls-1 mb-0"  style="font-size:0.8rem">' +element["contact_mobile_phone"] + '</p>\
                <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
                <img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
                <hr style="margin-bottom:0.5rem;margin-top:1rem">\
                <p class="text-danger ls-1 mb-0" style="font-size:0.8rem">' +element["count"] + '+ BĐS từ '+ element["district_ten"] +'</p>\
                <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
                <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
                <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
                <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
            </div>\
        </a>\
        </div>\
        <div class="row bg-white justify-content-left p-1">\
        <a href="#" class="ml-4">Nhà môi giới tương tự</a>\
        </div>\
        </div>');
    })



})



$(document).ready(function(){
    
    $('div.thumb').mouseleave(function(event) {
		$(this).stop().animate({
            opacity : '1'
        }, 100);
        $(this).find(".text-danger").removeClass("font-weight-bold")
    });
	$('div.thumb').mouseover(function(event) {
		$(this).stop().animate({
            opacity : '0.5'
        }, 10);

        $(this).find(".text-danger").addClass("font-weight-bold")
       
       
    });

})

