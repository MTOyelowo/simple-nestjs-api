import { Module } from "@nestjs/common";
import { MyLoggerService } from "./my-logger.service";

@Module({
  providers: [MyLoggerService],
  exports: [MyLoggerService],
})
// eslint-disable-next-line prettier/prettier
export class MyLoggerModule { }
