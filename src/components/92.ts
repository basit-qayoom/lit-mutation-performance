
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-92`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 92<div>
                <input placeholder="Write here" />
                <button>Button Component 92</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
