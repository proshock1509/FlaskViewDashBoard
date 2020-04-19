var district_agency_items_data
$.ajax("/api/district_agency_items", {
    type : "post",
    async : false,
    success : function(res){
        district_agency_items_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})


district_agency_items_data.forEach(element => {
    $("#district_agency_items").append('\
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0"   style = "box-shadow: 5px 8px 18px #888888;">\
    <div class="card bg-transparent shadow thumb">\
    <a href="#">\
        <div class="card-header bg-transparent style="font-size:1rem"" >\
            <strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong>\
            <p class="text-darker ls-1 mb-0" >' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem">\
            <p class="text-danger ls-1 mb-0 ">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
    </a>\
    </div>\
    </div>');
})



var usefor_agency_items_data
$.ajax("/api/usefor_agency_items", {
    type : "post",
    async : false,
    success : function(res){
        usefor_agency_items_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})

usefor_agency_items_data.forEach(element => {
    $("#usefor_agency_items").append('\
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0"   style = "box-shadow: 5px 8px 18px #888888;">\
    <div class="card bg-transparent shadow thumb">\
    <a href="#">\
        <div class="card-header bg-transparent style="font-size:1rem"" >\
            <strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong>\
            <p class="text-darker ls-1 mb-0" >' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem">\
            <p class="text-darker ls-1 mb-0 ">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-danger  ls-1 mb-0">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
    </a>\
    </div>\
    </div>');
});




var type_agency_items_data
$.ajax("/api/type_agency_items", {
    type : "post",
    async : false,
    success : function(res){
        type_agency_items_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})

type_agency_items_data.forEach(element => {
    $("#type_agency_items").append('\
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0"   style = "box-shadow: 5px 8px 18px #888888;">\
    <div class="card bg-transparent shadow thumb">\
    <a href="#">\
        <div class="card-header bg-transparent style="font-size:1rem"" >\
            <strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong>\
            <p class="text-darker ls-1 mb-0" >' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem">\
            <p class="text-darker ls-1 mb-0  ">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-danger ls-1 mb-0">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
    </a>\
    </div>\
    </div>');
});



var price_agency_items_data
$.ajax("/api/price_agency_items", {
    type : "post",
    async : false,
    success : function(res){
        price_agency_items_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})


price_agency_items_data.forEach(element => {
    $("#price_agency_items").append('\
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0"   style = "box-shadow: 5px 8px 18px #888888;">\
    <div class="card bg-transparent shadow thumb">\
    <a href="#">\
        <div class="card-header bg-transparent style="font-size:1rem"" >\
            <strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong>\
            <p class="text-darker ls-1 mb-0" >' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem">\
            <p class="text-darker ls-1 mb-0 ">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-danger ls-1 mb-0">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
    </a>\
    </div>\
    </div>');
});


var surface_agency_items_data

$.ajax("/api/surface_agency_items", {
    type : "post",
    async : false,
    success : function(res){
        surface_agency_items_data = res["data"]
    },
    error : function(){
        alert("Error")
    }
})

surface_agency_items_data.forEach(element => {
    $("#surface_agency_items").append('\
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0"   style = "box-shadow: 5px 8px 18px #888888;">\
    <div class="card bg-transparent shadow thumb">\
    <a href="#">\
        <div class="card-header bg-transparent style="font-size:1rem"" >\
            <strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <p class="text-darker ls-1 mb-0" >' +element["contact_mobile_phone"] + '</p>\
            <img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover;;" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem">\
            <p class="text-darker ls-1 mb-0 ">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-darker ls-1 mb-0">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-danger ls-1 mb-0">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
    </a>\
    </div>\
    </div>');
});


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
    $("img").css({"filter": "drop-shadow(8px 8px 10px gray)"})

    $("#all_agency_items p").css({"font-size": "0.8rem"})
    
  });