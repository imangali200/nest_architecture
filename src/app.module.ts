import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './features/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './core/db/entities/user.entity';
import { AuthModule } from './features/auth/auth.module';
import { AuthEntity } from './core/db/entities/auth.entity';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username:configService.get('DB_USERNAME'),
        password:configService.get('DB_PASSWORD'),
        database:configService.get('DB_DATABASE'),
        entities:[User,AuthEntity],
        synchronize:true
      }),
      inject:[ConfigService]
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
