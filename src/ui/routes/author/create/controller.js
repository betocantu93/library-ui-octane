import Controller from '@ember/controller';

export default class AuthorCreateController extends Controller {
  async saveAuthor(e) {
    e.preventDefault();
	let author = this.store.createRecord('author', this.model)

	await author.save();
	this.transitionToRoute('author');
	
  }
}
