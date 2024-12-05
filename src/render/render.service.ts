import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class RenderService {
  async checkType() {
    return typeof google;
  }
}
