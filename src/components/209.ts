
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-209`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 209<div>
                <input placeholder="Write here" />
                <button>Button Component 209</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
