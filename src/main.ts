import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { PostsService } from 'src/posts/post.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000',
      'https://inquire-client-two.vercel.app'],
  });

  app.setGlobalPrefix('api');

  // Seed the database
  const postsService = app.get(PostsService);

  const existingPosts = await postsService.findAll();
  if (existingPosts.length === 0) {
    await seedPosts(postsService);
    console.log('Seeded 12 posts');
  }

  await app.listen(3001);
}
bootstrap();

async function seedPosts(postsService: PostsService) {
  const seedData = Array.from({ length: 12 }).map((_, i) => ({
    title: `Post ${i + 1}`,
    content: `This is the content of post number ${i + 1}.`,
  }));

  for (const post of seedData) {
    await postsService.create(post);
  }
}
