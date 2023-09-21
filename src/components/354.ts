
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-354`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 354<div>
                <input placeholder="Write here" />
                <button>Button Component 354</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
