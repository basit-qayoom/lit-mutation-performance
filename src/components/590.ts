
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-590`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 590<div>
                <input placeholder="Write here" />
                <button>Button Component 590</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
