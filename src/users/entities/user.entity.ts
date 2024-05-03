import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity() //這個裝飾器告訴 TypeORM 這個類應該被視為一個實體類
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
