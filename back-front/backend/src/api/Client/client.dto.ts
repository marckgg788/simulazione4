import { IsNotEmpty, IsString, IsDateString, IsOptional, IsUUID, IsEmail } from "class-validator";

export class CreateClientDTO {
   @IsString()
  @IsNotEmpty()
  nominativo: string;

  @IsString()
  @IsNotEmpty()
  via: string;

  @IsString()
  @IsNotEmpty()
  comune: string;

  @IsString()
  @IsNotEmpty()
  provincia: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  note?: string;
}

export class UpdateClientDTO {
  @IsString()
  @IsOptional()
  nominativo?: string;

  @IsString()
  @IsOptional()
  via?: string;

  @IsString()
  @IsOptional()
  comune?: string;

  @IsString()
  @IsOptional()
  provincia?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  note?: string;
}
