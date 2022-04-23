import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Photo } from "src/lib/schemas/photo.schema";
import { PhotoServie } from "./photo.service";
import { PhotoDto } from '../../dto/photo.dto';


@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoServie) {}

    @Get()
    async getPhotos(): Promise<Photo[]>{
        return this.photoService.getPhotos();
    }

    @Get(':photoId')
    async getPhoto(@Param('photoId') photoId: string): Promise<Photo> {
        return this.photoService.getPhotoById(photoId);
    }

    @Post()
    async postPhoto(@Body() photoDto: PhotoDto): Promise<Photo> {
        return this.photoService.postPhoto(photoDto.photoFile, photoDto.photoName)
    }
}