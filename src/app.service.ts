import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): object {
    const brand = this.configService.get('brand');

    return {
      message: `Welcome to ${brand.name}`,
      tagline: brand.tagline,
      description: brand.description,
      origin: brand.origin,
      values: brand.values,
      mission: brand.mission,
      colors: brand.colors,
      api: {
        version: 'v1',
        status: 'operational',
        endpoints: {
          health: '/api/v1/health',
          users: '/api/v1/users',
        },
      },
    };
  }
}
