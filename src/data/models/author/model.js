import DS from 'ember-data';
const { Model } = DS;
import { attr } from '@ember-decorators/data'
export default class AuthorModel extends Model {
  @attr('string') first;
  @attr('string') last;
}
