
function classNameLocals(localsArr, str){

  if (typeof str !== 'string') return str
  if (Object.prototype.toString.call(localsArr) !== '[object Array]'){
    console.warn('argument[0] is not a Array, str won\'t be handle parsed')
    return str
  }
  
  return str.split(' ').reduce(function(accu, name) {
    if(!name) return accu
    
    var localName = find(localsArr, name)
    if (localName) accu.push(localName)
    return accu
    
  },[]).join(' ')
  
}

function find(arr, name){
  for(var i = arr.length-1; i>=0; i--){
    if(arr[i][name]){
      name = arr[i][name]
      break;
    }
  }
  return name
}

module.exports = classNameLocals
module.exports.default = classNameLocals