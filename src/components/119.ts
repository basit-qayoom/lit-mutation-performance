
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-119`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 119<div>
                <input placeholder="Write here" />
                <button>Button Component 119</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
