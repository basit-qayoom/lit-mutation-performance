
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1504`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1504<div>
                <input placeholder="Write here" />
                <button>Button Component 1504</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
