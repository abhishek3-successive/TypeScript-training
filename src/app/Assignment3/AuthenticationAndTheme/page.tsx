import { AuthProvider } from "../Components/authContext";
import { ThemeProvider } from "../Components/themeContext";
import ChildComponent from "../Components/child";


export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ChildComponent />
      </ThemeProvider>
    </AuthProvider>
  );
}