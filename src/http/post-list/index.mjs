import arc from '@architect/functions'
import {v4} from 'uuid'

// learn more about HTTP functions here: https://arc.codes/http
export async function handler(req) {

  const rawData = Buffer.from(req.body, 'base64').toString()

  const thing = Object.fromEntries(new URLSearchParams(rawData).entries())

  const data = await arc.tables();

  const body = {
    formState: "completed",
    listID: v4(),
    userID: "xxx",
    title: "ted",
    ...thing,
  };

  const res = await data.lists.put(body);
  console.log('res', res)

  return {
    statusCode: 301,
    headers: {
      Location: '/',
    }
  }
}
