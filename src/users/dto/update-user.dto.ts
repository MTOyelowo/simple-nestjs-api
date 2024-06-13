import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";

// eslint-disable-next-line prettier/prettier
export class UpdateUserDto extends PartialType(CreateUserDto) { }
