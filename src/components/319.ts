
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-319`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 319<div>
                <input placeholder="Write here" />
                <button>Button Component 319</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
