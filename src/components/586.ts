
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-586`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 586<div>
                <input placeholder="Write here" />
                <button>Button Component 586</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
