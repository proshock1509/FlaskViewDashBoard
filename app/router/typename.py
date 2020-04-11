import pandas            as pd
import numpy             as np
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
    res_db = mydb.district_type_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khác", inplace = True)
    pivotdf = pd.pivot_table(df, index = ["type_re_name"], columns = ["district_ten"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"type_re_name" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data 

@app.route("/api/type_usefor", methods = ["POST"])
def api_type_usefor():
    res_db = mydb.usefor_type_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace =  True)
    pivotdf = pd.pivot_table(df, index = ["type_re_name"], columns = ["use_for"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"type_re_name" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }

    return data

@app.route("/api/type_price", methods = ["POST"])
def api_type_price():
    res_db = mydb.type_price_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)
    pivotdf = pd.pivot_table(df, index = ["type_re_name"], columns = ["price_level"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"type_re_name" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data

@app.route("/api/type_surface", methods = ["POST"])
def api_type_surface():
    res_db = mydb.type_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)
    pivotdf = pd.pivot_table(df, index = ["type_re_name"], columns = ["surface_level"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"type_re_name" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
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

    pivotdf = pd.pivot_table(df, index = ["day"], columns = ["type_re_name"], values = ["sl"],aggfunc=np.sum, fill_value=0)
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