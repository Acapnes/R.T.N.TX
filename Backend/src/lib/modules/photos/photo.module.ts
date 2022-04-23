import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Photo, PhotoSchema } from "src/lib/schemas/photo.schema";
import { PhotoController } from "./photo.controller";
import { PhotoServie } from "./photo.service";



@Module({
    imports:[MongooseModule.forFeature([{name:Photo.name,schema:PhotoSchema}])],
    controllers: [PhotoController],
    providers: [PhotoServie]
})

export class PhotoModule{}