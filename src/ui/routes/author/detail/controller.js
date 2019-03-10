import Controller from '@ember/controller';


export default class AuthorDetailController extends Controller {

  async deleteAuthor(author) {
	  await author.destroyRecord();
    this.transitionToRoute('author.index');
  }
}
