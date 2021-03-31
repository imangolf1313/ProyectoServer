import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriesModule } from './categories/categories.module';
import { ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  
  imports: [
    ServeStaticModule.forRoot({
      renderPath: join(__dirname, '..', 'avatars')
    }),
    TypeOrmModule.forRoot(),
    UsuariosModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
