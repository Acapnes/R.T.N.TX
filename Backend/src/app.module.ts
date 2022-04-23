import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './lib/modules/photos/photo.module';
import { UsersModule } from './lib/modules/users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), UsersModule,PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}