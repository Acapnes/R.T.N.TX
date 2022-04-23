import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { Photo, PhotoDocument } from "src/lib/schemas/photo.schema";



@Injectable()
export class PhotoServie {


    async getPhotos(): Promise<Photo[]>{
        return this.photoModel.find({});
    }

    constructor(@InjectModel(Photo.name) private photoModel: Model<PhotoDocument>) { }

    

    async getPhotoById(photoId: string): Promise<Photo> {
        return this.photoModel.findOne({ photoId })
    }

    async postPhoto(photoName: string, photoFile: string): Promise<Photo> {
        return this.photoModel.create({
            photoId: uuidv4(),
            photoFile,
            photoName,
        })
    }


}