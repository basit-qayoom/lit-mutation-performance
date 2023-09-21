
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1746`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1746<div>
                <input placeholder="Write here" />
                <button>Button Component 1746</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
