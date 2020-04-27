from datetime            import datetime

def check_time(day_time):
    try:
        if not datetime.strptime(day_time, "%Y-%m-%d").strftime('%Y-%m-%d'):
            raise ValueError
        return True
    except ValueError:
        return False
    
def check_request(request):
    if not isinstance(request.json, dict):
        data = {"code": 1003,
                 "message": "Parameter type is invaild (string, byte,xml..) must be json"}
        return data 
    content = request.json # type dict
    if ("fromday" not in content.keys()) or ("today" not in content.keys()) :
        data = {"code" : 1003,
                "message" : "Parameter is not invaild."}
        return data 
    
    if len(content.keys()) != 2:
        data = {"code" : 1002,
                "message" : "Parameter is not enough."}
        return data
    if not (isinstance(content["fromday"], str) and isinstance(content["today"],str) ):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data
    
    if not ( check_time(content["fromday"]) and check_time(content["today"]) ):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data
    
    fromday = datetime.strptime(content["fromday"], "%Y-%m-%d").strftime('%Y-%m-%d')
    today = datetime.strptime(content["today"], "%Y-%m-%d").strftime('%Y-%m-%d')

    
    
    if fromday > today :
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data
    return 0


def check_district_request(request):
    if not isinstance(request.json, dict):
        data = {"code": 1003,
                 "message": "Parameter type is invaild (string, byte,xml..) must be json"}
        return data 

    content = request.json # type dict
    if ("district_ten" not in content.keys()) or ("count" not in content.keys()) :
        data = {"code" : 1003,
                "message" : "Parameter is not invaild."}
        return data 

    if not (isinstance(content["district_ten"], str) and isinstance(content["count"], int)):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data

    return 0


def check_type_request(request):
    if not isinstance(request.json, dict):
        data = {"code": 1003,
                 "message": "Parameter type is invaild (string, byte,xml..) must be json"}
        return data 

    content = request.json # type dict
    if ("type_re_name" not in content.keys()) or ("count" not in content.keys()) :
        data = {"code" : 1003,
                "message" : "Parameter is not invaild."}
        return data 

    if not (isinstance(content["type_re_name"], str) and isinstance(content["count"], int)):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data

    return 0

def check_usefor_request(request):
    if not isinstance(request.json, dict):
        data = {"code": 1003,
                 "message": "Parameter type is invaild (string, byte,xml..) must be json"}
        return data 

    content = request.json # type dict
    if ("use_for" not in content.keys()) or ("count" not in content.keys()) :
        data = {"code" : 1003,
                "message" : "Parameter is not invaild."}
        return data 

    if not (isinstance(content["use_for"], str) and isinstance(content["count"], int)):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data

    return 0

def check_price_request(request):
    if not isinstance(request.json, dict):
        data = {"code": 1003,
                 "message": "Parameter type is invaild (string, byte,xml..) must be json"}
        return data 

    content = request.json # type dict
    if ("price_level" not in content.keys()) or ("count" not in content.keys()) :
        data = {"code" : 1003,
                "message" : "Parameter is not invaild."}
        return data 

    if not (isinstance(content["price_level"], str) and isinstance(content["count"], int)):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data

    return 0


def check_surface_request(request):
    if not isinstance(request.json, dict):
        data = {"code": 1003,
                 "message": "Parameter type is invaild (string, byte,xml..) must be json"}
        return data 

    content = request.json # type dict
    if ("surface_level" not in content.keys()) or ("count" not in content.keys()) :
        data = {"code" : 1003,
                "message" : "Parameter is not invaild."}
        return data 

    if not (isinstance(content["surface_level"], str) and isinstance(content["count"], int)):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data

    return 0