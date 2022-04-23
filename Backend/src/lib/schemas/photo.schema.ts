import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type PhotoDocument = Photo & Document;

@Schema()
export class Photo
{
    @Prop()
    photoId: string;

    @Prop()
    photoFile: string;

    @Prop()
    photoName: string;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);