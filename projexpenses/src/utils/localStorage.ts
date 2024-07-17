export function loadObject(id: string, fallback: any){
  try{
    return JSON.parse(localStorage[id])
  }catch(err){
    return fallback
  }
}

export function saveObject(id: string, object: any){
  localStorage[id] = JSON.stringify(object)
}