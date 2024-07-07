import { $t } from 'src/i18n';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class Signup {
  @ApiProperty()
  @IsNotEmpty({ message: $t('USERNAME_REQUIRED') })
  username: string;

  @ApiProperty({ enum: Gender })
  @IsEnum(Gender, { message: $t('BAD_GENDER_FORMAT') })
  gender: Gender;

  @ApiProperty()
  @IsEmail(undefined, { message: $t('BAD_EMAIL_FORMAT') })
  email: string;

  @ApiProperty()
  @IsStrongPassword(undefined, {
    message: $t('STRONG_PASSWORD_REQUIRED'),
  })
  password: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  profession?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nationality?: string;

  @ApiPropertyOptional()
  photo?: string;
}

export class Signin {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
