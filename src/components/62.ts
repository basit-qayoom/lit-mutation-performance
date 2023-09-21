
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-62`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 62<div>
                <input placeholder="Write here" />
                <button>Button Component 62</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
