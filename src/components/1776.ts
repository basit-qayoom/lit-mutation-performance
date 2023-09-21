
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1776`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1776<div>
                <input placeholder="Write here" />
                <button>Button Component 1776</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
