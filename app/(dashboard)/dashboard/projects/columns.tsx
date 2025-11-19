"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import { Project } from "@prisma/client";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";

export const columns: ColumnDef<Project>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  // COVER IMAGE
  {
    accessorKey: "coverImage",
    header: "Cover",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="coverImage" />,
  },

  // PROJECT TITLE
  {
    accessorKey: "title",
    header: ({ column }) => (
      <SortableColumn column={column} title="Title" />
    ),
  },

  // CATEGORY
  {
    accessorKey: "category",
    header: ({ column }) => (
      <SortableColumn column={column} title="Category" />
    ),
  },

  // CREATED DATE
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },

  // ACTION BUTTONS
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <ActionColumn
          row={row}
          model="project"
          editEndpoint={`projects/update/${item.id}`}
          id={item.id}
        />
      );
    },
  },
];
