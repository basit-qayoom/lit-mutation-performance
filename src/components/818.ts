
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-818`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 818<div>
                <input placeholder="Write here" />
                <button>Button Component 818</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
