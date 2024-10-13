import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';
import { Image } from './image.enity';

type ImageWithout = Omit<
  Image,
  'id' | 'tenant_id' | 'user_id' | 'url' | 'full_path' | 'file_name'
>;

export class UploadImageDto implements ImageWithout {
  @ApiProperty({
    description:
      'Name of the folder to upload the image. If it is empty, the image will be uploaded in the root folder',
    example: 'images',
  })
  @IsString()
  @Matches(/(^[a-z0-9.]*$)/, { message: 'Cannot contain characters like /' })
  folder_name: string;
}
