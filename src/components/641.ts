
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-641`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 641<div>
                <input placeholder="Write here" />
                <button>Button Component 641</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
