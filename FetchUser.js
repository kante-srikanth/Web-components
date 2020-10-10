const input = document.getElementById("user-input");

input.addEventListener("change", () => fetchUserInfo());

const fetchUserInfo = async (_) => {
  const userExists = document.getElementsByClassName("user-list")[0]
    .children[0];
  if (userExists.childElementCount != 0) {
    Array.from(userExists.children).forEach((i) => i.remove());
  }
  if (parseInt(input.value) !== 0 && input.value) {
    const url = `https://randomuser.me/api/?inc=name,picture,email,phone,location&results=${input.value}`;
    const response = await fetch(url);
    const user = await response.json();
    const userEvent = new CustomEvent("user-event", {
      detail: user,
      bubbles: true,
    });
    dispatchEvent(userEvent);
  }
};

export default fetchUserInfo;
