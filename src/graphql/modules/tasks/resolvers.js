import db from '../../../db/db.js'

export default {
  Query: {
    tasks: () => db.tasks
  },
  Mutation: {}
}