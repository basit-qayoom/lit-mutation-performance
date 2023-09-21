
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-214`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 214<div>
                <input placeholder="Write here" />
                <button>Button Component 214</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
