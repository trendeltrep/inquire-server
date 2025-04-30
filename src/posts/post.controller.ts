import {
  Controller,
  Get,
  Post as HttpPost,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PostsService } from 'src/posts/post.service';
import { Post } from 'src/posts/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findPaginated(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ): Promise<Post[]> {
    if (!page || !limit) {
      return this.postsService.findAll();
    }
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    return this.postsService.findPaginated(pageNum, limitNum);
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @HttpPost()
  create(@Body() postData: Partial<Post>): Promise<Post> {
    return this.postsService.create(postData);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<Post>,
  ): Promise<Post> {
    return this.postsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.postsService.remove(id);
  }
}
