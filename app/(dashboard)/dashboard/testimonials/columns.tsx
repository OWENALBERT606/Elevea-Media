"use client";

import { Checkbox } from "@/components/ui/checkbox";
import DateColumn from "@/components/DataTableColumns/DateColumn";
import ImageColumn from "@/components/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import { Testimonial } from "@prisma/client";
import ActionColumn from "@/components/DataTableColumns/ActionColumn";

export const columns: ColumnDef<Testimonial>[] = [
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

  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },

  {
    accessorKey: "author",
    header: ({ column }) => (
      <SortableColumn column={column} title="Author" />
    ),
  },

  {
    accessorKey: "company",
    header: ({ column }) => (
      <SortableColumn column={column} title="Company" />
    ),
  },

  {
    accessorKey: "rating",
    header: ({ column }) => (
      <SortableColumn column={column} title="Rating" />
    ),
    cell: ({ row }) => (
      <span className="font-semibold">
        {row.original.rating} ⭐
      </span>
    ),
  },

  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <ActionColumn
          row={row}
          model="testimonial"
          editEndpoint={`testimonials/update/${item.id}`}
          id={item.id}
        />
      );
    },
  },
];
