import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title() {
    return faker.name.title();
  },
  description() {
    return faker.lorem.sentence();
  }
});