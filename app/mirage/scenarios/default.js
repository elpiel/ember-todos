import {faker} from 'ember-cli-mirage';


export default function (server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.


  server.createList('person', 10);
  server.createList(
    'todo',
    10,
    {
      person_id: faker.random.number({min: 1, max: 10}),
      owner_id: faker.random.number({min: 1, max: 10})
    });
  server.createList('bug', 10);
  // server.createList('comment', 20, {user_id: user.id});
//'todo',
//   server.loadFixtures('bug');
}
