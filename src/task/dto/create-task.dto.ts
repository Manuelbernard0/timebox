import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsString()
    priority: string; 

    @IsNumber()
    userId: number; 

    @IsNumber()
    status: number; 
}

