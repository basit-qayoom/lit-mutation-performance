
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-78`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 78<div>
                <input placeholder="Write here" />
                <button>Button Component 78</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
