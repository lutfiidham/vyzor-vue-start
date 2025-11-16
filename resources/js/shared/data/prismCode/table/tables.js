export const basicTable = {
  script: ` <TableComponent :headers="[{text:'Name'}, {text:'Created On'}, {text:'Number'}, {text:'Status'}]" :rows="tableData.basicRows" tableClass="table text-nowrap" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.createdOn }}</td>
                <td>{{ row.number }}</td>
                <td><span :class="badge {row.color}">{{ row.status }}</span></td>
            </TableComponent>`,
  data: `
             basicRows = [
        { name: 'Mark', createdOn: '21, Dec 2021', number: '+1234-12340', status: 'Completed', color: "bg-outline-primary" },
        { name: 'Monika', createdOn: '29, April 2022', number: '+1523-12459', status: 'Failed', color: "bg-outline-warning" },
        { name: 'Madina', createdOn: '30, Nov 2022', number: '+1982-16234', status: 'Successful', color: "bg-outline-success" },
        { name: 'Bhamako', createdOn: '18, Mar 2022', number: '+1526-10729', status: 'Pending', color: "bg-outline-secondary" },
    ]
            `,
}
export const BorderedTables = {
  script: `
   <TableComponent :headers="[{text:'User'}, {text:'Status'}, {text:'Email'}, {text:'Action'}]" :rows="tableData.bordered"
                    tableClass="table text-nowrap table-bordered" v-slot:cell="{ row }">
                    <th>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded"><img :src="(row.avatar)"
                                    alt="img"></span>{{ row.name }}
                        </div>
                    </th>
                    <td><span :class="badge bg-{row.color} text-{row.textColor}">{{ row.status }}</span></td>
                    <td>{{ row.email }}</td>
                    <td>
                        <div class="hstack gap-2 flex-wrap">
                            <a href="javascript:void(0);" class="text-info fs-14 lh-1"><i class="ri-edit-line"></i></a>
                            <a href="javascript:void(0);" class="text-danger fs-14 lh-1"><i
                                    class="ri-delete-bin-5-line"></i></a>
                        </div>
                    </td>
                </TableComponent>`,
  data: `
                bordered = [
                        { name: "Sukuro Kim", status: "Active", email: "kimosukuro@gmail.com", avatar: '/images/faces/13.jpg', color: "success-transparent" },
                        { name: "Hasimna", status: "Inactive", email: "hasimna2132@gmail.com", avatar: '/images/faces/6.jpg', color: "light", textColor: "dark" },
                        { name: "Azimo Khan", status: "Active", email: "azimokhan421@gmail.com", avatar: '/images/faces/15.jpg', color: "success-transparent" },
                        { name: "Samantha Julia", status: "Active", email: "julianasams143@gmail.com", avatar: '/images/faces/5.jpg', color: "success-transparent" }
                    ]
                `,
}
export const BorderedPrimary = {
  script: ` <TableComponent :headers="[{text:'Order'}, {text:'Date'}, {text:'Customer'}, {text:'Action'}]" :rows="tableData.borderedPrimary"
                    tableClass="table text-nowrap table-bordered border-primary" v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td><span class="badge bg-light text-dark">{{ row.date }}</span></td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xs me-2 online avatar-rounded">
                                <img :src="(row.avatar)" alt="img">
                            </span>{{ row.name }}
                        </div>
                    </td>
                    <td><span class="badge bg-primary-transparent">{{ row.status }}</span></td>
                </TableComponent>`,
  data: `
                 borderedPrimary = [
                        { id: "#0007", date: "26-04-2022", name: "Mayor Kelly", avatar: '/images/faces/3.jpg', status: "Booked" },
                        { id: "#0008", date: "15-02-2022", name: "Wicky Kross", avatar: '/images/faces/6.jpg', status: "Booked" },
                        { id: "#0009", date: "23-05-2022", name: "Julia Cam", avatar: '/images/faces/1.jpg', status: "Booked" }
                    ]
                `,
}
export const BorderedSuccess = {
  script: ` <TableComponent :headers="[{text:'Order'}, {text:'Date'}, {text:'Customer'}, {text:'Action'}]" :rows="tableData.borderedSuccess" tableClass="table text-nowrap table-bordered border-success" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td><span class="badge bg-light text-dark">{{ row.date }}</span></td>
                <td>
                    <div class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-2 online avatar-rounded">
                            <img :src="(row.avatar)" alt="img">
                        </span>{{ row.name }}
                    </div>
                </td>
                <td><span :class="badge {row.color}">{{ row.status }}</span></td>
            </TableComponent>`,
  data: `
            borderedSuccess = [
                    { id: "#0011", date: "07-01-2022", name: "Helsenky", avatar: '/images/faces/10.jpg', status: "Delivered", color: "bg-success-transparent" },
                    { id: "#0012", date: "18-05-2022", name: "Brodus", avatar: '/images/faces/14.jpg', status: "Delivered", color: "bg-success-transparent" },
                    { id: "#0013", date: "19-03-2022", name: "Chikka Alen", avatar: '/images/faces/12.jpg', status: "Delivered", color: "bg-success-transparent" }
                ]
            `,
}
export const BorderedWarning = {
  script: ` <TableComponent :headers="[{text:'Order'}, {text:'Date'}, {text:'Customer'}, {text:'Action'}]" :rows="tableData.borderedWarning" tableClass="table text-nowrap table-bordered border-warning" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td><span class="badge bg-light text-dark">{{ row.date }}</span></td>
                <td>
                    <div class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-2 online avatar-rounded">
                            <img :src="(row.avatar)" alt="img">
                        </span>{{ row.name }}
                    </div>
                </td>
                <td><span :class="badge {row.color}">{{ row.status }}</span></td>
            </TableComponent>`,
  data: `
             borderedWarning = [
                    { id: "#0014", date: "21-02-2022", name: "Sukuro Kim", avatar: '/images/faces/13.jpg', status: "Accepted", color: "bg-warning-transparent" },
                    { id: "#0018", date: "26-03-2022", name: "Alex Carey", avatar: '/images/faces/11.jpg', status: "Accepted", color: "bg-warning-transparent" },
                    { id: "#0020", date: "14-03-2022", name: "Pamila Anderson", avatar: '/images/faces/12.jpg', status: "Accepted", color: "bg-warning-transparent" }
                ]
            `,
}
export const TableWithoutBorders = {
  script: ` <TableComponent :headers="[{text:'User Name'}, {text:'Transaction Id'}, {text:'Created'}, {text:'Status'}]" :rows="tableData.withourBorder" tableClass="table text-nowrap table-borderless" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.ticketId }}</td>
                <td>{{ row.date }}</td>
                <td><span :class="badge {row.badgeClass}">{{ row.status }}</span></td>
            </TableComponent>`,
  data: `
            withourBorder = [
        { name: "Harshrath", ticketId: "#5182-3467", date: "24 May 2022", status: "Fixed", badgeClass: "bg-primary" },
        { name: "Zozo Hadid", ticketId: "#5182-3412", date: "02 July 2022", status: "In Progress", badgeClass: "bg-warning" },
        { name: "Martiana", ticketId: "#5182-3423", date: "15 April 2022", status: "Completed", badgeClass: "bg-success" },
        { name: "Alex Carey", ticketId: "#5182-3456", date: "17 March 2022", status: "Pending", badgeClass: "bg-danger" }
    ];
            `,
}
export const TableGroupDivideres = {
  script: ` <TableComponent :headers="[{text:'Product'}, {text:'Seller'}, {text:'Sale Percentage'}, {text:'Quantity Sold'}]" :rows="tableData.groupDivideres" tableClass="table text-nowrap" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.brand }}</td>
                <td><a href="javascript:void(0);" :class="text-{row.color}">{{ row.percentage }}<i :class="ri-arrow-{row.dir}-fill ms-1"></i></a></td>
                <td>250/1786</td>
            </TableComponent>`,
  data: `
            groupDivideres = [
        { name: "Smart Watch", brand: "Slowtrack.inc", percentage: "24.23%", stock: "250/1786", color: "success", dir: "up" },
        { name: "White Sneakers", brand: "American & Co.inc", percentage: "12.45%", stock: "123/985", color: "danger", dir: "down" },
        { name: "Baseball Bat", brand: "Sports Company", percentage: "06.64%", stock: "124/232", color: "success", dir: "up" },
        { name: "Black Hoodie", brand: "Renolds Fabrics", percentage: "14.42%", stock: "192/2456", color: "success", dir: "up" }
    ]
            `,
}
export const Stripedrows = {
  script: `  <TableComponent :headers="[{text:'ID'}, {text:'Date'}, {text:'Customer'}, {text:'Action'}]" :rows="tableData.stripedRows" tableClass="table text-nowrap table-striped" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td>{{ row.date }}</td>
                <td>{{ row.name }}</td>
                <td>
                    <button class="btn btn-sm btn-success btn-wave">
                        <i class="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                    </button>
                </td>
            </TableComponent>`,
  data: `
            stripedRows = [
                    { id: "2022R-01", date: "27-01-2022", name: "Moracco" },
                    { id: "2022R-02", date: "28-10-2022", name: "Thornton" },
                    { id: "2022R-03", date: "22-10-2022", name: "Larry Bird" },
                    { id: "2022R-04", date: "29-09-2022", name: "Erica Sean" }
                ]
            `,
}
export const Stripedcolumns = {
  script: `<TableComponent :headers="[{text:'ID'}, {text:'Date'}, {text:'Customer'}, {text:'Action'}]" :rows="tableData.stripedRows" tableClass="table text-nowrap table-striped-columns" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td>{{ row.date }}</td>
                <td>{{ row.name }}</td>
                <td>
                    <button class="btn btn-sm btn-danger btn-wave">
                        <i class="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                    </button>
                </td>
            </TableComponent>`,
  data: `
            stripedRows = [
        { id: "2022R-01", date: "27-01-2022", name: "Moracco" },
        { id: "2022R-02", date: "28-10-2022", name: "Thornton" },
        { id: "2022R-03", date: "22-10-2022", name: "Larry Bird" },
        { id: "2022R-04", date: "29-09-2022", name: "Erica Sean" }
    ]
            `,
}
export const PrimaryTable = {
  script: `  <TableComponent :headers="[{text:'#'}, {text:'First'}, {text:'Last'}, {text:'Handle'}]" :rows="tableData.colorTable" tableClass="table text-nowrap table-primary" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td>{{ row.firstName }}</td>
                <td>{{ row.lastName }}</td>
                <td>{{ row.username }}</td>
            </TableComponent>`,
  data: `
            colorTable = [
        { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
        { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
        { id: 3, firstName: "Larry the Bird", lastName: "Thornton", username: "@twitter" }
    ]
            `,
}
export const SecondaryTable = {
  script: ` <TableComponent :headers="[{text:'#'}, {text:'First'}, {text:'Last'}, {text:'Handle'}]" :rows="tableData.colorTable" tableClass="table text-nowrap table-secondary" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td>{{ row.firstName }}</td>
                <td>{{ row.lastName }}</td>
                <td>{{ row.username }}</td>
            </TableComponent>`,
  data: `
            colorTable = [
        { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
        { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
        { id: 3, firstName: "Larry the Bird", lastName: "Thornton", username: "@twitter" }
    ]`,
}
export const WarningTable = {
  script: `<TableComponent :headers="[{text:'#'}, {text:'First'}, {text:'Last'}, {text:'Handle'}]" :rows="tableData.colorTable" tableClass="table text-nowrap table-warning" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td>{{ row.firstName }}</td>
                <td>{{ row.lastName }}</td>
                <td>{{ row.username }}</td>
            </TableComponent>`,
  data: `
            colorTable = [
        { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
        { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
        { id: 3, firstName: "Larry the Bird", lastName: "Thornton", username: "@twitter" }
    ]`,
}
export const DangerTable = {
  script: `   <TableComponent :headers="['#', 'First', 'Last', 'Handle']" :rows="tableData.colorTable"
                    tableClass="table text-nowrap table-danger" v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.firstName }}</td>
                    <td>{{ row.lastName }}</td>
                    <td>{{ row.username }}</td>
                </TableComponent>`,
  data: `
                colorTable = [
                        { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
                        { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
                        { id: 3, firstName: "Larry the Bird", lastName: "Thornton", username: "@twitter" }
                    ]
                `,
}
export const DarkTable = {
  script: `<TableComponent :headers="[{text:'#'}, {text:'First'}, {text:'Last'}, {text:'Handle'}]" :rows="tableData.colorTable" tableClass="table text-nowrap table-dark" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td>{{ row.firstName }}</td>
                <td>{{ row.lastName }}</td>
                <td>{{ row.username }}</td>
            </TableComponent>`,
  data: `
             colorTable = [
                        { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
                        { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
                        { id: 3, firstName: "Larry the Bird", lastName: "Thornton", username: "@twitter" }
                    ]
            `,
}
export const SuccessTableWithStripedRows = {
  script: `
         <TableComponent :headers="[{text:'#'}, {text:'First'}, {text:'Last'}, {text:'Handle'}]" :rows="tableData.colorTable" tableClass="table text-nowrap table-success table-striped" v-slot:cell="{ row }">
                <td>{{ row.id }}</td>
                <td>{{ row.firstName }}</td>
                <td>{{ row.lastName }}</td>
                <td>{{ row.username }}</td>
            </TableComponent>`,
  data: `
            colorTable = [
                        { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
                        { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
                        { id: 3, firstName: "Larry the Bird", lastName: "Thornton", username: "@twitter" }
                    ]
            `,
}
export const HoverableRows = {
  script: ` <TableComponent :headers="[{text:'Product Manager'},{text: 'Category'}, {text:'Team'}, {text:'Status'}]"
                    :rows="tableData.hoverableRows" tableClass="table text-nowrap table-hover" v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                <img :src="(row.src)" alt="img">
                            </div>
                            <div>
                                <div class="lh-1">
                                    <span>{{ row.name }}</span>
                                </div>
                                <div class="lh-1">
                                    <span class="fs-11 text-muted">{{ row.email }}</span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><span :class="badge {row.color}">{{ row.category }}</span></td>
                    <td>
                        <div class="avatar-list-stacked">
                            <span v-for="(avatar, index) in row.avatars.slice(0, 3)" :key="index"
                                class="avatar avatar-sm avatar-rounded">
                                <img :src="avatar" alt="img">
                            </span>
                            <a class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                href="javascript:void(0);">
                                +{{ row.extraAvatarsCount }}
                            </a>
                        </div>
                    </td>
                    <td>
                        <div class="progress progress-xs">
                            <div class="progress-bar bg-primary" role="progressbar" :style="width: {row.progress}%"
                                :aria-valuenow="{row.progress}" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </td>
                </TableComponent>`,
  data: `
                 hoverableRows = [
                        { src: '/images/faces/10.jpg', name: "Joanna Smith", email: "joannasmith14@gmail.com", category: "Fashion", color: "bg-primary-transparent", progress: 52, avatars: ['/images/faces/10.jpg', '/images/faces/2.jpg', '/images/faces/8.jpg'], extraAvatarsCount: 5, },
                        { src: '/images/faces/2.jpg', name: "Kara Kova", email: "milesakara@gmail.com", category: "Clothing", color: "bg-warning-transparent", progress: 40, avatars: ['/images/faces/2.jpg', '/images/faces/4.jpg', '/images/faces/6.jpg'], extraAvatarsCount: 6, },
                        { src: '/images/faces/16.jpg', name: "Donald Trimb", email: "donaldo21@gmail.com", category: "Electronics", color: "bg-dark-transparent", progress: 17, avatars: ['/images/faces/16.jpg', '/images/faces/1.jpg', '/images/faces/11.jpg', '/images/faces/15.jpg'], extraAvatarsCount: 2, },
                        { src: '/images/faces/13.jpg', name: "Justin Gaethje", email: "justingae@gmail.com", category: "Sports", color: "bg-danger-transparent", progress: 72, avatars: ['/images/faces/13.jpg', '/images/faces/4.jpg', '/images/faces/6.jpg'], extraAvatarsCount: 5, },
                    ]
                `,
}
export const HoverablerowsWithstripedrows = {
  script: ` <TableComponent :headers="[{text:'Invoice'}, {text:'Customer'}, {text:'Status'}, {text:'Date'}]" :rows="tableData.hoverableRow"
                    tableClass="table text-nowrap table-striped table-hover" v-slot:cell="{ row }">
                    <td>{{ row.number }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-sm me-2 avatar-rounded">
                                <img :src="(row.avatar)" alt="img">
                            </div>
                            <div>
                                <div class="lh-1">
                                    <span>{{ row.name }}</span>
                                </div>
                                <div class="lh-1">
                                    <span class="fs-11 text-muted">{{ row.email }}</span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><span :class="badge {row.statusClass}">
                            <i :class="{row.statusIcon} align-middle me-1"></i>{{ row.status }}</span>
                    </td>
                    <td>Jul 26,2022</td>
                </TableComponent>`,
  data: `
                
                hoverableRow = [
                        { number: "IN-2032", name: "Mark Cruise", email: "markcruise24@gmail.com", status: "Paid", statusClass: "bg-success-transparent", statusIcon: "ri-check-fill", date: "Jul 26, 2022", avatar: '/images/faces/15.jpg', },
                        { number: "IN-2022", name: "Charanjeep", email: "charanjeep@gmail.in", status: "Paid", statusClass: "bg-success-transparent", statusIcon: "ri-check-fill", date: "Mar 14, 2022", avatar: '/images/faces/12.jpg', },
                        { number: "IN-2014", name: "Samantha Julie", email: "julie453@gmail.com", status: "Cancelled", statusClass: "bg-danger-transparent", statusIcon: "ri-close-fill", date: "Feb 1, 2022", avatar: '/images/faces/5.jpg', },
                        { number: "IN-2036", name: "Simon Cohen", email: "simon@gmail.com", status: "Refunded", statusClass: "light text-dark", statusIcon: "ri-reply-line", date: "Apr 24, 2022", avatar: '/images/faces/11.jpg', },
                    ],`,
}
export const TableHeadPrimary = {
  script: ` <TableComponent :headers="[{text:'User Name'}, {text:'Transaction Id'}, {text:'Created'}, {text:'Status'}]" :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-primary" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.orderNumber }}</td>
                <td>{{ row.date }}</td>
                <td>
                    <div class="hstack gap-2 fs-15">
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-download-2-line"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i class="ri-edit-line"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i class="ri-delete-bin-line"></i></a>
                    </div>
                </td>
            </TableComponent>`,
  data: `
            tableHeadwarning = [
        { name: "Harshrath", orderNumber: "#5182-3467", date: "24 May 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Zozo Hadid", orderNumber: "#5182-3412", date: "02 July 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Martiana", orderNumber: "#5182-3423", date: "15 April 2022", status: "Rejected", statusClass: "danger-light" },
        { name: "Alex Carey", orderNumber: "#5182-3456", date: "17 March 2022", status: "Processed", statusClass: "success-light" }
    ]
            `,
}
export const TableHeadwarning = {
  script: `<TableComponent :headers="[{text:'User Name'}, {text:'Transaction Id'}, {text:'Created'}, {text:'Status'}]" :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-warning" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.orderNumber }}</td>
                <td>{{ row.date }}</td>
                <td><button :class="btn btn-sm btn-{row.statusClass}">{{ row.status }}</button> </td>
            </TableComponent>`,
  data: `
            tableHeadwarning = [
        { name: "Harshrath", orderNumber: "#5182-3467", date: "24 May 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Zozo Hadid", orderNumber: "#5182-3412", date: "02 July 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Martiana", orderNumber: "#5182-3423", date: "15 April 2022", status: "Rejected", statusClass: "danger-light" },
        { name: "Alex Carey", orderNumber: "#5182-3456", date: "17 March 2022", status: "Processed", statusClass: "success-light" }
    ],
            `,
}
export const TableHeadSuccess = {
  script: `<TableComponent :headers="[{text:'User Name'}, {text:'Transaction Id'}, {text:'Created'}, {text:'Status'}]" :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-success" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.orderNumber }}</td>
                <td>{{ row.date }}</td>
                <td><button :class="btn btn-sm btn-{row.statusClass}">{{ row.status }}</button> </td>
            </TableComponent>`,
  data: ` tableHeadwarning = [
        { name: "Harshrath", orderNumber: "#5182-3467", date: "24 May 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Zozo Hadid", orderNumber: "#5182-3412", date: "02 July 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Martiana", orderNumber: "#5182-3423", date: "15 April 2022", status: "Rejected", statusClass: "danger-light" },
        { name: "Alex Carey", orderNumber: "#5182-3456", date: "17 March 2022", status: "Processed", statusClass: "success-light" }
    ],`,
}
export const TableHeadInfo = {
  script: ` <TableComponent :headers="[{text:'User Name'}, {text:'Transaction Id'}, {text:'Created'}, {text:'Status'}]" :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-info" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.orderNumber }}</td>
                <td>{{ row.date }}</td>
                <td><button :class="btn btn-sm btn-{row.statusClass}">{{ row.status }}</button> </td>
            </TableComponent>`,
  data: `
             tableHeadwarning = [
        { name: "Harshrath", orderNumber: "#5182-3467", date: "24 May 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Zozo Hadid", orderNumber: "#5182-3412", date: "02 July 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Martiana", orderNumber: "#5182-3423", date: "15 April 2022", status: "Rejected", statusClass: "danger-light" },
        { name: "Alex Carey", orderNumber: "#5182-3456", date: "17 March 2022", status: "Processed", statusClass: "success-light" }
    ]
            `,
}
export const TableHeadSecondary = {
  script: ` <TableComponent :headers="[{text:'User Name'}, {text:'Transaction Id'}, {text:'Created'}, {text:'Status'}]" :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-secondary" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.orderNumber }}</td>
                <td>{{ row.date }}</td>
                <td><button :class="btn btn-sm btn-{row.statusClass}">{{ row.status }}</button> </td>
            </TableComponent>`,
  data: ` tableHeadwarning = [
        { name: "Harshrath", orderNumber: "#5182-3467", date: "24 May 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Zozo Hadid", orderNumber: "#5182-3412", date: "02 July 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Martiana", orderNumber: "#5182-3423", date: "15 April 2022", status: "Rejected", statusClass: "danger-light" },
        { name: "Alex Carey", orderNumber: "#5182-3456", date: "17 March 2022", status: "Processed", statusClass: "success-light" }
    ]
            
            `,
}
export const TableHeadDanger = {
  script: ` <TableComponent :headers="[{text:'User Name'}, {text:'Transaction Id'}, {text:'Created'}, {text:'Status'}]" :rows="tableData.tableHeadwarning" tableClass="table text-nowrap" theadClass="table-danger" v-slot:cell="{ row }">
                <td>{{ row.name }}</td>
                <td>{{ row.orderNumber }}</td>
                <td>{{ row.date }}</td>
                <td><button :class="btn btn-sm btn-{row.statusClass}">{{ row.status }}</button> </td>
            </TableComponent>`,
  data: `
            tableHeadwarning = [
        { name: "Harshrath", orderNumber: "#5182-3467", date: "24 May 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Zozo Hadid", orderNumber: "#5182-3412", date: "02 July 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Martiana", orderNumber: "#5182-3423", date: "15 April 2022", status: "Rejected", statusClass: "danger-light" },
        { name: "Alex Carey", orderNumber: "#5182-3456", date: "17 March 2022", status: "Processed", statusClass: "success-light" }
    ]
            `,
}
export const TableFoot = {
  script: ` <TableComponent theadClass="table-primary" :headers="[{text:'S.No'}, {text:'Team'}, {text:'Matches Won'}, {text:'Win Ratio'}]" :rows="tableData.tableFoot" tableClass="table text-nowrap" v-slot:cell="{ row }">
                <td> {{ row.id }} </td>
                <td> {{ row.location }}</td>
                <td> {{ row.count }}</td>
                <td> <span class="badge bg-primary">{{ row.percentage }}</span></td>
            </TableComponent>`,
  data: `tableFoot = [
                    { id: '01', location: 'Manchester', count: 232, percentage: '42%' },
                    { id: '02', location: 'Barcelona', count: 175, percentage: '58%' },
                    { id: '03', location: 'Portugal', count: 126, percentage: '32%' },
                    { id: "Total", location: 'United States', count: 558, percentage: '56%', },
                ]`,
}
export const TableWithCaption = {
  script: ` <TableComponent :headers="[{text:'S.No'}, {text:'Country'}, {text:'Medals Won'}, {text:'No Of Athletes'}]" :rows="tableData.tableWithCaption" tableClass="table text-nowrap" v-slot:cell="{ row }">
                <td>{{ row.rank }}</td>
                <td>{{ row.country }}</td>
                <td>{{ row.year }}<i class="ri-medal-line mx-2"></i></td>
                <td>{{ row.value }}</td>

            </TableComponent>
            <caption class="d-flex">Top 3 Countries</caption>`,
  data: `
            tableWithCaption = [
        { rank: '01', country: 'United States', year: 2012, value: 1823 },
        { rank: '02', country: 'United Kingdom', year: 1012, value: 992 },
        { rank: '03', country: 'Germany', year: 914, value: 875 },
    ]
            `,
}
export const TableWithTopCaption = {
  script: ` <caption class="d-flex">Top IT Companies</caption>
            <TableComponent :headers="[{text:'S.No'}, {text:'Name'}, {text:'Revenue'}, {text:'Country'}]" :rows="tableData.tableWithTopCaption" tableClass="table text-nowrap caption-top" v-slot:cell="{ row }">
                <td>{{ row.rank }}</td>
                <td>{{ row.name }}</td>
                <td>{{ row.revenue }}</td>
                <td>{{ row.country }}</td>
            </TableComponent>`,
  data: `
            tableWithTopCaption = [
        { rank: '1', name: 'Microsoft', revenue: '$170 billion', country: 'United States' },
        { rank: '2', name: 'HP', revenue: '$72 billion', country: 'United States' },
        { rank: '3', name: 'IBM', revenue: '$60 billion', country: 'United States' },
    ]
            `,
}
export const ActiveTables = {
  script: `  <TableComponent :headers="[{text:'Name'}, {text:'Created On'}, {text:'Number'}, {text:'Status'}]" :rows="tableData.activeTables" tableClass="table text-nowrap" v-slot:cell="{ row }" :trClass="trClass">
                <td>{{ row.name }}</td>
                <td>{{ row.date }}</td>
                <td :class="row.tdClass">{{ row.phone }}</td>
                <td><span :class="badge {row.statusClass}">{{ row.status }}</span></td>
            </TableComponent>`,
  data: `
            activeTables = [
        { name: 'Mark', date: '21, Dec 2021', phone: '+1234-12340', status: 'Completed', statusClass: 'bg-primary', trClass: "table-active" },
        { name: 'Monika', date: '29, April 2022', phone: '+1523-12459', status: 'Failed', statusClass: 'bg-warning', },
        { name: 'Madina', date: '30, Nov 2022', phone: '+1982-16234', status: 'Successful', statusClass: 'bg-success', tdClass: "table-active" },
        { name: 'Bhamako', date: '18, Mar 2022', phone: '+1526-10729', status: 'Pending', statusClass: 'bg-secondary', },
    ]
            `,
}
export const SmallTables = {
  script: ` <TableComponent :headers="[{text:'Invoice'}, {text:'Created Date'}, {text:'Status'}, {text:'Action'}]" :rows="tableData.smallTables" tableClass="table text-nowrap table-sm" v-slot:cell="{ row }">
                <td>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="checkebox-sm" :checked="row.cheacked">
                        <label class="form-check-label" for="checkebox-sm"> {{ row.name }} </label>
                    </div>
                </td>
                <td>{{ row.date }}</td>
                <td><span :class="badge {row.statusClass}">{{ row.status }}</span></td>
                <td>
                    <div class="hstack gap-2 fs-15">
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i class="ri-download-2-line"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"><i class="ri-edit-line"></i></a>
                    </div>
                </td>
            </TableComponent>`,
  data: `
            smallTables = [
        { name: 'Zelensky', date: '25-Apr-2021', status: 'Paid', statusClass: 'bg-success-transparent', cheacked: true },
        { name: 'Kim Jong', date: '29-Apr-2022', status: 'Pending', statusClass: 'bg-danger-transparent', cheacked: false },
        { name: 'Obana', date: '30-Nov-2022', status: 'Paid', statusClass: 'bg-success-transparent', cheacked: false },
        { name: 'Sean Paul', date: '01-Jan-2022', status: 'Paid', statusClass: 'bg-success-transparent', cheacked: false },
        { name: 'Karizma', date: '14-Feb-2022', status: 'Pending', statusClass: 'bg-danger-transparent', cheacked: false },
    ]
            `,
}
export const Colorvariantstables = {
  script: ` <TableComponent :headers="[{text:'Color'},{text:'Client'}, {text:'State'}, {text:'Quantity'}, {text:'Total Price'}]" :rows="tableData.colorvariantsTables" tableClass="table text-nowrap" v-slot:cell="{ row }">
                <td>{{ row.type }}</td>
                <td>{{ row.title }}</td>
                <td><span :class="badge {row.badgeClass}">{{ row.status }}</span></td>
                <td>{{ row.quantity }}</td>
                <td>{{ row.amount }}</td>
            </TableComponent>`,
  data: `
            colorvariantsTables = [
        { type: 'Default', title: 'Rita Book', status: 'Processed', badgeClass: 'bg-primary-transparent', quantity: 22, amount: '$2,012' },
        { type: 'Primary', title: 'Rhoda Report', status: 'Processed', badgeClass: 'bg-primary', quantity: 22, amount: '$4,254' },
        { type: 'Secondary', title: 'Rita Book', status: 'Processed', badgeClass: 'bg-secondary', quantity: 26, amount: '$1,234' },
        { type: 'Success', title: 'Anne Teak', status: 'Processed', badgeClass: 'bg-success', quantity: 42, amount: '$2,623' },
        { type: 'Danger', title: 'Dee End', status: 'Processed', badgeClass: 'bg-danger', quantity: 52, amount: '$32,132' },
        { type: 'Warning', title: 'Lee Nonmi', status: 'Processed', badgeClass: 'bg-warning', quantity: 10, amount: '$1,434' },
        { type: 'Info', title: 'Lynne Gwistic', status: 'Processed', badgeClass: 'bg-info', quantity: 63, amount: '$1,854' },
        { type: 'Light', title: 'Fran Tick', status: 'Processed', badgeClass: 'bg-light text-dark', quantity: 5, amount: '$823' },
        { type: 'Dark', title: 'Polly Pipe', status: 'Processed', badgeClass: 'bg-dark text-white', quantity: 35, amount: '$1,832' },
    ]
            `,
}
export const Nesting = {
  script: ` <div class="table-responsive">
                <table class="table text-nowrap table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <table class="table text-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Aplhabets</th>
                                            <th scope="col">Users</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">A</th>
                                            <td>Dino King</td>
                                            <td>dinoking231@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">B</th>
                                            <td>Poppins sams</td>
                                            <td>pops@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">C</th>
                                            <td>Brian Shaw</td>
                                            <td>swanbrian@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Jimmy</td>
                            <td>the Ostrich</td>
                            <td>Dummy Text</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Cobra Kai</td>
                            <td>the Snake</td>
                            <td>Another Name</td>
                        </tr>
                    </tbody>
                </table>
            </div>`,
}
export const Alwaysresponsive = {
  script: ` <TableComponent :headers="tableHeader" :rows="tableData.alwaysResponsive" tableClass="table text-nowrap" v-slot:cell="{ row }">
                <td><input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="...">
                </td>
                <td>
                    <div class="d-flex align-items-center">
                        <span class="avatar avatar-xs me-2 online avatar-rounded">
                            <img :src="(row.avatar)" alt="img">
                        </span>{{ row.name }}
                    </div>
                </td>
                <td>{{ row.position }}</td>
                <td><span :class="badge {row.badgeClass}">{{ row.badgeText }}</span></td>
                <td>{{ row.email }}</td>
                <td>
                    <div class="avatar-list-stacked">
                        <span v-for="(collaborator, idx) in row.collaborators" :key="idx" class="avatar avatar-sm avatar-rounded">
                            <img :src="collaborator" alt="img">
                        </span>
                        <a v-if="row.length" class="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" href="javascript:void(0);">
                            {{ row.length }}
                        </a>
                    </div>
                </td>
                <td>
                    <div class="progress progress-xs">
                        <div class="progress-bar bg-primary" role="progressbar" :style="{ width: row.progress }" aria-valuenow="row.progressValue" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </td>
                <td>{{ row.salary }}</td>
                <td>
                    <div class="hstack gap-2 fs-15">
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success"><i class="ri-download-2-line"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-info"><i class="ri-edit-line"></i></a>
                    </div>
                </td>
            </TableComponent>`,
}
export const Verticalalignment = {
  script: ` <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                                <th scope="col" class="w-25">Heading 1</th>
                                <th scope="col" class="w-25">Heading 2</th>
                                <th scope="col" class="w-25">Heading 3</th>
                                <th scope="col" class="w-25">Heading 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td>This here is some placeholder text, intended to take up
                                    quite a
                                    bit of vertical space, to demonstrate how the vertical
                                    alignment
                                    works in the preceding cells.</td>
                            </tr>
                            <tr class="align-bottom">
                                <td>This cell inherits <code>vertical-align: bottom;</code> from
                                    the
                                    table row</td>
                                <td>This cell inherits <code>vertical-align: bottom;</code> from
                                    the
                                    table row</td>
                                <td>This cell inherits <code>vertical-align: bottom;</code> from
                                    the
                                    table row</td>
                                <td>This here is some placeholder text, intended to take up
                                    quite a
                                    bit of vertical space, to demonstrate how the vertical
                                    alignment
                                    works in the preceding cells.</td>
                            </tr>
                            <tr>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td>This cell inherits <code>vertical-align: middle;</code> from
                                    the
                                    table</td>
                                <td class="align-top">This cell is aligned to the top.</td>
                                <td>This here is some placeholder text, intended to take up
                                    quite a
                                    bit of vertical space, to demonstrate how the vertical
                                    alignment
                                    works in the preceding cells.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`,
}
