
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-980`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 980<div>
                <input placeholder="Write here" />
                <button>Button Component 980</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
