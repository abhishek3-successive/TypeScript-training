  const containerStyle: React.CSSProperties= {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle : React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',  // Smooth transition on hover
  };

  const notificationStyle: React.CSSProperties = {
    marginTop: '20px',
    padding: '15px 30px',
    backgroundColor: '#f39c12',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'opacity 1s ease-in-out',
     };

     export {
        notificationStyle,
        buttonStyle,
        containerStyle,
     }