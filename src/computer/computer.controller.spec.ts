import { Test, TestingModule } from '@nestjs/testing';
import { ComputerController } from './computer.controller';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';
import { PowerService } from '../power/power.service';

describe('ComputerController', () => {
  let controller: ComputerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputerController],
      providers: [CpuService, DiskService, PowerService],
    }).compile();

    controller = module.get<ComputerController>(ComputerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
