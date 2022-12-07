import { AuthService } from './auth.service';
import { ApiTags, ApiProperty, ApiCreatedResponse } from '@nestjs/swagger';
import { Controller, Body, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './LoginDto';

class token {
  @ApiProperty({
      description:'Token JWT para autenticação',
      example:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  })
  token: string;
}

@ApiTags('Auth')
@Controller('auth')

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiCreatedResponse({
    description: 'Retorna um token JWT para autenticação',
    type: token
  })
  async login(@Body() data : LoginDto,@Req() req: any) {
      return await this.authService.login(req.user)
  }
}
