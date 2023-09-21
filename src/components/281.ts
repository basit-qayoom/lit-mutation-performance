
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-281`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 281<div>
                <input placeholder="Write here" />
                <button>Button Component 281</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
