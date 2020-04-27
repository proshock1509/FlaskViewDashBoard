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
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0 mb-xl-5 mb-lg-3 mb-md-2"   style = "box-shadow: 5px 8px 18px #888888;border: 1px solid #f2f2f2">\
    <div class="card bg-transparent shadow thumb">\
        <div class="card-header bg-transparent" >\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem"></a>\
            <p class="text-danger ls-1 mb-0" style="font-size:0.8rem">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
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
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0 mb-xl-5 mb-lg-3 mb-md-2"   style = "box-shadow: 5px 8px 18px #888888;border: 1px solid #f2f2f2">\
    <div class="card bg-transparent shadow thumb">\
    <a href="#">\
        <div class="card-header bg-transparent" style="font-size:1rem" >\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem"></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-danger ls-1 mb-0" style="font-size:0.8rem">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
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
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0 mb-xl-5 mb-lg-3 mb-md-2"   style = "box-shadow: 5px 8px 18px #888888;border: 1px solid #f2f2f2">\
    <div class="card bg-transparent shadow thumb">\
        <div class="card-header bg-transparent" style="font-size:1rem" >\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem"></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-danger ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
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
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0 mb-xl-5 mb-lg-3 mb-md-2"   style = "box-shadow: 5px 8px 18px #888888;border: 1px solid #f2f2f2">\
    <div class="card bg-transparent shadow thumb">\
        <div class="card-header bg-transparent" style="font-size:1rem">\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["contact_mobile_phone"] + '</p>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem">\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem"></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-danger ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
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
    <div class="justify-content-center col-xl-3 col-md-5 col-10 col-sm-5 col-lg-4  m-xl-0 mb-xl-5 mb-lg-3 mb-md-2"   style = "box-shadow: 5px 8px 18px #888888;border: 1px solid #f2f2f2">\
    <div class="card bg-transparent shadow thumb row">\
        <div class="card-header bg-transparent" >\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><strong  id = "test" class="text-darker ls-1 mb-0" >' +element["contact"] + '</strong>\
            <hr style="margin-bottom:0.5rem;margin-top:0.5rem"></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem" >' +element["contact_mobile_phone"] + '</p>\
            <a href="/agency/'+element["contact_mobile_phone"]+'"><img class="border border-white rounded" src='+element["img_url"] + ' style="object-fit: cover;;" width="100%" height="230vh"></img>  \
            <hr style="margin-bottom:0.5rem;margin-top:1rem"></a>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_district"][0] + '+ BĐS từ '+ element["common_district"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_usefor"][0] + '+ BĐS '+ element["common_usefor"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_type"][0] + '+ BĐS '+ element["common_type"][1] +'</p>\
            <p class="text-darker ls-1 mb-0" style="font-size:0.8rem">' +element["common_price"][0] + '+ BĐS '+ element["common_price"][1] +'</p>\
            <p class="text-danger ls-1 mb-0" style="font-size:0.8rem">' +element["common_surface"][0] + '+ BĐS '+ element["common_surface"][1] +'<sup>2</sup></p>\
        </div>\
    </div>\
    <div class="row bg-white justify-content-left">\
    <a href="#" class="ml-4">Nhà môi giới tương tự</a>\
    </div>\
    </div>');
});


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