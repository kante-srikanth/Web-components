import fetchUserInfo from "./FetchUser.js";
fetchUserInfo();

class UserList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    addEventListener("user-event", (e) => this.onMessage(e.detail.results));
  }

  onMessage(users) {
    users.map((user) => {
      const {
        picture: { large: profile },
        email,
        name: { title, first, last },
        phone,
      } = user;

      const fullName = title + " " + first + " " + last;
      this.innerHTML += `
        <user-info 
            image=${profile}
            email=${email}
            name='${fullName}'
            phone=${phone}
        />
    `;
    });
  }
}

window.customElements.define("user-list", UserList);
