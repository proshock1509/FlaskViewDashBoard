import pandas            as pd
import numpy             as np
from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb
from .                   import check_param


    
@app.route('/api/district', methods = ["POST"])
def api_district():
    res_db = mydb.district_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khác", inplace = True)

    data = {
        "code": 1000,
        "message": "Successful!",
        "data" : {
            "district_ten": list(df.district_ten),
            "sl": list(df.sl)
        }
    }
    return data

@app.route('/api/district_usefor', methods = ["POST"])
def api_district_usefor():
    res_db = mydb.district_usefor_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.district_ten.fillna("Khác", inplace = True)

    pivotdf = pd.pivot_table(df, index = ["district_ten"], columns = ["use_for"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"district_ten" : list(pivotdf.index)}
    for c in pivotdf["sl"].columns:
        res[c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data


@app.route('/api/district_type', methods = ["POST"])
def api_district_type():
    res_db = mydb.district_type_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khác", inplace = True)
    pivotdf = pd.pivot_table(df, index = ["district_ten"], columns = ["type_re_name"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"district_ten" : list(pivotdf.index)}
    for c in pivotdf["sl"].columns:
        res[c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data 

@app.route("/api/district_price", methods = ["POST"])
def api_district_price():
    res_db = mydb.district_price_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khác", inplace = True)
    pivotdf = pd.pivot_table(df,index = ["district_ten"], columns = ["price_level"], values = ["sl"],aggfunc=np.sum, fill_value=0)
    res = {"district_ten" : list(pivotdf.index)}
    for c in pivotdf["sl"].columns:
        res[c] = list(pivotdf["sl"][c])
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : res
    }
    return data 

@app.route("/api/district_surface", methods = ["POST"])
def api_district_surface():
    res_db = mydb.district_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    df.fillna("Khác", inplace = True)
    data = {
        "code" : 1000,
        "message" : "Successful",
        "data" : {
            "district_ten" : df.district_ten.tolist(),
            "surface_level" : df.surface_level.tolist(),
            "sl" : df.sl.tolist()
        }
    }
    return data


@app.route("/api/district_day", methods = ["POST"])
def api_district_day():
    #content1 = request.data #type byte
    if check_param.check_request(request) != 0 :
        return check_param.check_request(request)
    content = request.json
    fromday =  datetime.strptime(content["fromday"], "%Y-%m-%d").strftime('%Y-%m-%d')
    today = datetime.strptime(content["today"], "%Y-%m-%d").strftime('%Y-%m-%d')
    res_db = mydb.district_day_sl_result.find({
        "day":{
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



    df.fillna("Khác", inplace = True)
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "district_ten" : df.district_ten.tolist(),
            "day" : df.day.tolist(),
            "sl" : df.sl.tolist()
        }
    }
    return data


