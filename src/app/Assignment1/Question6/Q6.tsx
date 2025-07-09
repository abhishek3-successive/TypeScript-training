interface Prop{
    text : string,
    color : string
}

function Button({ text, color }:Prop) {
  const buttonStyle = {
    backgroundColor: color,
    padding: '10px 20px 10px',
    borderRadius: '5px',
    border: 'none',
    color: 'white'

  };
  return <button style={buttonStyle}>{text}</button>;
}

export default Button