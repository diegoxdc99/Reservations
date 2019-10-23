const deleteProperties = (originalObject, properties) => {
  const object = originalObject.toObject()
  properties.forEach(property => {
    Reflect.deleteProperty(object, property)
  })
  return object
}

module.exports = {
  deleteProperties
}
