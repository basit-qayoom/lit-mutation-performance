
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-54`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 54<div>
                <input placeholder="Write here" />
                <button>Button Component 54</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
