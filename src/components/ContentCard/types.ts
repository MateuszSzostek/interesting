import { Categories } from "../../../global-styles";

export interface IContentCard extends IContentCardWrapper {
    id: string;
    title: string;
    subtitle: string;
    text: string;
    source: string;
    slug: string;
    images: any[];
    alts: string[];
    keywords: string;
}

export interface IContentCardWrapper {
    category: Categories;
}
