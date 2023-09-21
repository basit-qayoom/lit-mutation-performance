
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-826`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 826<div>
                <input placeholder="Write here" />
                <button>Button Component 826</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
