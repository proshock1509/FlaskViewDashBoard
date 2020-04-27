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



function gen_color(count){
    backgroundColor = []
    borderColor = []
    for (var i=0; i < count; i++){
        x = r()
        y = r()
        z = r()
        bgColor = 'rgba(' + x +',' + y + ',' + z + ',0.7)'
        bdColor = 'rgba(' + x +',' + y + ',' + z + ',1)'
        backgroundColor.push(bgColor)
        borderColor.push(bdColor)
    }
    datasets = {}
    datasets.backgroundColor = backgroundColor
    datasets.borderColor = borderColor
    return datasets
}




var totalUseforChart = function(t_data){
    var PieChartData = {
        labels : t_data["use_for"],
        datasets : [{
            label: "Số lượng Agency",
            backgroundColor : gen_color(t_data["sl"].length).backgroundColor,
            borderColor: gen_color(t_data["sl"].length).borderColor,
            borderWidth: 1,
            data : t_data["sl"]
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
            text: "Biểu đồ thống kê số lượng nhà môi giới theo nhu cầu",
            fontColor	: "rgba(0,0,0,0.7)",
            fontSize	: 20
        }
        
    }


    $('#ovChart').remove(); // this is my <canvas> element
    $('#ovDadChart').append('<canvas class = "col-md bg-transparent" id="ovChart"><canvas>');
    var ctx = document.getElementById("ovChart").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "doughnut",
        data: PieChartData,
        options: chartOptions
    });
}


















var total_usefor_data
$.ajax('/api/usefor', {
    type: 'post',
    async : false,
    contentType: "application/json",
    success : function(res) {
        total_usefor_data = res["data"]
        //alert(total_usefor_data["use_for"])        
    },
    error: function() {
        alert("Error");
    }
});
totalUseforChart(total_usefor_data)


var count = 12
var usefor_l = total_usefor_data["use_for"]
usefor_l.forEach(d=>{
    d_id =removeAccents(d)
    $("#list").append('\
    <div class="container-fluid justify-content-center">\
        <h3 class="mb-5" style="text-align:center;font-size:1.2em">___'+ d +'___</h3>\
        <div class = "row justify-content-center" id ="'+d_id+'">\
        </div>\
    </div>\
    ')

    var agency_items_data
    $.ajax("/api/list/usefor_items", {
        type : "post",
        async : false,
        dataType: 'json',
        contentType : "application/json",
        data : JSON.stringify({"use_for": d, "count": count}),
        success : function(res){
            agency_items_data = res["data"]
            //console.log(agency_items_data)
        },
        error : function(){
            alert("Error")
        }
    })

    agency_items_data.forEach(element => {
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
                <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
                <p class="text-danger ls-1 mb-0" style="font-size:0.8rem">' +element["count"] + '+ BĐS '+ element["use_for"] +'</p>\
                <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
                <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
                <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
            </div>\
        </a>\
        </div>\
        </div>');
    })



})



$(document).ready(function(){
    $("#totalBtn").click(function(){
        totalUseforChart(total_usefor_data)
    })
    $('#monthBtn').click(function(){
        alert("month")
    })
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

