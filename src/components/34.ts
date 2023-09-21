
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-34`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 34<div>
                <input placeholder="Write here" />
                <button>Button Component 34</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
