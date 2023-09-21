
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-923`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 923<div>
                <input placeholder="Write here" />
                <button>Button Component 923</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
