import pandas            as pd
import numpy             as np
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
    res_db = mydb.district_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khác", inplace = True)
    pivotdf = pd.pivot_table(df, index = ["surface_level"], columns = ["district_ten"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"surface_level" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data 

@app.route("/api/surface_usefor", methods = ["POST"])
def api_surface_usefor():
    res_db = mydb.usefor_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace =  True)
    pivotdf = pd.pivot_table(df, index = ["surface_level"], columns = ["use_for"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"surface_level" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }

    return data


@app.route("/api/surface_type", methods = ["POST"])
def api_surface_type():
    res_db = mydb.type_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace =  True)
    pivotdf = pd.pivot_table(df, index = ["surface_level"], columns = ["type_re_name"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"surface_level" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }

    return data

@app.route("/api/surface_price", methods = ["POST"])
def api_surface_price():
    res_db = mydb.price_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)
    pivotdf = pd.pivot_table(df, index = ["surface_level"], columns = ["price_level"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"surface_level" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data

    
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
    pivotdf = pd.pivot_table(df, index = ["day"], columns = ["surface_level"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"day" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data