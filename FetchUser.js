const fetchUserInfo = async (_) => {
  const response = await fetch(
    "https://randomuser.me/api/?inc=name,picture,email,phone,location&results=20"
  );
  const user = await response.json();

  const userEvent = new CustomEvent("user-event", {
    detail: user,
    bubbles: true,
  });
  console.log(user);

  dispatchEvent(userEvent);
};

export default fetchUserInfo;
