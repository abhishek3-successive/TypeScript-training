const containerStyle : React.CSSProperties= {
  textAlign: 'center',
  padding: '50px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
};

const cardStyle : React.CSSProperties= {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '10px',
  border: '2px solid #ddd',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  maxWidth: '400px',
  margin: '0 auto',
};

const headingStyle : React.CSSProperties = {
  fontSize: '24px',
  color: '#333',
  marginBottom: '20px',
};

const countDisplayStyle : React.CSSProperties= {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#007bff',
  margin: '20px 0',
};

const inputSectionStyle : React.CSSProperties= {
  marginBottom: '30px',
};

const labelStyle = {
  display: 'block',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#555',
  marginBottom: '10px',
};

const inputStyle : React.CSSProperties = {
  width: '120px',
  padding: '10px',
  fontSize: '16px',
  border: '2px solid #ddd',
  borderRadius: '5px',
  textAlign: 'center',
  outline: 'none',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
};

const buttonStyle = {
  padding: '12px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  minWidth: '120px',
};

const incrementButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#28a745',
  color: 'white',
};

const decrementButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#dc3545',
  color: 'white',
};

export {
  containerStyle,
  cardStyle,
  headingStyle,
  countDisplayStyle,
  inputSectionStyle,
  labelStyle,
  inputStyle,
  buttonContainerStyle,
  incrementButtonStyle,
  decrementButtonStyle
};