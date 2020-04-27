# from app.models          import get_agency_items, get_kind_query_agency_items
import pandas            as pd

from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb
from .                   import check_param

from flask_login         import login_user, logout_user, current_user, login_required




@app.route("/agency/<path>", methods = ["GET"])
def agency_details(path):
    if not current_user.is_authenticated:
        return redirect(url_for('login'))

    content = None
    print(path)
    try:
        return render_template('layouts/default.html',
                                content=render_template('pages/agency/agency_details.html', data = {"ok": "ok"}))
    except:
        return render_template('layouts/auth-default.html',
                                content=render_template( 'pages/404.html' ))


