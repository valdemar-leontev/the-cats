import { ImageGalleryModeModel } from './image-gallery-mode-model';
import { ImageModel } from './image-model';


export type ImageGalleryProps = {
    mode: ImageGalleryModeModel;
    images: ImageModel[];
};