
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-33`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 33<div>
                <input placeholder="Write here" />
                <button>Button Component 33</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
