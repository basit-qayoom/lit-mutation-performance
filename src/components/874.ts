
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-874`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 874<div>
                <input placeholder="Write here" />
                <button>Button Component 874</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
