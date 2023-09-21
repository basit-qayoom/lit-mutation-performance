
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-710`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 710<div>
                <input placeholder="Write here" />
                <button>Button Component 710</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
