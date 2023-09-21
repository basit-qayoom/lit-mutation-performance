
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-932`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 932<div>
                <input placeholder="Write here" />
                <button>Button Component 932</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
