import Component from '@ember/component';
import {
  tracked
} from '@glimmer/tracking';

export default class AuthorListItemComponent extends Component {
  @tracked first = "";
  @tracked last = "";


  didReceiveAttrs() {
    super.didReceiveAttrs();
    this.first = this.author.first;
    this.last = this.author.last;
  }

  submitChanges(ev) {
	ev.preventDefault();

	this.onsubmit({
		first: this.first,
		last: this.last
	})
  }	
}
