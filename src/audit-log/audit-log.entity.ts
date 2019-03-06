import { Table, PrimaryKey, Column } from 'sequelize-typescript';

@Table
export class AuditLogEnt {
    @PrimaryKey
    @Column
    auditId: string;

    @Column
    createAt: Date;

    @Column
    content: string;
}