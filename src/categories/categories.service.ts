import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';


@Injectable()
export class CategoriesService {
 
  constructor(@InjectRepository(Category)private rep:Repository<Category>){

  }

  async obtenerCategorias(categoria:Category):Promise<Category[]>{
    return await this.rep.find();
  }

  async obtenerCategoria(_id:number):Promise<Category[]>{
    return await this.rep.find({
        select: ["id","description","color",'imagen'],
        where: [
            {"id":_id}
        ]
    });
  }

  async crearCategoria(categoria:Category){
    await this.rep.insert(categoria);
  }

  async actualizarCategoria(categoria:Category){
    await this.rep.update({id:categoria.id},categoria);
  }
  async borrarCategoria(categoria:Category){
    await this.rep.delete(categoria);
  }



}