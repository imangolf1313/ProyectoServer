import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Category } from './entities/category.entity';
import {CategoriesService} from './categories.service';


@Controller('categories')
export class CategoriesController {
  
  constructor(private servicio:CategoriesService){

  }

  @Get()
  getAll(@Param() params){
      return this.servicio.obtenerCategorias(params.id);
  }

  @Get(':id')
  get(@Param() params){
      return this.servicio.obtenerCategoria(params.id);
  }

  @Post()
  create(@Body() categoria:Category){
      return this.servicio.crearCategoria(categoria);
  }

  @Put()
  uptdate(@Body() categoria:Category){
      return this.servicio.actualizarCategoria(categoria);
  }

  @Delete(':id')
  delete(@Param() params){
      return this.servicio.borrarCategoria(params.id);
  }


}
