import MeshbluHttp from 'browser-meshblu-http'
import RefParser from 'json-schema-ref-parser'
import _ from 'lodash'

import {getMeshbluConfig} from './auth-service'

export function createThing(templateUrl, callback) {
  const meshbluConfig = getMeshbluConfig()

  RefParser.dereference({$ref: templateUrl}, (error, originalSchema) => {
    if (error) return callback(error)

    const schema = applyOwnerPermissions(originalSchema, meshbluConfig.uuid)
    const meshblu = new MeshbluHttp(meshbluConfig)
    meshblu.register(schema, (error, device) => {
      if (error) return callback(error)

      callback(null, {uuid: device.uuid})
    })
  })
}

function applyOwnerPermissions(originalSchema, ownerUuid) {
  const schema = _.cloneDeep(originalSchema)

  _.set(schema, 'owner', ownerUuid)
  _.set(schema, 'meshblu.version', '2.0.0')

  if(!_.has(schema, 'meshblu.whitelists.discover.view')) {
    _.set(schema, 'meshblu.whitelists.discover.view', [])
  }
  schema.meshblu.whitelists.discover.view.push({uuid: ownerUuid})

  if(!_.has(schema, 'meshblu.whitelists.configure.update')) {
    _.set(schema, 'meshblu.whitelists.configure.update', [])
  }
  schema.meshblu.whitelists.configure.update.push({uuid: ownerUuid})

  return schema
}
