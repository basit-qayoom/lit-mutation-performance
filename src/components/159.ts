
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-159`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 159<div>
                <input placeholder="Write here" />
                <button>Button Component 159</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
