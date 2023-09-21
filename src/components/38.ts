
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-38`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 38<div>
                <input placeholder="Write here" />
                <button>Button Component 38</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
