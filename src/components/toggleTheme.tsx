import { useState, useEffect } from 'react';

export default function ToggleTheme() {
  
    const [isDark, setIsDark] = useState(false);
  
    function setDark() {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  
    function setLight() {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setIsDark(false);
    }
  
    function toggleMode() {
      if (isDark) {
        setLight();
      } else {
        setDark();
      }
    }
  
    // When the page is loaded or refreshed, check for theme preference
    useEffect(() => {
      if (localStorage.getItem("theme") == "dark") {
        setDark();
      } else {
        setLight();
      }
    }, [])
  
  
    return (
      <div>
        <div></div>
        <div></div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      </div>
    );
  }