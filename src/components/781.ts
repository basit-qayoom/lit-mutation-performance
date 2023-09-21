
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-781`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 781<div>
                <input placeholder="Write here" />
                <button>Button Component 781</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
