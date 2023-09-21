
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-122`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 122<div>
                <input placeholder="Write here" />
                <button>Button Component 122</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
