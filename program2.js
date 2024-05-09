const decodeTheRing = function (m,k) {

    def decode(mesaage, key):
    if len(message) != len(key):
        return False
    
    for m, k in zip(message, key):
        if k == '?' or k == m:
            continue
        elif k == '*':
            continue
        else:
            return False
    
    return True

print(decode("aa", "a"))      
print(decode("aa", "*"))      
print(decode("cb", "?a"))     
    
};
  
  module.exports = decodeTheRing;
