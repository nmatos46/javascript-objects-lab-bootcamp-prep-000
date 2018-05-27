var recipes = {bananas:1}

function updateObjectWithKeyAndValue(obj,key,value){
  //return updated object without changing obj in arguments
  return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj,key){
  var obj1 = Object.assign({},obj)
  delete 
}