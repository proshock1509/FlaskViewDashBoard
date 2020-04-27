from app.models          import get_category_items, get_collection_query_agency_items_1
import pandas            as pd

from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb
from .                   import check_param

from flask_login         import login_user, logout_user, current_user, login_required
import json

@app.route("/district/district_ten=<string:district_ten>", methods = ["GET"])
def get_district_ten(district_ten):
    dimention_name = ["Top đầu các nhà môi giới theo mục đích sử dụng", "Top đầu các nhà môi giới theo nhu cầu sử dụng", "Top đầu các nhà môi giới theo phân khúc", "Top đầu các nhà môi giới theo diện tích"]
    dimention = ["common_usefor", "common_type", "common_price", "common_surface"]
    return render_template('layouts/default.html',
                    content=render_template( 'pages/list/dimention_detail.html', data = json.dumps({'collection':'district_thumb_profile', "query": {"district_ten" : district_ten}, "dimention" : dimention, "dimention_name" : dimention_name }) ))

@app.route("/usefor/use_for=<string:use_for>", methods = ["GET"])
def get_use_for(use_for):
    dimention_name = ["Top đầu các nhà môi giới từ các quận,huyện", "Top đầu các nhà môi giới theo nhu cầu sử dụng", "Top đầu các nhà môi giới theo phân khúc", "Top đầu các nhà môi giới theo diện tích"]
    dimention = ["common_district", "common_type", "common_price", "common_surface"]
    return render_template('layouts/default.html',
                    content=render_template( 'pages/list/dimention_detail.html', data = json.dumps({"collection":"usefor_thumb_profile", "query": {"use_for" : use_for}, "dimention" : dimention, "dimention_name" : dimention_name}) ))

@app.route("/type/type_re_name=<string:type_re_name>", methods = ["GET"])
def get_type_re_name(type_re_name):
    dimention_name = ["Top đầu các nhà môi giới từ các quận,huyện", "Top đầu các nhà môi giới theo mục đích sử dụng", "Top đầu các nhà môi giới theo phân khúc", "Top đầu các nhà môi giới theo diện tích"]
    dimention = ["common_district", "common_usefor", "common_price", "common_surface"]
    return render_template('layouts/default.html',
                    content=render_template( 'pages/list/dimention_detail.html', data = json.dumps({"collection":"type_thumb_profile", "query": {"type_re_name" : type_re_name}, "dimention" : dimention, "dimention_name" : dimention_name}) ))

@app.route("/price/price_level=<string:price_level>", methods = ["GET"])
def get_price_level(price_level):
    dimention_name = ["Top đầu các nhà môi giới từ các  quận,huyện", "Top đầu các nhà môi giới theo mục đích sử dụng", "Top đầu các nhà môi giới theo nhu cầu sử dụng", "Top đầu các nhà môi giới theo diện tích"]
    dimention = ["common_district", "common_usefor", "common_type", "common_surface"]
    return render_template('layouts/default.html',
                    content=render_template( 'pages/list/dimention_detail.html', data = json.dumps({"collection":"price_thumb_profile", "query": {"price_level" : price_level}, "dimention" : dimention, "dimention_name" : dimention_name}) ))

@app.route("/surface/surface_level=<string:surface_level>", methods = ["GET"])
def get_surface_level(surface_level):
    dimention_name = ["Top đầu các nhà môi giới từ các  quận,huyện", "Top đầu các nhà môi giới theo mục đích sử dụng", "Top đầu các nhà môi giới theo nhu cầu sử dụng", "Top đầu các nhà môi giới theo phân khúc"]
    dimention = ["common_district", "common_usefor", "common_type", "common_price"]
    return render_template('layouts/default.html',
                    content=render_template( 'pages/list/dimention_detail.html', data = json.dumps({"collection":"surface_thumb_profile", "query": {"surface_level" : surface_level}, "dimention" : dimention, "dimention_name" : dimention_name}) ))


@app.route("/api/dimention", methods = ["POST"])
def api_dimention():
    content = request.json 
    return content


@app.route("/api/category/items", methods = ["POST"])
def api_category_items():
    content = request.json 
    collection = content["collection"]
    dimention = content["dimention"]
    query = content["query"]
    count = content["count"]
    
    data = get_category_items(collection, query, dimention, count)
    return {
        "code": 1000,
        "message" : "Successful",
        "data" : data
    }

@app.route("/api/category/top_items", methods = ["POST"])
def api_category_top_items():
    content = request.json 
    collection = content["collection"]
    query = content["query"]
    count = content["count"]
    data = get_collection_query_agency_items_1(collection, query, count)
    return {
        "code": 1000,
        "message" : "Successful",
        "data" : data
    }