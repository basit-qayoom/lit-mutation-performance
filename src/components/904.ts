
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-904`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 904<div>
                <input placeholder="Write here" />
                <button>Button Component 904</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
