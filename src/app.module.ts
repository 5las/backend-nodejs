import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AppController } from './app.controller';
import { CompaniesModule } from './companies/companies.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, CompaniesModule, TicketsModule],
  controllers: [AppController],
})
export class AppModule {}
