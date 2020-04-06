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

    fromday = datetime.strptime(content["fromday"], "%Y-%m-%d").strftime('%Y-%m-%d')
    today = datetime.strptime(content["today"], "%Y-%m-%d").strftime('%Y-%m-%d')

    if not (isinstance(content["fromday"], str) and isinstance(content["today"],str) ):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data
    if not ( check_time(fromday) and check_time(today) ):
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data
    if fromday > today :
        data = {"code" : 1004,
                "message" : "Parameter value is not invaild."}
        return data
    return 0