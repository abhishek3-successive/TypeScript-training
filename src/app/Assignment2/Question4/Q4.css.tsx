// Simple CSS styles for RandomNumberGenerator component

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
  maxWidth: '350px',
  margin: '0 auto',
};

const headingStyle : React.CSSProperties= {
  fontSize: '24px',
  color: '#333',
  marginBottom: '30px',
};

const numberDisplayStyle : React.CSSProperties = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#007bff',
  margin: '30px 0',
  minHeight: '60px',
};

const placeholderStyle : React.CSSProperties= {
  fontSize: '20px',
  color: '#999',
  fontStyle: 'italic',
};

const buttonStyle : React.CSSProperties= {
  padding: '12px 24px',
  fontSize: '16px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export {
  containerStyle,
  cardStyle,
  headingStyle,
  numberDisplayStyle,
  placeholderStyle,
  buttonStyle
};