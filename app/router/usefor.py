import pandas            as pd
import numpy             as np
from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb
from .                   import check_param

@app.route("/api/usefor", methods = ["POST"])
def api_usefor():
    res_db = mydb.usefor_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace = True)

    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "use_for" : list(df.use_for),
            "sl" : list(df.sl)
        }
    }
    print(data)
    return data

@app.route("/api/usefor_district", methods = ["POST"])
def api_usefor_district():
    res_db = mydb.district_usefor_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.district_ten.fillna("Khác", inplace = True)

    pivotdf = pd.pivot_table(df, index = ["use_for"], columns = ["district_ten"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"use_for" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data

@app.route("/api/usefor_type", methods = ["POST"])
def api_usefor_type():
    res_db = mydb.usefor_type_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khac", inplace =  True)
    pivotdf = pd.pivot_table(df, index = ["use_for"], columns = ["type_re_name"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"use_for" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Message",
        "data" : res
    }

    return data

@app.route("/api/usefor_price", methods = ["POST"])
def api_usefor_price():
    res_db = mydb.usefor_price_sl_result.find({})
    df = pd.DataFrame(list(res_db))

    df.fillna("Khac", inplace =  True)
    pivotdf = pd.pivot_table(df, index = ["use_for"], columns = ["price_level"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"use_for" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Message",
        "data" : res
    }

    return data


@app.route("/api/usefor_surface", methods = ["POST"])
def api_usefor_surface():
    res_db = mydb.usefor_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))

    df.fillna("Khac", inplace =  True)
    pivotdf = pd.pivot_table(df, index = ["use_for"], columns = ["surface_level"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"use_for" : list(pivotdf.index)}
    res["sl"] = {}
    for c in pivotdf["sl"].columns:
        res["sl"][c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Message",
        "data" : res
    }

    return data
#check_param.check_request(request) => Return 0 if not error / else error
@app.route("/api/usefor_day", methods = ["POST"])
def api_usefor_day():
    if check_param.check_request(request) != 0:
        return check_param.check_request(request)
    
    content = request.json 
    fromday =  datetime.strptime(content["fromday"], "%Y-%m-%d").strftime('%Y-%m-%d')
    today = datetime.strptime(content["today"], "%Y-%m-%d").strftime('%Y-%m-%d')

    res_db = mydb.usefor_day_sl_result.find({
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
    pivotdf = pd.pivot_table(df, index=["day"], columns = ["use_for"], values = ["sl"], aggfunc=np.sum, fill_value = 0)
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
    

