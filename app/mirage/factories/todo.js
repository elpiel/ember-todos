import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title() {
    return faker.name.title();
  },
  description() {
    return faker.lorem.sentence();
  },
  image() {
    return faker.image.image();
  }/*,
  owner_id(){
    return faker.random.number({'min': 1, 'max': 10});
  },
  person_id(){
    return faker.random.number({'min': 1, 'max': 10});
  }*/
});
