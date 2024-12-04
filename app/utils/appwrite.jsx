
import {Client, Databases, Account} from 'appwrite'

export const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('67351e58000e08fd4dbc')

export const database = new Databases(client)
export const account = new Account(client)