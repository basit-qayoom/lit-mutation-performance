
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-751`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 751<div>
                <input placeholder="Write here" />
                <button>Button Component 751</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
