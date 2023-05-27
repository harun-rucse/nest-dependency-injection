import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ComputerModule } from '../src/computer/computer.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ComputerModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/computer (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200);
  });
});
