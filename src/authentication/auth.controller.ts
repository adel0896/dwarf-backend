import {
  Controller,
  Post,
  UseGuards,
  Request as Request2,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request2() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/signuptenant')
  async signup(@Request2() req) {
    return this.authService.signupTenant(req.body);
  }
  @Post('auth/signupboardmember')
  async signupBoardMember(@Request2() req) {
    return this.authService.signupBoardMember(req.body);
  }
}
