import pandas            as pd

from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb
from .                   import check_param


@app.route("/api/type", methods = ["POST"])
def api_type():
    res_db = mydb.type_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "type_re_name" : list(df.type_re_name),
            "sl" : list(df.sl)
        }
    }
    return data

@app.route("/api/type_district", methods = ["POST"])
def api_type_district():
    return redirect(url_for("api_district_type"), code = 307)

@app.route("/api/type_usefor", methods = ["POST"])
def api_type_usefor():
    return redirect(url_for("api_usefor_type"), code = 307)

@app.route("/api/type_price", methods = ["POST"])
def api_type_price():
    res_db = mydb.type_price_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "type_re_name" : list(df.type_re_name),
            "price_level" : list(df.price_level),
            "sl" : list(df.sl)
        }
    }
    return data

@app.route("/api/type_surface", methods = ["POST"])
def api_type_surface():
    res_db = mydb.type_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "type_re_name" : list(df.type_re_name),
            "surface_level" : list(df.surface_level),
            "sl" : list(df.sl)
        }
    }
    return data
@app.route("/api/type_day", methods = ["POST"])
def api_type_day():
    if check_param.check_request(request) != 0:
        return check_param.check_request(request)
    
    content = request.json 
    fromday =  datetime.strptime(content["fromday"], "%Y-%m-%d").strftime('%Y-%m-%d')
    today = datetime.strptime(content["today"], "%Y-%m-%d").strftime('%Y-%m-%d')

    res_db = mydb.type_day_sl_result.find({
        "day" : {
            "$gte" : fromday,
            "$lte" : today 
        }
    })

    if not res_db.count() :
        data = {
            "code" : 9994,
            "message" : "Data is not exist."
        }
        return data 

    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)

    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "type_re_name" : list(df.type_re_name),
            "day" : list(df.day),
            "sl" : list(df.sl)
        }
    }
    return data