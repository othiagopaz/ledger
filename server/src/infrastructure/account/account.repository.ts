import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from '../../domain/Account/account.entity';
import { AccountEntity } from './account.orm-entity';
import { AccountMapper } from './account.mapper';
import { BaseRepository } from '../common/base.repository';
import { IAccountRepository } from './account.repository.interface';

@Injectable()
export class AccountRepository
  extends BaseRepository<Account, AccountEntity>
  implements IAccountRepository
{
  constructor(
    @InjectRepository(AccountEntity)
    repo: Repository<AccountEntity>,
    mapper: AccountMapper,
  ) {
    super(repo, mapper);
  }
}
