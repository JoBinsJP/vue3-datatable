import { PaginationProps } from "./PaginationProps"
import { QueryProps }      from "./QueryProps"

export interface TableQuery {
    search: QueryProps["search"]
    page: PaginationProps["page"]
    per_page: PaginationProps["per_page"]
}
