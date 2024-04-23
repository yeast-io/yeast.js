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


/**
 * @description It is a timestamp object which is related to the createdDate and lastModifiedDate
 * @interface MTeamTimestamp
 * @property { string } createdDate - For example, '2024-04-05 22:19:31'
 * @property { string } lastModifiedDate - For example, '2024-04-05 22:19:31'
 */
export interface MTeamTimestamp {
  createdDate: string;
  lastModifiedDate: string;
}
