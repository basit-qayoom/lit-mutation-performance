
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-46`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 46<div>
                <input placeholder="Write here" />
                <button>Button Component 46</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
