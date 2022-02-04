import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  wrtier!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;
}
