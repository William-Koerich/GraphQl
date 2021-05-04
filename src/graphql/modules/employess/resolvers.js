import db from '../../../db/db.js'

export default {
  Query: {
    employees: () => db.employees
  }
}