import pandas            as pd
import numpy             as np
from datetime            import datetime
from flask               import render_template, request, url_for, redirect, send_from_directory, jsonify
from app                 import app, lm, db, bc, mydb, prfdb
from .                   import check_param


    