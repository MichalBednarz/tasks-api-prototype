import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    tasks(filters: TaskFilters): [Task!]!
    weeklyTasks: [Task]
  }
  extend type Mutation {
    createTask(name: String!): Task
    createTaskWithTimelog(name: String!): Task
    updateTask(input: TaskInput!): Task
    completeTask(id: Int!): Task
    deleteTask(id: Int!): Task
  }
  type Task {
    id: Int!
    name: String!
    priority: String
    time_estimate: String
    time_planned: String
    max_date: String
    comments: String
    finish_date: String
    project: Project
    subproject: Subproject
    timelogs: [Timelog!]!
    activeTimelog: Timelog
    repeat: String
    completed: Boolean,
    time_status: String
  }
  input TaskInput {
    id: Int!
    completed: Boolean
    time_estimate: String
    time_planned: String
    max_date: String
    finish_date: String
    name: String
    priority: String
    comments: String
    project: Int
    repeat: String
    subproject: Int
  }
  input TaskFilters {
    subproject_id: Int
  }
`