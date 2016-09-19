import RefParser from 'json-schema-ref-parser'
import _ from 'lodash'

export function fetchRegistryItem({ registryItemUrl }, callback) {
  if (_.isEmpty(registryItemUrl)) return callback(new Error('registryItemUrl is required'))

  RefParser.dereference({ $ref: registryItemUrl }, callback)
}
