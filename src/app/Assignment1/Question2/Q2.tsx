// 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

interface User{
    url : string,
    username : string,
    email : string
}
export default function UserCard({ url ,username, email } : User ) {
  return (
    <div>
      <img src={url} alt="avatar" />
      <p >Hello {username}</p>
      <p >Your email is {email}</p>
    </div>
  );
}