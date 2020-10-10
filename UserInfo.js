const template = document.createElement("template");

template.innerHTML = `
<style>

.user-card { 
    display : grid;
    background: #f4f4f4;
    width: 500px;
    grid-template-columns: 1fr 2fr;
    grid-gap: 7px;
    border-bottom: darkorchid 3px solid; 
}

.user-card img {
    width: 100%;
}
.user-card button {
    cursor: pointer;
    color: #fff;
    border: 0;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: darkorchid;
}

</style>
<div class="user-card">
    <img></img>
    <div>
        <h3></h3>
        <div class="info">
        <p class="email"></p>
        <p class="phone"></p>
        </div>
        <button>Hide Info</button>
    </div>
</div>
`;

class UserInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.showInfo = true;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("image");
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector(".email").innerText = this.getAttribute(
      "email"
    );
    this.shadowRoot.querySelector(".phone").innerText = this.getAttribute(
      "phone"
    );
  }

  toggleInfoHandler() {
    const info = this.shadowRoot.querySelector(".info");
    const button = this.shadowRoot.querySelector("button");
    this.showInfo = !this.showInfo;
    if (this.showInfo) {
      info.style.display = "block";
      button.innerText = "Hide Info";
    } else {
      info.style.display = "none";
      button.innerText = "Show Info";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", () => this.toggleInfoHandler());
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .removeEventListener("click", () => toggleInfoHandler());
  }
}

window.customElements.define("user-info", UserInfo);
