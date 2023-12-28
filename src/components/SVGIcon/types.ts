interface IStyledSVGIcon {
    width: string;
    height: string;
    currentColor?: string;
}

interface ISVGIcon extends IStyledSVGIcon {
    Icon: any;
}

export type { ISVGIcon, IStyledSVGIcon };
