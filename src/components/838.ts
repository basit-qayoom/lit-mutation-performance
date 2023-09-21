
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-838`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 838<div>
                <input placeholder="Write here" />
                <button>Button Component 838</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
