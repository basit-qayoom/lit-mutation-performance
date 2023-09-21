
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-558`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 558<div>
                <input placeholder="Write here" />
                <button>Button Component 558</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
