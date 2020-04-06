import pandas            as pd

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
    return data

@app.route("/api/usefor_district", methods = ["POST"])
def api_usefor_district():
    return redirect(url_for('api_district_usefor'), code=307)

@app.route("/api/usefor_type", methods = ["POST"])
def api_usefor_type():
    res_db = mydb.usefor_type_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    print(df)
    df.fillna("Khac", inplace =  True)
    data = {
        "code" : 1000,
        "message" : "Message",
        "data" : {
            "use_for" : list(df.use_for),
            "type_re_name" : list(df.type_re_name),
            "sl" : list(df.sl)
        } 
    }

    return data

@app.route("/api/usefor_price", methods = ["POST"])
def api_usefor_price():
    res_db = mydb.usefor_price_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    print(df)
    df.fillna("Khac", inplace =  True)
    data = {
        "code" : 1000,
        "message" : "Message",
        "data" : {
            "use_for" : list(df.use_for),
            "price_level" : list(df.price_level),
            "sl" : list(df.sl)
        } 
    }

    return data


@app.route("/api/usefor_surface", methods = ["POST"])
def api_usefor_surface():
    res_db = mydb.usefor_surface_sl_result.find({})
    df = pd.DataFrame(list(res_db))
    print(df)
    df.fillna("Khac", inplace =  True)
    data = {
        "code" : 1000,
        "message" : "Message",
        "data" : {
            "use_for" : list(df.use_for),
            "surface_level" : list(df.surface_level),
            "sl" : list(df.sl)
        } 
    }

    return data
#check_param.check_request(request) => Return 0 if not error / else error
@app.route("/api/usefor_day", methods = ["POST"])
def api_usefor_day():
    if check_param.check_request(request) != 0:
        return check_param.check_request(request)
    
    content = request.json 
    fromday = content["fromday"]
    today = content["today"]

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
    print(df)
    data = {
        "code" : 1000,
        "message" : "Successful!",
        "data" : {
            "use_for" : list(df.use_for),
            "day" : list(df.day),
            "sl" : list(df.sl)
        }
    }
    return data
    

