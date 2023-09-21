
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-35`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 35<div>
                <input placeholder="Write here" />
                <button>Button Component 35</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
