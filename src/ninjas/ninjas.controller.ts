import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'sword') {
    return this.ninjasService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjasService.getNinja(+id);
  }

  @Post()
  createNinja(@Body() CreateNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(CreateNinjaDto)
  }

  @Put(':id')
  updateNinja(@Param('id') id:string, @Body() updateNinjaDto: UpdateNinjaDto){
    return this.ninjasService.updateNinja(+id, updateNinjaDto)
  }

  @Delete(':id')
  removeNinja(@Param('id') id:string){
    return this.ninjasService.removeNinja(+id)
  }
}
