interface IIconButton extends IStyledIconButton {
    Icon: any;
    callback?: () => void;
    to?: any;
    callbackParams?: any;
    downloadableContent?: boolean;
    type?: "button" | "submit" | "reset";
    width: string;
    height: string;
    color?: string;
}

interface IStyledIconButton {
    variant?: IconButtonVariant;
}

type IconButtonVariant = "default";

export type { IIconButton, IStyledIconButton, IconButtonVariant };
