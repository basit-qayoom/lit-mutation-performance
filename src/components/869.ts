
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-869`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 869<div>
                <input placeholder="Write here" />
                <button>Button Component 869</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
