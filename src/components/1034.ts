
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1034`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1034<div>
                <input placeholder="Write here" />
                <button>Button Component 1034</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
