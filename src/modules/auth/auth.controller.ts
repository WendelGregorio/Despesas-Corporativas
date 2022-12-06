import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Body, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './LoginDto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() data : LoginDto,@Req() req: any) {
      return await this.authService.login(req.user)
  }
}
