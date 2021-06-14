import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS =[
    //create table columns's headers and providing access to it using fieldname
    {
        Header:'S.no',
        accessor:'id',
        // Filter: ColumnFilter,
    },
    {
        Header:'Order id',
        accessor:'order_id',
        // Filter: ColumnFilter,
    },

    {
        Header:'Delivery',
        accessor:'delivery',
        // Filter: ColumnFilter,
    },
    {
        Header:'Category',
        accessor:'category',
        // Filter: ColumnFilter,
    },
    {
        Header:'Dress type',
        accessor:'dress_type',
        // Filter: ColumnFilter,
    },

    {
        Header:'Top Fabric type',
        accessor:'top_fabric_type',
        // Filter: ColumnFilter,
    },

    {
        Header:'Top size',
        accessor:'top_size',
        // Filter: ColumnFilter,
    },

    {
        Header:'Top price',
        accessor:'top_price',
        // Filter: ColumnFilter,
    },

    {
        Header:'Bottom Fabric type',
        accessor:'bottom_fabric_type',
        // Filter: ColumnFilter,
    },

    {
        Header:'Bottom size',
        accessor:'bottom_size',
        // Filter: ColumnFilter,
    },

    {
        Header:'Bottom price',
        accessor:'bottom_price',
        // Filter: ColumnFilter,
    },

    {
        Header:'Instructions',
        accessor:'instructions',
        // Filter: ColumnFilter,
    }
]