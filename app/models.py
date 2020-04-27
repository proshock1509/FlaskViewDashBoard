# -*- encoding: utf-8 -*-
"""
License: MIT
Copyright (c) 2019 - present AppSeed.us
"""

from app         import db
from flask_login import UserMixin
from pymongo import *
class User(UserMixin, db.Model):

    id       = db.Column(db.Integer,     primary_key=True)
    user     = db.Column(db.String(64),  unique = True)
    email    = db.Column(db.String(120), unique = True)
    password = db.Column(db.String(500))

    def __init__(self, user, email, password):
        self.user       = user
        self.password   = password
        self.email      = email

    def __repr__(self):
        return '<User %r - %s>' % (self.id) % (self.email)

    def save(self):

        # inject self into db session    
        db.session.add ( self )

        # commit change and save the object
        db.session.commit( )

        return self 


# class Agency_Item(object):
#     def __init__(self, item ):
#         self.contact_mobile_phone = item["contact_mobile_phone"]
#         self.contact = item["contact"]
#         self.contact_email = item["contact_email"]
#         self.contact_address = item["contact_address"]
#         self.common_district = item["common_district"]
#         self.common_usefor = item["common_usefor"]
#         self.common_type = item["common_type"]
#         self.common_surface = item["common_surface"]
#         self.common_price = item["common_price"]



def get_agency_items(common, n):
    cursor = MongoClient("localhost",27017)["PROFILE"]
    district_agencies_thumb = cursor.thumb_profile.find({}, {"_id": 0}).sort(common + ".0", -1).collation({"locale": "en_US", "numericOrdering": True}).limit(n)
    return list(district_agencies_thumb)
    # agency_items = []
    # for a in district_agencies_thumb:
    #     item = Agency_Item(a)
    #     agency_items.append(item)

    # return agency_items

def get_kind_query_agency_items(kind, query, n):
    cursor = MongoClient("localhost",27017)["PROFILE"]
    if kind == "district":
        data = cursor.district_thumb_profile.find(query, {"_id":0}).sort("count",-1).limit(n)
    if kind == "usefor":
        data = cursor.usefor_thumb_profile.find(query, {"_id":0}).sort("count",-1).limit(n)
    if kind == "type":
        data = cursor.type_thumb_profile.find(query, {"_id":0}).sort("count",-1).limit(n)
    if kind == "price":
        data = cursor.price_thumb_profile.find(query, {"_id":0}).sort("count",-1).limit(n)
    if kind == "surface":
        data = cursor.surface_thumb_profile.find(query, {"_id":0}).sort("count",-1).limit(n)
    return list(data)


def get_category_items(collection, query, dimention, count):
    cursor = MongoClient("localhost",27017)["PROFILE"]
    data = cursor[collection].find(query,{"_id" : 0}).sort([(dimention+ ".0",-1), ("count",-1)]).collation({"locale": "en_US", "numericOrdering": True}).limit(count)
    return list(data)

def get_collection_query_agency_items_1(collection, query, n):
    cursor = MongoClient("localhost",27017)["PROFILE"]
    data = cursor[collection].find(query, {"_id":0}).sort("count",-1).limit(n)
    return list(data)
