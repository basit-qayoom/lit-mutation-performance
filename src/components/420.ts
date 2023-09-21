
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-420`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 420<div>
                <input placeholder="Write here" />
                <button>Button Component 420</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
