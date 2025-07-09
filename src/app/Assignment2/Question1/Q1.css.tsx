// Simple CSS styles for Counter component

const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '50px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
};

const counterBoxStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '10px',
  border: '2px solid #ddd',
  maxWidth: '300px',
  margin: '0 auto',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const headingStyle = {
  fontSize: '24px',
  color: '#333',
  marginBottom: '20px',
};

const countStyle = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#007bff',
  margin: '20px 0',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none',
};

const addButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#28a745',
  color: 'white',
};

const subButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#dc3545',
  color: 'white',
};

export {
  containerStyle,
  counterBoxStyle,
  headingStyle,
  countStyle,
  addButtonStyle,
  subButtonStyle
};