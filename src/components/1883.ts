
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1883`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1883<div>
                <input placeholder="Write here" />
                <button>Button Component 1883</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
