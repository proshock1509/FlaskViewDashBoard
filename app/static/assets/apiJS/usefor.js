//DEFINE FUNCTION
function r() { return Math.floor(Math.random() * 255) }
function gen_datasets(data){
    datasets = []
    for (district in data["sl"]){
        x = r()
        y = r()
        z = r()
        set = {}
        set["label"] = district
        set["data"] = data["sl"][district]
        set.borderWidth = 1
        set.backgroundColor = 'rgba(' + x +',' + y + ',' + z + ',0.4)'
        set.borderColor = 'rgba(' + x +',' + y + ',' + z + ',1)'
        set.lineTension = 0
        set.fill = false
        datasets.push(set)
    }
    return datasets
}


//CALL API


//BAT SU KIEN
