import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Merchant } from '../entities/merchant.entity'

@Injectable()
export class MerchantService {

  constructor(@InjectRepository(Merchant)
    private readonly repository: Repository<Merchant>
  ) {}

  async findById(id): Promise<Merchant> {
    return await this.repository.findOne({ id })
  }

  async create(merchant: Merchant) {
    return await this.repository.save(merchant)
  }

}
