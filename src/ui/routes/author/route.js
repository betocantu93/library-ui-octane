import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
	async model() {
		return this.store.findAll('author')
	}
}
