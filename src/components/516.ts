
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-516`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 516<div>
                <input placeholder="Write here" />
                <button>Button Component 516</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
