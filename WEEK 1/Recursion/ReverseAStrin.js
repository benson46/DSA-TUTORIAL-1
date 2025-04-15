let s = "alan peter";

function string (s){
    if(s.length <=1) return  s

    return string(s.slice(1)) + s[0]
}