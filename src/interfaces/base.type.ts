/**
 * @description Interface for the pagination result
 * @interface Pagination
 * @property { number | string } pageNumber - Which page number you've requested
 * @property { number | string } pageSize - How many items per page
 * @property { number | string } total - Total number of items
 * @property { number | string } totalPages - Total number of pages
 * @genetic { DataType[] } data - The main body you've requested
 */
export interface Pagination<DataType> {
  pageNumber: number;
  pageSize: number;
  total: number;
  totalPages: number;
  data: DataType[];
}
