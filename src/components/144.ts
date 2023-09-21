
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-144`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 144<div>
                <input placeholder="Write here" />
                <button>Button Component 144</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
