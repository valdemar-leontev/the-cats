import { CatImageModel } from "./cat-image-model";

export type CatFavoriteImageModel = {
    id: number;
    sub_id: string;
    image: CatImageModel;
}