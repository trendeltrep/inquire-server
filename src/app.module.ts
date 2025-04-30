import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Post } from 'src/posts/post.entity';
import { Comment } from 'src/comments/comment.entity';
import { PostsModule } from 'src/posts/post.module';
import { CommentsModule } from 'src/comments/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Post, Comment],
      synchronize: true, 
    }),
    PostsModule,
    CommentsModule,
  ],
})
export class AppModule {}
