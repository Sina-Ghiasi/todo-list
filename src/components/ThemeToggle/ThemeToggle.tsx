import styles from "./ThemeToggle.module.css";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store";
import { ThemeMode, toggleTheme } from "../../features/theme/themeSlice";
import { useState } from "react";
import { IconType } from "react-icons";

const ThemeToggle: React.FC = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  let Icon: IconType;
  if (themeMode === ThemeMode.LIGHT) {
    Icon = isHovered ? MdDarkMode : MdOutlineDarkMode;
  } else {
    Icon = isHovered ? MdLightMode : MdOutlineLightMode;
  }

  return (
    <button
      title="Toggle theme"
      onClick={handleToggle}
      className={styles.themeToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className={styles.themeToggleIcon} />
    </button>
  );
};

export default ThemeToggle;
