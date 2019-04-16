export interface IRepository<T> {
  getAll(): Promise<T[]>;
  create(T): Promise<T>;
}
