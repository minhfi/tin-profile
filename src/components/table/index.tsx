import MaterialTable, {
  MaterialTableProps,
  Options
} from '@material-table/core'
import Pagination, { PaginationProps } from '@mui/material/Pagination'
import { PropsWithChildren } from 'react'
import { STContainer } from './styled'

type CustomMaterialTableProps<T extends object> = MaterialTableProps<T>

type TableProps<T extends object, K> = PaginationProps & {
  pages?: number
  data?: T[]
  columns?: K[]
  options?: Pick<MaterialTableProps<T>, 'options'>
  onRowClick?: Pick<MaterialTableProps<T>, 'onRowClick'>
  onSelectionChange?: Pick<MaterialTableProps<T>, 'onSelectionChange'>
  loadPage: (page?: number) => void
} & CustomMaterialTableProps<T>

export const Table: <T extends object, K>(props: TableProps<T, K>) => JSX.Element = <T extends object, K>({
  page = 1,
  pages = 1,
  data = [],
  columns,
  options,
  loadPage,
  onRowClick,
  onSelectionChange
}: TableProps<T, K>) => {
  const handleChange = (_: React.ChangeEvent<unknown>, currentPage: number) => {
    if (currentPage === page) return
    return loadPage(currentPage)
  }

  const customOptions: Options<T> = {
    search: false,
    toolbar: false,
    showTitle: false,
    emptyRowsWhenPaging: false,
    pageSize: 10,
    sorting: true,
    selection: false,
    ...options
  }

  const ReactMaterialTable = MaterialTable as unknown as React.FC<PropsWithChildren<CustomMaterialTableProps<T>>>

  return (
    <STContainer>
      <ReactMaterialTable
        options={customOptions}
        localization={{
          body: {
            emptyDataSourceMessage: 'There are no record to display'
          }
        }}
        data={data}
        columns={columns}
        onRowClick={onRowClick}
        onSelectionChange={onSelectionChange}
      />
      <Pagination
        defaultPage={1}
        page={page}
        count={pages}
        size="large"
        onChange={handleChange}
      />
    </STContainer>
  )
}
