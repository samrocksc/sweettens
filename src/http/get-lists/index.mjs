// import arc from '@architect/functions'

// learn more about HTTP functions here: https://arc.codes/http
export async function handler(req) {
  typeof req

  // const table = await arc.tables();

  // const data = await table.lists.query({});

  return {
    statusCode: 200,
    body: JSON.stringify([{
      listID: '123',
      userID: 'x123',
      title: 'Favorite Devs',
      item1: 'Tim Pope(vim Dark Vader)',
      item2: 'Brian Leroux(creator of Enhance)',
      item3: 'Linus Torvalds(linux)',
      item4: '@ceejbot (Inspiration in Human form)',
      item5: 'Sarah Drasner(Education Pro)',
      item6: 'Ryan Dahl(Node/Deno)',
      item7: 'Louis Montes(Some Rando)',
      item8: 'Larry Page(Google)',
      item9: 'Suz Hinton(Noopkat/Live Code Assassin)',
      item10: 'Kevin Mitnick(hack the planet buddy)'
    }]),
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    }
  }
}

