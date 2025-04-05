import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UsersService } from './users.service';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const dto = { name: 'John', email: 'john@mail.com', password: '123' };
    jest.spyOn(repo, 'create').mockReturnValue(dto as any);
    jest.spyOn(repo, 'save').mockResolvedValue({ id: '1', ...dto } as any);

    const result = await service.create(dto);
    expect(result).toEqual({ id: '1', ...dto });
  });
});
