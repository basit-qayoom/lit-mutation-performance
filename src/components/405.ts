
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-405`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 405<div>
                <input placeholder="Write here" />
                <button>Button Component 405</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
