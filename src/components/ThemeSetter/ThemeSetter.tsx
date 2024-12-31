import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

const ThemeSetter: React.FC = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return null;
};

export default ThemeSetter;
