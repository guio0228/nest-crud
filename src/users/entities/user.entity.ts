import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Article } from '../../articles/entities/article.entity';
@Entity() //這個裝飾器告訴 TypeORM 這個類應該被視為一個實體類
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Article, (article) => article.user)
  articles: Article[];
}
