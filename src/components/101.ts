
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-101`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 101<div>
                <input placeholder="Write here" />
                <button>Button Component 101</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
