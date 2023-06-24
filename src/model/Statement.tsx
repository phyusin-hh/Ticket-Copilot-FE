export enum StatementType {
    Given,
    When,
    Then
}
export interface IStatement {
    id: string;
    type: StatementType;
    detail: string;
}