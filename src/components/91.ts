
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-91`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 91<div>
                <input placeholder="Write here" />
                <button>Button Component 91</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
