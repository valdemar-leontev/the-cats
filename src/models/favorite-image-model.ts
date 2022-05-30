import { ImageModel } from "./image-model";

export type FavoriteImageModel = {
    id: number;
    sub_id: string;
    image: ImageModel;
}