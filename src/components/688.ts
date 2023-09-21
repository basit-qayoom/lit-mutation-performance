
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-688`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 688<div>
                <input placeholder="Write here" />
                <button>Button Component 688</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
