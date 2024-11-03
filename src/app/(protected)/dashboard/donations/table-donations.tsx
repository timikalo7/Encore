"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { deleteDonation } from "@/actions/delete-donation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "@/hooks/use-current-user";

interface TableDonationsProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function TableDonations<TData, TValue>({
  columns,
  data,
}: TableDonationsProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const queryClient = useQueryClient();
  const session = useCurrentUser();
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const { mutate: server_deleteDonation, isPending: isDeletePending } =
    useMutation({
      mutationKey: ["deleteDonation"],
      mutationFn: deleteDonation,
      onSuccess: () => {
        console.log("Deletion successful");
        queryClient.invalidateQueries({ queryKey: ["fetchDonations"] });
        table.resetRowSelection();
      },
      onError: (error) => {
        console.error("Error in deletion:", error);
      },
    });

  const onClick = (rows: any) => {
    const rowIds = rows.map((row: any) => row.original.id);
    console.log("Deleting row IDs:", rowIds);
    server_deleteDonation({ rowIds });
  };

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Asset Number..."
          value={
            (table.getColumn("assetNumber")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("assetNumber")?.setFilterValue(event.target.value)
          }
          className="max-w-sm xs:block hidden"
        />
        <div className="pl-4 text-sm text-muted-foreground xs:block hidden">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="xs:ml-auto justify-center xs:justify-normal flex items-center">
          {!session?.isLoading && session?.user?.role === "ADMIN" && (
            <Button
              onClick={
                table.getFilteredSelectedRowModel().rows.length
                  ? () => onClick(table.getFilteredSelectedRowModel().rows)
                  : undefined
              }
              className=""
              variant={
                table.getFilteredSelectedRowModel().rows.length
                  ? "destructive"
                  : "out"
              }
            >
              Delete <Trash2 className="h-4 w-4 ml-2" />
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-4">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .filter((column) => column.id !== "actions")
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
