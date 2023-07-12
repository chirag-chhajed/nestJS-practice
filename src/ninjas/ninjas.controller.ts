import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'sword') {
    // const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createNinja(@Body() CreateNinjaDto: CreateNinjaDto) {
    return {
      name: CreateNinjaDto.name,
    };
  }

  @Put(':id')
  updateNinja(@Param('id') id:string, @Body() updateNinjaDto: UpdateNinjaDto){
    return {
        id,
        name: updateNinjaDto
    };
  }
}
