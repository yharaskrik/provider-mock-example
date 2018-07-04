import { UserService } from '../user/user.service';
import { MockUserService } from './mock-user.service';
import { Module } from '@nestjs/common';

const mockUserService = {provide: UserService, useClass: MockUserService};

@Module({
  providers: [
    mockUserService,
  ],
  exports: [
    mockUserService,
  ],
})
export class SharedSpecModule {}