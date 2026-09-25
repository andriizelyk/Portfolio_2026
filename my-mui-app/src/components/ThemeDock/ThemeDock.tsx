import { ThemeControls } from '../ThemeControls/ThemeControls';
import './ThemeDock.css';

export function ThemeDock() {
  return (
    <div className="theme-dock">
      <div className="theme-dock__panel">
        <ThemeControls direction="column" />
      </div>
    </div>
  );
}
