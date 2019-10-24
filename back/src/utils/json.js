const deleteProperties = (originalObject, properties) => {
  const object = originalObject.toObject ? originalObject.toObject() : originalObject
  properties.forEach(property => {
    Reflect.deleteProperty(object, property)
  })
  return object
}

module.exports = {
  deleteProperties
}
