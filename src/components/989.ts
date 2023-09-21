
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-989`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 989<div>
                <input placeholder="Write here" />
                <button>Button Component 989</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
