import { Categories } from "../../../global-styles";

type ButtonVariant = "default" | "outlined";

interface IStyledButton {
  variant?: ButtonVariant;
  Icon?: any;
  category: Categories;
}

interface IButton extends IStyledButton {
  type?: "button" | "submit" | "reset";
  callback?: () => void;
  iconColor?: string;
  iconWidth?: string;
  iconHeight?: string;
  to?: string;
  downloadUrl?: string;
  ariaLabel?: string;
}

export default IButton;
export type { IStyledButton, ButtonVariant };
