import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  login(@Body() data: any) {
    return this.authService.validateUser(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getCurrentUser(@Request() req: Request) {
    return this.authService.getUser(req.headers['authorization'].split(' ')[1]);
  }

  @Post('refresh-token')
  refreshToken(@Body() data: any) {
    return this.authService.refresh(data.refresh_token);
  }
}
