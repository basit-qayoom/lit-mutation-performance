
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-213`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 213<div>
                <input placeholder="Write here" />
                <button>Button Component 213</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
