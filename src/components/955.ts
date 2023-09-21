
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-955`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 955<div>
                <input placeholder="Write here" />
                <button>Button Component 955</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
