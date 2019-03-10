import Controller from '@ember/controller';

export default class AuthorEditController extends Controller {

	async saveAuthor(formValues) {
		
		this.model.setProperties(formValues)
		await this.model.save();

		this.transitionToRoute('author');
	}
}
