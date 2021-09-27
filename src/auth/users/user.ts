import { ApiProperty } from '@nestjs/swagger';

export class IUser {
  @ApiProperty({ example: 'john' })
  username: string;

  @ApiProperty({ example: 'doe' })
  password: string;

  @ApiProperty({required: false})
  remember_me?: boolean;
}

export class IToken {
  access_token: string;

  @ApiProperty()
  refresh_token: string;
}
