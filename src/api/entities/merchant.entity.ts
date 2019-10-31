import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('merchant')
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cnpj: number;

  @Column()
  socialName: string;

  @Column({ nullable: true })
  openingDate: string;

  @Column({ nullable: true })
  fantasyName: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  addressComplement: string;

  @Column({ nullable: true })
  addressCity: string;

  @Column({ nullable: true })
  addressUF: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  cash: string;
}
