from app.models          import get_agency_items
import pandas            as pd

from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb
from .                   import check_param

from flask_login         import login_user, logout_user, current_user, login_required

n = 12

@app.route("/api/district_agency_items", methods = ["POST"])
def api_district_agency_items():
    return {
        "code": 1000,
        "message": "Successful",
        "data" : get_agency_items("common_district",n)
    }



@app.route("/api/usefor_agency_items", methods = ["POST"])
def api_usefor_agency_items():
    return {
        "code": 1000,
        "message": "Successful",
        "data" : get_agency_items("common_usefor",n)
    }

@app.route("/api/type_agency_items", methods = ["POST"])
def api_type_agency_items():
    return {
        "code": 1000,
        "message": "Successful",
        "data" : get_agency_items("common_type",n)
    }

@app.route("/api/price_agency_items", methods = ["POST"])
def api_price_agency_items():
    return {
        "code": 1000,
        "message": "Successful",
        "data" : get_agency_items("common_price",n)
    }

@app.route("/api/surface_agency_items", methods = ["POST"])
def api_surface_agency_items():
    return {
        "code": 1000,
        "message": "Successful",
        "data" : get_agency_items("common_surface",n)
    }

@app.route("/api/agency_thumb", methods = ["GET"])
def api_agency_thumb():
    return render_template("includes/agency_thumb.html")




@app.route("/list/<path>", methods = ["GET"])
def district_list(path):
    if not current_user.is_authenticated:
        return redirect(url_for('login'))

    content = None
    print(path)
    try:


        return render_template('layouts/default.html',
                                content=render_template( 'pages/list/'+path + ".html") )
    except:
        
        return render_template('layouts/auth-default.html',
                                content=render_template( 'pages/404.html' ) )