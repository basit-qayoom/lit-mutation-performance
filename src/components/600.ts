
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-600`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 600<div>
                <input placeholder="Write here" />
                <button>Button Component 600</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
