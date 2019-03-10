import DS from 'ember-data';
const { JSONAPIAdapter } = DS;
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

export default class ApplicationAdapter extends JSONAPIAdapter.extend(AdapterFetch) {
	host = "http://localhost:3000";

	headers = {
		'Content-Type': 'application/vnd.api+json'
	}
	
}
