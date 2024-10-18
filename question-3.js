// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};
const handleGetUser = (response) => {
  return response.json();
};
const checkUserName = (arr) => {
  return arr
    .filter((userName) => userName.name.length >= 17)
    .map((user) => user.name);
};

const getUserName = async () => {
  try {
    const usersInfo = await getUsers();
    const handleUserInfo = await handleGetUser(usersInfo);
    const passUserName = await checkUserName(handleUserInfo);
    const showName = console.log(passUserName);
  } catch (err) {
    console.log(`Eror: ${err}`);
  }
};
getUserName();
