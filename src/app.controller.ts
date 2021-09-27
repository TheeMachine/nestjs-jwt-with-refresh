import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt.guard';
import { IToken, IUser } from './auth/users/user';

@ApiTags('jwt-token')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Post('login')
  @ApiOperation({
    summary: 'Login Route',
    description:
      'Login with credentials and refresh token depends on remember me parameter',
  })
  login(@Body() data: IUser) {
    return this.authService.validateUser(data);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('user')
  @ApiOperation({
    summary: 'User Route',
    description:
      'Get user info from jwt token',
  })
  getCurrentUser(@Request() req: Request) {
    return this.authService.getUser(req.headers['authorization'].split(' ')[1]);
  }


  @ApiOperation({
    summary: 'Refresh Token Route',
    description:
      'Refreshing jwt if refresh token is valid',
  })
  @Post('refresh-token')
  refreshToken(@Body() data: IToken) {
    return this.authService.refresh(data.refresh_token);
  }
}
