import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { Category } from '../../../domain/Category/category.entity';
import { Message } from '../../../common/decorators/message.decorator';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @Message('Category created successfully')
  async create(@Body() dto: CreateCategoryDto): Promise<Category> {
    try {
      return this.categoryService.create(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  @Message('Categories fetched successfully')
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @Message('Category fetched successfully')
  async findById(@Param('id') id: string): Promise<Category | null> {
    return this.categoryService.findById(id);
  }

  @Get('sub/:id')
  @Message('Subcategories fetched successfully')
  async findSubcategories(@Param('id') id: string): Promise<Category[]> {
    return this.categoryService.findSubcategories(id);
  }
}
