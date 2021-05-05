import db from '../../db/db'

export default {
  Query: {
    employees: () => db.employees
  }
}