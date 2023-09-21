
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-49`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 49<div>
                <input placeholder="Write here" />
                <button>Button Component 49</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
