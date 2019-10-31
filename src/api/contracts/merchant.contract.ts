import { Contract } from './contract'
import { Injectable } from '@nestjs/common'
import { Merchant } from '../entities/merchant.entity'
import { Jarvis } from '../utils/jarvis'

@Injectable()
export class MerchantContract implements Contract {

  errors: any[]
  
  validate(model: Merchant): boolean {
    const jarvis = new Jarvis()

    jarvis.isRequired(model.cnpj, 'O CNPJ é obrigatório.')
    jarvis.hasMinLen(model.fantasyName, 1, 'O nome Fantasia é obrigatório')
    this.errors = jarvis.errors

    return jarvis.isValid()
  }

}