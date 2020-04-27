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

var data 

$.ajax("/api/dimention", {
  type : "post",
  async : false,
  dataType: 'json',
  contentType : "application/json",
  data : $("#data").text() ,
  success : function(res){
      data = res
  },
  error : function(){
      alert("Error")
  }
})




var count_top = 12
var top_data_send = {"collection": data["collection"], query : data["query"], count : count_top}
var top_data_res 
// console.log(data["query"])
$.ajax("/api/category/top_items", {
  type : "post",
  async : false,
  dataType: 'json',
  contentType : "application/json",
  data : JSON.stringify(top_data_send),
  success : function(res){
    top_data_res = res["data"]
    console.log(top_data_res)
  },
  error : function(){
      alert("Error")
  }
})

const top_item_name = Object.values(data["query"])[0];


$("#top_name").append('\
  <p style= "font-size:1.7rem;">' + top_item_name+ '</p>\
')





// alert(data.dimention)
top_data_res.forEach((element)=>{
  $("#top_items").append('\
  <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4 m-xl-0 m-lg-0"   style = "box-shadow: 1px 1px 18px #888888;border: 1px solid #f2f2f2">\
  <div class="card bg-transparent shadow thumb">\
      <div class="card-header bg-transparent" >\
          <a href="/agency/'+element["contact_mobile_phone"]+'"><strong  id = "test" class="text-darker ls-1 mb-0">' +element["contact"] + '</strong><br>\
          <strong class="text-darker ls-1 mb-0"  style="font-size:0.8rem">' +element["count"] + '+BĐS ' + top_item_name +'</strong></a>\
          <p class="text-darker ls-1 mb-0"  style="font-size:0.8rem">' +element["contact_mobile_phone"] + '</p>\
          <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
          <a href="/agency/'+element["contact_mobile_phone"]+'"><img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>\
          <hr style="margin-bottom:0.2rem;margin-top:0.2rem">\
          <u class="text-darker" style="font-size:0.8rem">Thuộc tính BĐS chủ yếu</u></a>\
          <hr style="margin-bottom:0.2rem;margin-top:0.2rem">\
          <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_district"][0] + '+ BĐS từ <a href="/district/district_ten=' + element["common_district"][1] + '?">'+ element["common_district"][1] +'</a></p>\
          <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_usefor"][0] + '+ BĐS <a href="/usefor/use_for=' + element["common_usefor"][1] + '?">'+ element["common_usefor"][1] +'</a></p>\
          <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS <a href="/type/type_re_name=' + element["common_type"][1] + '?">'+ element["common_type"][1] +'</a></p>\
          <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS <a href="/price/price_level=' + element["common_price"][1] + '?">'+ element["common_price"][1] +'</a></p>\
          <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS <a href="/surface/surface_level=' + element["common_surface"][1] + '?">'+ element["common_surface"][1] +'<sup>2</sup></a></p>\
      </div>\
  </div>\
  </div>')
})

















var list_cats = data["dimention_name"]
//console.log(list_cats)

list_cats.forEach((cat,index)=>{
  cat_id = removeAccents(cat)
  $("#list").append('\
        <div class="row container-fluid mt-xl-5 mt-lg-3 mt-md-2" style = "background-color:rgba(200, 250, 255, 0.5);padding-top:0.8rem;border: 1px solid #f2f2f2" >\
          <p class="" style="font-size: 1.3rem;">'+ cat +'</p>\
        </div>\
        <div style="margin:auto;" class = "row justify-content-center" id ="'+cat_id+'">\
        </div>\
  ')

  var items
  var count = 8
  var data_send = {"collection": data["collection"], "dimention": data["dimention"][index], query : data["query"], count : count}
  const key = Object.keys(data["query"])[0];
  const val = data["query"][key];
  // console.log(key)
  // console.log(val)

  $.ajax("/api/category/items", {
    type : "post",
    async : false,
    dataType: 'json',
    contentType : "application/json",
    data : JSON.stringify(data_send),
    success : function(res){
        items = res["data"]
        // console.log(items)
    },
    error : function(){
        alert("Error")
    }
  })

  items.forEach((element)=>{
    $("#"+cat_id).append('\
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4 m-xl-0 m-lg-0 "   style = "box-shadow: 1px 1px 18px #888888;border: 1px solid #f2f2f2">\
    <div class="card bg-transparent shadow thumb">\
        <div class="card-header bg-transparent" >\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><strong  id = "test" class="text-darker ls-1 mb-0">' +element["contact"] + '</strong><br>\
            <strong class="text-darker ls-1 mb-0"  style="font-size:0.8rem">' +element["count"] + '+BĐS ' + val +'</strong></a>\
            <p class="text-darker ls-1 mb-0"  style="font-size:0.8rem">' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>\
            <hr style="margin-bottom:0.2rem;margin-top:0.2rem">\
            <u class="text-darker" style="font-size:0.8rem">Thuộc tính BĐS chủ yếu</u></a>\
            <hr style="margin-bottom:0.2rem;margin-top:0.2rem">\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_district"][0] + '+ BĐS từ <a href="/district/district_ten=' + element["common_district"][1] + '?">'+ element["common_district"][1] +'</a></p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_usefor"][0] + '+ BĐS <a href="/usefor/use_for=' + element["common_usefor"][1] + '?">'+ element["common_usefor"][1] +'</a></p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS <a href="/type/type_re_name=' + element["common_type"][1] + '?">'+ element["common_type"][1] +'</a></p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS <a href="/price/price_level=' + element["common_price"][1] + '?">'+ element["common_price"][1] +'</a></p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS <a href="/surface/surface_level=' + element["common_surface"][1] + '?">'+ element["common_surface"][1] +'<sup>2</sup></a></p>\
        </div>\
    </div>\
    </div>');
  })

  
})

$(document).ready(function(){
  $('div.thumb').mouseleave(function(event) {
  $(this).find("img").stop().animate({
          opacity : '1'
      }, 100);
      $(this).find(".text-danger").removeClass("font-weight-bold")
  });
$('div.thumb').mouseover(function(event) {
  $(this).find("img").stop().animate({
          opacity : '0.5'
      }, 10);

      $(this).find(".text-danger").addClass("font-weight-bold")
     
     
  });
});