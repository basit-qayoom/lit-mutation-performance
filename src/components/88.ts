
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-88`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 88<div>
                <input placeholder="Write here" />
                <button>Button Component 88</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
