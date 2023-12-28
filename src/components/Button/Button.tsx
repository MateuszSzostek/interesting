import React, {
  PropsWithChildren,
  useCallback,
  useState,
  useEffect,
} from "react";
import IButton from "./types";
import { StyledButton } from "./styles";
import SVGIcon from "../SVGIcon/SVGIcon";
import { navigate } from "gatsby";

const Button = ({
  category,
  children,
  type,
  Icon,
  callback,
  to,
  iconColor,
  variant,
  downloadUrl,
  ariaLabel,
  iconHeight,
  iconWidth,
}: PropsWithChildren<IButton>) => {
  const [buttonText, setButtonText] = useState<string>(
    (children as string) || ""
  );

  const onClickHandler = useCallback(
    (e) => {
      if (typeof to !== "undefined") {
        navigate(to);
      } else if (typeof downloadUrl !== "undefined") {
        download(downloadUrl);
      } else if (typeof callback !== "undefined") {
        return callback(e);
      }
    },
    [to, downloadUrl, callback]
  );

  const download = useCallback((url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop() || "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  useEffect(() => {
    if (buttonText.length > 0 && typeof Icon !== "undefined") {
      setButtonText((text) => "\u00A0" + `${text}`);
    }
  }, []);

  return (
    <>
      <StyledButton
        variant={variant}
        type={type || "button"}
        onClick={(e) => onClickHandler(e)}
        aria-label={ariaLabel}
        category={category}
      >
        {Icon && (
          <SVGIcon
            Icon={Icon}
            width={iconWidth ? iconWidth : "100%"}
            height={iconHeight ? iconHeight : "100%"}
            currentColor={iconColor}
          />
        )}
        {buttonText}
      </StyledButton>
    </>
  );
};

export default Button;
