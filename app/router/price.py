import pandas            as pd

from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb
from .                   import check_param


@app.route("/api/price", methods = ["POST"])
def api_price():
    res_db = mydb.price_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "use_for" : list(df.price_level),
            "sl" : list(df.sl)
        }
    }
    return data


@app.route("/api/price_district", methods = ["POST"])
def api_price_district():
    return redirect(url_for("api_district_price"), code = 307)


@app.route("/api/price_usefor", methods = ["POST"])
def api_price_usefor():
    return redirect(url_for("api_usefor_price"), code = 307)


@app.route("/api/price_type", methods = ["POST"])
def api_price_type():
    return redirect(url_for("api_type_price"), code  = 307)


@app.route("/api/price_surface", methods = ["POST"])
def api_price_surface():
    res_db = mydb.price_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))

    df.fillna("Khac", inplace =  True)
    data = {
        "code" : 1000,
        "message" : "Message",
        "data" : {
            "price_level" : list(df.price_level),
            "surface_level" : list(df.surface_level),
            "sl" : list(df.sl)
        } 
    }

    return data
@app.route("/api/price_day", methods = ["POST"])
def api_price_day():
    if check_param.check_request(request) != 0:
        return check_param.check_request(request)
    
    content = request.json 
    fromday =  datetime.strptime(content["fromday"], "%Y-%m-%d").strftime('%Y-%m-%d')
    today = datetime.strptime(content["today"], "%Y-%m-%d").strftime('%Y-%m-%d')

    res_db = mydb.price_day_sl_result.find({
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
            "price_level" : list(df.price_level),
            "day" : list(df.day),
            "sl" : list(df.sl)
        }
    }
    return data