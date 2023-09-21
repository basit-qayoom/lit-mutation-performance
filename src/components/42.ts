
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-42`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 42<div>
                <input placeholder="Write here" />
                <button>Button Component 42</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
