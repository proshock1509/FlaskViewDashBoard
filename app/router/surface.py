import pandas            as pd

from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb
from .                   import check_param


@app.route("/api/surface", methods = ["POST"])
def api_surface():
    res_db = mydb.surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "surface_level" : list(df.surface_level),
            "sl" : list(df.sl)
        }
    }
    return data 


@app.route("/api/surface_district", methods = ["POST"])
def api_surface_district():
    return redirect(url_for("api_district_surface"), code = 307)


@app.route("/api/surface_usefor", methods = ["POST"])
def api_surface_usefor():
    return redirect(url_for("api_usefor_surface"), code = 307)


@app.route("/api/surface_type", methods = ["POST"])
def api_surface_type():
    return redirect(url_for("api_type_surface"), code = 307)


@app.route("/api/surface_price", methods = ["POST"])
def api_surface_price():
    return redirect(url_for("api_price_surface"), code = 307)

    
@app.route("/api/surface_day", methods = ["POST"])
def api_surface_day():
    if check_param.check_request(request) != 0:
        return check_param.check_request(request)
    
    content = request.json 
    fromday =  datetime.strptime(content["fromday"], "%Y-%m-%d").strftime('%Y-%m-%d')
    today = datetime.strptime(content["today"], "%Y-%m-%d").strftime('%Y-%m-%d')

    res_db = mydb.surface_day_sl_result.find({
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
            "surface_level" : list(df.surface_level),
            "day" : list(df.day),
            "sl" : list(df.sl)
        }
    }
    return data