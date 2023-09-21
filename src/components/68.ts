
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-68`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 68<div>
                <input placeholder="Write here" />
                <button>Button Component 68</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
