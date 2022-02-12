import { FilterCriteria } from "./FilterCriteria";
import { PaginationProps } from "./PaginationProps";
export interface TableQuery {
    page: PaginationProps["page"];
    per_page: PaginationProps["per_page"];
    dataCriteria?: FilterCriteria[];
}
