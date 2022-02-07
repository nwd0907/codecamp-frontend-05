import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  wrtier!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt!: Date;
}
