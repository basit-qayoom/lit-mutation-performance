
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-834`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 834<div>
                <input placeholder="Write here" />
                <button>Button Component 834</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
