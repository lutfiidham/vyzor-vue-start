

import * as Svgicons from "./menusvg-icons";
const badgePrimary = `<span class="badge bg-primary-transparent ms-2">9</span>`
const badgeSucccess = `<span class="badge bg-success-transparent ms-2">6</span>`
const badgeWarning = `<span class="badge bg-warning-transparent ms-2">5</span>`
const badgeInfo = `<span class="badge bg-info-transparent ms-2">4</span>`
const badgedanger = `<span class="badge bg-danger-transparent ms-2">6</span>`
const badgeSuccess = `<span class="badge bg-success-transparent ms-2">8</span>`
let baseUrl = __BASE_PATH__
export const MENUITEMS = [

    {
        menutitle: 'MAIN'
    },
    {
        title: "Dashboards", icon: Svgicons.Dashboardicon, type: "sub", active: false, dirchange: false, children: [

            { path: `${baseUrl}/dashboards/sales`, icon: Svgicons.Salesicon, type: "link", active: false, selected: false, dirchange: false, title: "Sales" },
            { path: `${baseUrl}/dashboards/analytics`, icon: Svgicons.Analyticsicon, type: "link", active: false, selected: false, dirchange: false, title: "Analytics" },

            {
                title: "Ecommerce", type: "sub", badgetxt: badgePrimary, icon: Svgicons.Ecommerceicon, active: false, dirchange: false, children: [

                    { path: `${baseUrl}/dashboards/ecommerce/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${baseUrl}/dashboards/ecommerce/products`, type: "link", active: false, selected: false, dirchange: false, title: "Products" },
                    { path: `${baseUrl}/dashboards/ecommerce/product-details`, type: "link", active: false, selected: false, dirchange: false, title: "Product Details" },
                    { path: `${baseUrl}/dashboards/ecommerce/cart`, type: "link", active: false, selected: false, dirchange: false, title: "Cart" },
                    { path: `${baseUrl}/dashboards/ecommerce/checkout`, type: "link", active: false, selected: false, dirchange: false, title: "Checkout" },
                    { path: `${baseUrl}/dashboards/ecommerce/customers`, type: "link", active: false, selected: false, dirchange: false, title: "Customers" },
                    { path: `${baseUrl}/dashboards/ecommerce/orders`, type: "link", active: false, selected: false, dirchange: false, title: "Orders" },
                    { path: `${baseUrl}/dashboards/ecommerce/order-details`, type: "link", active: false, selected: false, dirchange: false, title: "Order Details" },
                    { path: `${baseUrl}/dashboards/ecommerce/add-product`, type: "link", active: false, selected: false, dirchange: false, title: "Add Product" },

                ]
            },
            {
                title: "Crypto", type: "sub", badgetxt: badgeSucccess, icon: Svgicons.Cryptoicon, active: false, selected: false, dirchange: false, children: [

                    { path: `${baseUrl}/dashboards/crypto/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${baseUrl}/dashboards/crypto/transactions`, type: "link", active: false, selected: false, dirchange: false, title: "Transactions" },
                    { path: `${baseUrl}/dashboards/crypto/currency-exchange`, type: "link", active: false, selected: false, dirchange: false, title: "Exchange" },
                    { path: `${baseUrl}/dashboards/crypto/buy-sell`, type: "link", active: false, selected: false, dirchange: false, title: "Buy & Sell" },
                    { path: `${baseUrl}/dashboards/crypto/market-cap`, type: "link", active: false, selected: false, dirchange: false, title: "Marketcap" },
                    { path: `${baseUrl}/dashboards/crypto/wallet`, type: "link", active: false, selected: false, dirchange: false, title: "Wallet" },

                ],
            },
            {
                title: "CRM", type: "sub", badgetxt: badgeWarning, icon: Svgicons.Crmicon, active: false, selected: false, dirchange: false, children: [

                    { path: `${baseUrl}/dashboards/crm/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${baseUrl}/dashboards/crm/contacts`, type: "link", active: false, selected: false, dirchange: false, title: "Contacts" },
                    { path: `${baseUrl}/dashboards/crm/companies`, type: "link", active: false, selected: false, dirchange: false, title: "Companies" },
                    { path: `${baseUrl}/dashboards/crm/deals`, type: "link", active: false, selected: false, dirchange: false, title: "Deals" },
                    { path: `${baseUrl}/dashboards/crm/leads`, type: "link", active: false, selected: false, dirchange: false, title: " Leads" },

                ],
            },
            {
                title: "Projects", type: "sub", badgetxt: badgeInfo, icon: Svgicons.Projectsicon, active: false, selected: false, dirchange: false, children: [

                    { path: `${baseUrl}/dashboards/projects/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${baseUrl}/dashboards/projects/projects-list`, type: "link", active: false, selected: false, dirchange: false, title: "Projects List" },
                    { path: `${baseUrl}/dashboards/projects/project-overview`, type: "link", active: false, selected: false, dirchange: false, title: "Project Overview" },
                    { path: `${baseUrl}/dashboards/projects/create-project`, type: "link", active: false, selected: false, dirchange: false, title: "Create Project" },

                ],
            },
            { path: `${baseUrl}/dashboards/hrm`, type: "link", icon: Svgicons.Hrmicon, active: false, selected: false, dirchange: false, title: "HRM" },
            { path: `${baseUrl}/dashboards/courses`, type: "link", active: false, icon: Svgicons.Courseicon, selected: false, dirchange: false, title: "Courses" },
            { path: `${baseUrl}/dashboards/stocks`, type: "link", active: false, icon: Svgicons.Stockicon, selected: false, dirchange: false, title: "Stocks" },
            {
                title: "NFT", type: "sub", badgetxt: badgedanger, active: false, icon: Svgicons.Nfticon, selected: false, dirchange: false, children: [

                    { path: `${baseUrl}/dashboards/nft/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${baseUrl}/dashboards/nft/market-place`, type: "link", active: false, selected: false, dirchange: false, title: "Market Place" },
                    { path: `${baseUrl}/dashboards/nft/nft-details`, type: "link", active: false, selected: false, dirchange: false, title: "NFT Details" },
                    { path: `${baseUrl}/dashboards/nft/create-nft`, type: "link", active: false, selected: false, dirchange: false, title: "Create NFT" },
                    { path: `${baseUrl}/dashboards/nft/wallet-integration`, type: "link", active: false, selected: false, dirchange: false, title: " Wallet Integration" },
                    { path: `${baseUrl}/dashboards/nft/live-auction`, type: "link", active: false, selected: false, dirchange: false, title: "Live Auction" },

                ],
            },
            {
                title: "Jobs", type: "sub", badgetxt: badgeSuccess, active: false, icon: Svgicons.Jobsicon, selected: false, children: [

                    { path: `${baseUrl}/dashboards/jobs/dashboard`, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
                    { path: `${baseUrl}/dashboards/jobs/job-details`, type: "link", active: false, selected: false, dirchange: false, title: "Job Details" },
                    { path: `${baseUrl}/dashboards/jobs/search-company`, type: "link", active: false, selected: false, dirchange: false, title: "Search Company" },
                    { path: `${baseUrl}/dashboards/jobs/search-jobs`, type: "link", active: false, selected: false, dirchange: false, title: "Search Jobs" },
                    { path: `${baseUrl}/dashboards/jobs/job-post`, type: "link", active: false, selected: false, dirchange: false, title: " Job Post" },
                    { path: `${baseUrl}/dashboards/jobs/jobs-list`, type: "link", active: false, selected: false, dirchange: false, title: " Jobs List" },
                    { path: `${baseUrl}/dashboards/jobs/search-candidate`, type: "link", active: false, selected: false, dirchange: false, title: " Search Candidate" },
                    { path: `${baseUrl}/dashboards/jobs/candidate-details`, type: "link", active: false, selected: false, dirchange: false, title: "Candidate Details" },

                ],
            },
            { path: `${baseUrl}/dashboards/podcast`, type: "link", icon: Svgicons.Podcasticon, active: false, selected: false, dirchange: false, title: "Podcast" },
            { path: `${baseUrl}/dashboards/social-media`, type: "link", icon: Svgicons.Socialicon, active: false, selected: false, dirchange: false, title: "Social Media" },
            { path: `${baseUrl}/dashboards/school`, type: "link", icon: Svgicons.Schoolicon, active: false, selected: false, dirchange: false, title: "School" },
            { path: `${baseUrl}/dashboards/medical`, type: "link", icon: Svgicons.Medicalicon, active: false, selected: false, dirchange: false, title: "Medical" },
            { path: `${baseUrl}/dashboards/pos-system`, type: "link", icon: Svgicons.Posicon, active: false, selected: false, dirchange: false, title: "POS System" },
        ]
    },

    {
        menutitle: 'WEB APPS'
    },

    {
        title: "Applications", icon: Svgicons.Applicationicon, type: "sub", active: false, selected: false, dirchange: false, children: [

            { path: `${baseUrl}/applications/chat`, icon: Svgicons.Chaticon, type: "link", active: false, selected: false, dirchange: false, title: "Chat" },
            {
                title: "Email", type: "sub", icon: Svgicons.Emailicon, active: false, children: [

                    { path: `${baseUrl}/applications/email/mail-app`, type: "link", active: false, selected: false, dirchange: false, title: "Mail App" },
                    { path: `${baseUrl}/applications/email/mail-settings`, type: "link", active: false, selected: false, dirchange: false, title: "Mail Settings" },

                ]
            },
            { path: `${baseUrl}/applications/file-manager`, icon: Svgicons.Fileicon, type: "link", active: false, selected: false, dirchange: false, title: "File Manager" },
            { path: `${baseUrl}/applications/full-calendar`, icon: Svgicons.Fullicon, type: "link", active: false, selected: false, dirchange: false, title: "Full Calendar" },
            { path: `${baseUrl}/applications/gallery`, type: "link", icon: Svgicons.Galleryicon, active: false, selected: false, dirchange: false, title: "Gallery" },
            { path: `${baseUrl}/applications/sweet-alerts`, type: "link", icon: Svgicons.Sweeticon, active: false, selected: false, dirchange: false, title: "Sweet Alerts" },
            {
                title: "Task", type: "sub", icon: Svgicons.Taskicon, active: false, selected: false, dirchange: false, doublToggle: false, children: [

                    { path: `${baseUrl}/applications/task/kanban-board`, type: "link", active: false, selected: false, dirchange: false, title: "Kanban Board" },
                    { path: `${baseUrl}/applications/task/list-view`, type: "link", active: false, selected: false, dirchange: false, title: "List View" },

                ]
            },
            { path: `${baseUrl}/applications/to-do-list`, icon: Svgicons.Todoicon, type: "link", active: false, selected: false, dirchange: false, title: "To Do List" },
        ],
    },

    {
        title: "Nested Menu", icon: Svgicons.Nestedmenuicon, selected: false, active: false, dirchange: false, type: "sub", children: [

            { path: `${baseUrl}/`, title: "Nested-1", icon: Svgicons.Nested1icon, type: "empty", active: false, selected: false, dirchange: false },
            {
                title: "Nested-2", icon: Svgicons.Nested2icon, type: "sub", active: false, selected: false, dirchange: false, children: [

                    { path: `${baseUrl}/`, type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2.1" },
                    {
                        title: "Nested-2.2", path: `${baseUrl}/`, type: "sub", ctive: false, selected: false, dirchange: false, children: [
                            { path: `${baseUrl}/`, type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2.2.1" },
                            { path: `${baseUrl}/`, type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2.2.2" },
                        ]
                    },

                ],
            },

        ],
    },

    {
        menutitle: 'PAGES'
    },

    {
        icon: Svgicons.Pagesicon, title: "Pages", type: "sub", active: false, dirchange: false, children: [
            {
                icon: Svgicons.Authenticationicon, title: " Authentication", type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${baseUrl}/pages/authentication/coming-soon`, type: "link", active: false, selected: false, title: "Coming Soon" },

                    {
                        title: "Create Password", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${baseUrl}/pages/authentication/create-password/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${baseUrl}/pages/authentication/create-password/cover`, type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Lock Screen", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${baseUrl}/pages/authentication/lock-screen/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${baseUrl}/pages/authentication/lock-screen/cover`, type: "link", active: false, selected: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Reset Password", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${baseUrl}/pages/authentication/reset-password/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${baseUrl}/pages/authentication/reset-password/cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Sign Up", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${baseUrl}/pages/authentication/sign-up/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${baseUrl}/pages/authentication/sign-up/cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Sign In", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${baseUrl}/pages/authentication/sign-in/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${baseUrl}/pages/authentication/sign-in/cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
                        ],
                    },
                    {
                        title: "Two Step Verification", type: "sub", active: false, selected: false, dirchange: false, children: [
                            { path: `${baseUrl}/pages/authentication/two-step-verification/basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
                            { path: `${baseUrl}/pages/authentication/two-step-verification/cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
                        ],
                    },
                    { path: `${baseUrl}/pages/authentication/under-maintenance`, type: "link", active: false, selected: false, dirchange: false, title: "Under Maintainance" },
                ]
            },
            {
                icon: Svgicons.Erroricon, title: "Error", type: "sub", active: false, selected: false, dirchange: false, children: [

                    { path: `${baseUrl}/pages/error/401-error`, type: "link", active: false, selected: false, dirchange: false, title: "401-Error" },
                    { path: `${baseUrl}/pages/error/404-error`, type: "link", active: false, selected: false, dirchange: false, title: "404-Error" },
                    { path: `${baseUrl}/pages/error/500-error`, type: "link", active: false, selected: false, dirchange: false, title: "500-Error" },
                ]
            },
            {
                title: "Blog", icon: Svgicons.Blogicon, type: "sub", active: false, dirchange: false, children: [
                    { path: `${baseUrl}/pages/blog/blog`, type: "link", active: false, selected: false, dirchange: false, title: "Blog" },
                    { path: `${baseUrl}/pages/blog/blog-details`, type: "link", active: false, selected: false, dirchange: false, title: "Blog-Details" },
                    { path: `${baseUrl}/pages/blog/create-blog`, type: "link", active: false, selected: false, dirchange: false, title: "Create-Blog" },
                ]
            },
            { path: `${baseUrl}/pages/empty`, icon: Svgicons.Emptyicon, type: "link", active: false, selected: false, dirchange: false, title: "Empty", },
            {
                title: "Forms", icon: Svgicons.Formsicon, type: "sub", active: false, selected: false, dirchange: false, children: [

                    { path: `${baseUrl}/pages/forms/form-advanced`, type: "link", active: false, selected: false, dirchange: false, title: "Form Advanced" },

                    {
                        title: "Form Elements", type: "sub", menusub: true, active: false, selected: false, dirchange: false, children: [
                            { path: `${baseUrl}/pages/forms/form-elements/inputs`, type: "link", active: false, selected: false, dirchange: false, title: "Inputs" },
                            { path: `${baseUrl}/pages/forms/form-elements/checks-radios`, type: "link", active: false, selected: false, dirchange: false, title: "Checks & Radios " },
                            { path: `${baseUrl}/pages/forms/form-elements/input-group`, type: "link", active: false, selected: false, dirchange: false, title: "Input Group" },
                            { path: `${baseUrl}/pages/forms/form-elements/form-select`, type: "link", active: false, selected: false, dirchange: false, title: "Form Select" },
                            { path: `${baseUrl}/pages/forms/form-elements/range-slider`, type: "link", active: false, selected: false, dirchange: false, title: "Range Slider" },
                            { path: `${baseUrl}/pages/forms/form-elements/input-masks`, type: "link", active: false, selected: false, dirchange: false, title: "Input Masks" },
                            { path: `${baseUrl}/pages/forms/form-elements/file-uploads`, type: "link", active: false, selected: false, dirchange: false, title: "File Uploads" },
                            { path: `${baseUrl}/pages/forms/form-elements/date-time-picker`, type: "link", active: false, selected: false, dirchange: false, title: "Date,Time Picker" },
                            { path: `${baseUrl}/pages/forms/form-elements/color-picker`, type: "link", active: false, selected: false, dirchange: false, title: "Color Pickers" },

                        ],
                    },
                    { path: `${baseUrl}/pages/forms/floating-labels`, type: "link", active: false, selected: false, dirchange: false, title: "Floating Labels" },
                    { path: `${baseUrl}/pages/forms/form-layouts`, type: "link", active: false, selected: false, dirchange: false, title: "Form Layouts" },
                    { path: `${baseUrl}/pages/forms/form-wizards`, type: "link", active: false, selected: false, dirchange: false, title: "Form Wizards" },
                    { path: `${baseUrl}/pages/forms/vue-editor`, type: "link", active: false, selected: false, dirchange: false, title: "Vue Editor" },
                    { path: `${baseUrl}/pages/forms/validation`, type: "link", active: false, selected: false, dirchange: false, title: "Validation" },
                ],
            },
            { path: `${baseUrl}/pages/faqs`, icon: Svgicons.Faqsicon, type: "link", active: false, selected: false, dirchange: false, title: "FAQ's" },
            {
                title: "Invoice", type: "sub", icon: Svgicons.Invoiceicon, menusub: true, active: false, selected: false, dirchange: false, children: [
                    { path: `${baseUrl}/pages/invoice/create-invoice`, type: "link", active: false, selected: false, dirchange: false, title: "Create Invoice" },
                    { path: `${baseUrl}/pages/invoice/invoice-details`, type: "link", active: false, selected: false, dirchange: false, title: "Invoice Details" },
                    { path: `${baseUrl}/pages/invoice/invoice-list`, type: "link", active: false, selected: false, dirchange: false, title: "Invoice List" },
                ],
            },
            { path: `${baseUrl}/pages/landing`, icon: Svgicons.Landingicon, type: "link", active: false, selected: false, dirchange: false, title: "Landing" },
            { path: `${baseUrl}/pages/pricing`, icon: Svgicons.Pricingicon, type: "link", active: false, selected: false, dirchange: false, title: "Pricing" },
            { path: `${baseUrl}/pages/profile`, type: "link", icon: Svgicons.Profileicon, active: false, selected: false, dirchange: false, title: "Profile" },
            { path: `${baseUrl}/pages/profile-settings`, type: "link", icon: Svgicons.Profilesettingicon, active: false, selected: false, dirchange: false, title: "Profile Settings" },
            { path: `${baseUrl}/pages/testimonials`, type: "link", icon: Svgicons.Testimonialicon, active: false, selected: false, dirchange: false, title: "Testimonials" },
            { path: `${baseUrl}/pages/search`, type: "link", icon: Svgicons.Searchicon, active: false, selected: false, dirchange: false, title: "Search" },
            { path: `${baseUrl}/pages/team`, type: "link", icon: Svgicons.Teamicon, active: false, selected: false, dirchange: false, title: "Team", },
            { path: `${baseUrl}/pages/terms-conditions`, type: "link", icon: Svgicons.Termsicon, active: false, selected: false, dirchange: false, title: "Terms & Conditions" },
            { path: `${baseUrl}/pages/timeline`, type: "link", icon: Svgicons.Timelineicon, active: false, selected: false, dirchange: false, title: "Timeline" },
        ]
    },

    {
        menutitle: 'GENERAL'
    },

    {
        title: "General", icon: Svgicons.Generalicon, type: "sub", active: false, selected: false, dirchange: false, children: [
            {
                title: "Ui Elements", icon: Svgicons.Elementsicon, type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${baseUrl}/general/ui-elements/alerts`, type: "link", active: false, selected: false, dirchange: false, title: "Alerts" },
                    { path: `${baseUrl}/general/ui-elements/badge`, type: "link", active: false, selected: false, dirchange: false, title: "Badge" },
                    { path: `${baseUrl}/general/ui-elements/breadcrumb`, type: "link", active: false, selected: false, dirchange: false, title: "Breadcrumb" },
                    { path: `${baseUrl}/general/ui-elements/buttons`, type: "link", active: false, selected: false, dirchange: false, title: "Buttons" },
                    { path: `${baseUrl}/general/ui-elements/button-group`, type: "link", active: false, selected: false, dirchange: false, title: "Button Group" },
                    { path: `${baseUrl}/general/ui-elements/cards`, type: "link", active: false, selected: false, dirchange: false, title: "Cards" },
                    { path: `${baseUrl}/general/ui-elements/dropdowns`, type: "link", active: false, selected: false, dirchange: false, title: "Dropdowns" },
                    { path: `${baseUrl}/general/ui-elements/images-figures`, type: "link", active: false, selected: false, dirchange: false, title: "Images & Figures" },
                    { path: `${baseUrl}/general/ui-elements/links-interactions`, type: "link", active: false, selected: false, dirchange: false, title: "Links & Interactions" },
                    { path: `${baseUrl}/general/ui-elements/list-group`, type: "link", active: false, selected: false, dirchange: false, title: "List Group" },
                    { path: `${baseUrl}/general/ui-elements/navs-tabs`, type: "link", active: false, selected: false, dirchange: false, title: "Navs & Tabs" },
                    { path: `${baseUrl}/general/ui-elements/object-fit`, type: "link", active: false, selected: false, dirchange: false, title: "Object Fit" },
                    { path: `${baseUrl}/general/ui-elements/pagination`, type: "link", active: false, selected: false, dirchange: false, title: "Pagination" },
                    { path: `${baseUrl}/general/ui-elements/popovers`, type: "link", active: false, selected: false, dirchange: false, title: "Popovers" },
                    { path: `${baseUrl}/general/ui-elements/progress`, type: "link", active: false, selected: false, dirchange: false, title: "Progress" },
                    { path: `${baseUrl}/general/ui-elements/spinners`, type: "link", active: false, selected: false, dirchange: false, title: "Spinners" },
                    { path: `${baseUrl}/general/ui-elements/toasts`, type: "link", active: false, selected: false, dirchange: false, title: "Toasts" },
                    { path: `${baseUrl}/general/ui-elements/tooltips`, type: "link", active: false, selected: false, dirchange: false, title: "Tooltips" },
                    { path: `${baseUrl}/general/ui-elements/typography`, type: "link", active: false, selected: false, dirchange: false, title: "Typography" },
                ],
            },
            {
                title: "Utilities", icon: Svgicons.Utilitiesicon, type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${baseUrl}/general/utilities/avatars`, type: "link", active: false, selected: false, dirchange: false, title: "Avatars" },
                    { path: `${baseUrl}/general/utilities/borders`, type: "link", active: false, selected: false, dirchange: false, title: "Borders" },
                    { path: `${baseUrl}/general/utilities/breakpoints`, type: "link", active: false, selected: false, dirchange: false, title: "Breakpoints" },
                    { path: `${baseUrl}/general/utilities/colors`, type: "link", active: false, selected: false, dirchange: false, title: "Colors" },
                    { path: `${baseUrl}/general/utilities/columns`, type: "link", active: false, selected: false, dirchange: false, title: "Columns" },
                    { path: `${baseUrl}/general/utilities/css-grid`, type: "link", active: false, selected: false, dirchange: false, title: "Css Grid" },
                    { path: `${baseUrl}/general/utilities/flex`, type: "link", active: false, selected: false, dirchange: false, title: "Flex" },
                    { path: `${baseUrl}/general/utilities/gutters`, type: "link", active: false, selected: false, dirchange: false, title: "Gutters" },
                    { path: `${baseUrl}/general/utilities/helpers`, type: "link", active: false, selected: false, dirchange: false, title: "Helpers" },
                    { path: `${baseUrl}/general/utilities/position`, type: "link", active: false, selected: false, dirchange: false, title: "Position" },
                    { path: `${baseUrl}/general/utilities/additional-content`, type: "link", active: false, selected: false, dirchange: false, title: "Additional Content" },

                ],
            },
            {
                title: "Advanced Ui", icon: Svgicons.Advancedicon, type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: `${baseUrl}/general/advanced-ui/accordions-collapse`, type: "link", active: false, selected: false, dirchange: false, title: "Accordions & Collapse" },
                    { path: `${baseUrl}/general/advanced-ui/carousel`, type: "link", active: false, selected: false, dirchange: false, title: "Carousel" },
                    { path: `${baseUrl}/general/advanced-ui/draggable-cards`, type: "link", active: false, selected: false, dirchange: false, title: "Draggable Cards" },
                    { path: `${baseUrl}/general/advanced-ui/media-player`, type: "link", active: false, selected: false, dirchange: false, title: "Media Player" },
                    { path: `${baseUrl}/general/advanced-ui/modals-closes`, type: "link", active: false, selected: false, dirchange: false, title: "Modals & Closes" },
                    { path: `${baseUrl}/general/advanced-ui/navbar`, type: "link", active: false, selected: false, dirchange: false, title: "Navbar" },
                    { path: `${baseUrl}/general/advanced-ui/offcanvas`, type: "link", active: false, selected: false, dirchange: false, title: "Offcanvas" },
                    { path: `${baseUrl}/general/advanced-ui/placeholders`, type: "link", active: false, selected: false, dirchange: false, title: "Placeholders" },
                    { path: `${baseUrl}/general/advanced-ui/ratings`, type: "link", active: false, selected: false, dirchange: false, title: "Ratings" },
                    { path: `${baseUrl}/general/advanced-ui/ribbons`, type: "link", active: false, selected: false, dirchange: false, title: "Ribbons" },
                    { path: `${baseUrl}/general/advanced-ui/sortable-js`, type: "link", active: false, selected: false, dirchange: false, title: "Sortable Js" },
                    { path: `${baseUrl}/general/advanced-ui/swiper-js`, type: "link", active: false, selected: false, dirchange: false, title: "Swiper JS" },
                    { path: `${baseUrl}/general/advanced-ui/tour`, type: "link", active: false, selected: false, dirchange: false, title: "Tour" },
                ],
            },
        ]
    },

    { path: `${baseUrl}/widgets`, icon: Svgicons.widgetsicon, title: "widgets", type: "link", active: false, dirchange: false, selected: false },

    {
        menutitle: 'MAPS & ICONS'
    },

    {
        title: "Maps", icon: Svgicons.Mapsicon, type: "sub", background: "hor-rightangle", active: false, selected: false, dirchange: false, children: [

            { path: `${baseUrl}/maps/jsvector`, icon: Svgicons.Vectoricon, type: "link", active: false, selected: false, dirchange: false, title: "vector Maps" },
            { path: `${baseUrl}/maps/leaflet`, icon: Svgicons.Leafleticon, type: "link", active: false, selected: false, dirchange: false, title: "Leaflet Maps" },
            { path: `${baseUrl}/maps/google`, icon: Svgicons.Googleicon, type: "link", active: false, selected: false, dirchange: false, title: "Google Maps" }

        ],
    },

    { path: `${baseUrl}/icons`, icon: Svgicons.Iconsicon, type: "link", active: false, selected: false, dirchange: false, title: "Icons" },

    {
        menutitle: 'TABLES & CHARTS'
    },

    {
        title: "Charts", icon: Svgicons.Chartsicon, type: "sub", dirchange: false, children: [
            {
                title: "Apex Charts", icon: Svgicons.Apexicon, type: "sub", menusub: true, active: false, selected: false, dirchange: false, children: [

                    { path: `${baseUrl}/charts/apex-charts/line-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Line Charts" },
                    { path: `${baseUrl}/charts/apex-charts/area-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Area Charts " },
                    { path: `${baseUrl}/charts/apex-charts/column-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Column Charts" },
                    { path: `${baseUrl}/charts/apex-charts/bar-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Bar Charts" },
                    { path: `${baseUrl}/charts/apex-charts/mixed-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Mixed Charts" },
                    { path: `${baseUrl}/charts/apex-charts/funnel-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Funnel Charts" },
                    { path: `${baseUrl}/charts/apex-charts/candlestick-chart`, type: "link", active: false, selected: false, dirchange: false, title: "CandleStick Charts" },
                    { path: `${baseUrl}/charts/apex-charts/boxplot-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Boxplot Charts" },
                    { path: `${baseUrl}/charts/apex-charts/bubble-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Bubble Charts" },
                    { path: `${baseUrl}/charts/apex-charts/scatter-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Scatter Charts" },
                    { path: `${baseUrl}/charts/apex-charts/heatmap-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Heatmap Charts" },
                    { path: `${baseUrl}/charts/apex-charts/treemap-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Treemap Charts" },
                    { path: `${baseUrl}/charts/apex-charts/pie-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Pie Charts" },
                    { path: `${baseUrl}/charts/apex-charts/radialbar-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Radialbar Charts" },
                    { path: `${baseUrl}/charts/apex-charts/radar-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Radar Charts" },
                    { path: `${baseUrl}/charts/apex-charts/polararea-chart`, type: "link", active: false, selected: false, dirchange: false, title: "Polararea Charts" },
                ],
            },
            { path: `${baseUrl}/charts/chartjs-charts`, icon: Svgicons.Chartjsicon, type: "link", active: false, selected: false, dirchange: false, title: "Chartjs Charts" },
            { path: `${baseUrl}/charts/echart-charts`, type: "link", icon: Svgicons.Echartsicon, active: false, selected: false, dirchange: false, title: "Echart Charts" },
        ],
    },

    {
        title: "Tables", icon: Svgicons.Tablesicon, type: "sub", menutitle: "", active: false, selected: false, dirchange: false, children: [

            { path: `${baseUrl}/tables/tables`, type: "link", icon: Svgicons.Basictableicon, active: false, selected: false, dirchange: false, title: "Tables" },
            { path: `${baseUrl}/tables/girdjs`, type: "link", icon: Svgicons.Gridjsicon, active: false, selected: false, dirchange: false, title: "Grid JS Tables" },
            { path: `${baseUrl}/tables/data-tables`, type: "link", icon: Svgicons.Datatablesicon, active: false, selected: false, dirchange: false, title: "Data Tables" },

        ],
    },
]