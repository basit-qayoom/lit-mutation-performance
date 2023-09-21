
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-495`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 495<div>
                <input placeholder="Write here" />
                <button>Button Component 495</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
