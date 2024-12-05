import { Controller, Get } from '@nestjs/common';
import { RenderService } from './render.service';

@Controller('render')
export class RenderController {
  constructor(private readonly service: RenderService) {}

  @Get()
  async getRender() {
    return this.service.checkType();
  }
}
