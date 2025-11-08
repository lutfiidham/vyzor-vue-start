# Dokumentasi Page Components Vyzor Vue

## Daftar Isi

1. [Applications Components](#applications-components)
2. [Dashboard Components](#dashboard-components)
3. [Charts Components](#charts-components)
4. [General UI Components](#general-ui-components)
5. [Maps & Icons Components](#maps--icons-components)

---

## Applications Components

Komponen-komponen untuk berbagai aplikasi dan fitur produktivitas.

### Gallery

**Lokasi:** `resources/js/Pages/applications/gallery.vue`

**Fungsi:** Halaman galeri dengan grid layout, filter, dan lightbox.

**Fitur:**
- Grid/gallery layout dengan responsive columns
- Filter kategori (images, videos, documents)
- Search functionality
- Lightbox/modal preview
- Batch selection
- Upload functionality
- Sort options (date, name, size)

### Full Calendar

**Lokasi:** `resources/js/Pages/applications/full-calendar.vue`

**Fungsi:** Halaman kalender dengan drag & drop events.

**Fitur:**
- Month, week, day views
- Drag & drop events
- Event categories dengan color coding
- Recurring events
- Event creation/editing modal
- Calendar synchronization
- Export functionality

### File Manager

**Lokasi:** `resources/js/Pages/applications/file-manager.vue`

**Fungsi:** File manager dengan tree view dan file operations.

**Fitur:**
- Folder tree navigation
- File preview
- Upload/download files
- File operations (copy, move, delete, rename)
- Search and filter
- Multiple file selection
- File sharing
- Storage quota indicator

### Chat

**Lokasi:** `resources/js/Pages/applications/chat.vue`

**Fungsi:** Aplikasi chat real-time dengan multiple conversations.

**Fitur:**
- Contact list dengan status online
- Conversation threads
- Real-time messaging
- File sharing
- Emoji support
- Message search
- Typing indicators
- Read receipts

### Task Management

**Lokasi:** `resources/js/Pages/applications/task/kanban-board.vue` dan `list-view.vue`

**Fungsi:** Task management dengan kanban board dan list view.

**Fitur:**
- Kanban board dengan drag & drop
- List view dengan sorting/filtering
- Task details modal
- Assignments and due dates
- Priority levels
- Comments and attachments
- Progress tracking
- Team collaboration

### Email Application

**Lokasi:** `resources/js/Pages/applications/email/mail-app.vue` dan `mail-settings.vue`

**Fungsi:** Email client dengan inbox, compose, dan settings.

**Fitur:**
- Inbox dengan folder navigation
- Email compose dengan rich text editor
- Attachment support
- Email threading
- Search and filter
- Email templates
- Settings configuration
- Multiple account support

### To-Do List

**Lokasi:** `resources/js/Pages/applications/to-do-list.vue`

**Fungsi:** Simple to-do list dengan categories dan priorities.

**Fitur:**
- Task creation and editing
- Categories and tags
- Priority levels
- Due dates and reminders
- Progress tracking
- Bulk actions
- Search and filter

### Sweet Alerts

**Lokasi:** `resources/js/Pages/applications/sweet-alerts.vue`

**Fungsi:** Demo berbagai jenis alert dan notification.

**Fitur:**
- Success, error, warning, info alerts
- Confirmation dialogs
- Input prompts
- Timer alerts
- Custom styled alerts
- Position options
- Animation effects

---

## Dashboard Components

Komponen-komponen dashboard untuk berbagai domain bisnis dan industri.

### General Dashboards

#### Analytics Dashboard
**Lokasi:** `resources/js/Pages/dashboards/analytics.vue`
- Web traffic analytics
- User behavior tracking
- Conversion metrics
- Revenue analytics
- Real-time data visualization

#### Sales Dashboard
**Lokasi:** `resources/js/Pages/dashboards/sales.vue`
- Sales performance metrics
- Pipeline tracking
- Revenue forecasts
- Team performance
- Regional sales data

#### Social Media Dashboard
**Lokasi:** `resources/js/Pages/dashboards/social-media.vue`
- Social media metrics
- Engagement analytics
- Follower growth
- Content performance
- Multi-platform integration

#### Medical Dashboard
**Lokasi:** `resources/js/Pages/dashboards/medical.vue`
- Patient management
- Appointment scheduling
- Medical records
- Analytics and reporting
- Staff management

#### Podcast Dashboard
**Lokasi:** `resources/js/Pages/dashboards/podcast.vue`
- Episode analytics
- Listener statistics
- Revenue tracking
- Content management
- Distribution metrics

#### POS System Dashboard
**Lokasi:** `resources/js/Pages/dashboards/pos-system.vue`
- Sales transactions
- Inventory management
- Customer data
- Payment processing
- Daily reports

#### Stocks Dashboard
**Lokasi:** `resources/js/Pages/dashboards/stocks.vue`
- Stock portfolio tracking
- Real-time prices
- Market indices
- Portfolio analytics
- Watchlist management

### Specialized Dashboards

#### E-commerce Dashboard
**Lokasi:** `resources/js/Pages/dashboards/ecommerce/`
- **dashboard.vue**: Overview dengan sales, orders, customers
- **products.vue**: Product management dengan inventory tracking
- **product-details.vue**: Detailed product information dan analytics
- **orders.vue**: Order management dengan status tracking
- **order-details.vue**: Detailed order information
- **customers.vue**: Customer management dengan purchase history
- **cart.vue**: Shopping cart functionality
- **checkout.vue**: Checkout process dengan payment integration
- **add-product.vue**: Product creation form

#### CRM Dashboard
**Lokasi:** `resources/js/Pages/dashboards/crm/`
- **dashboard.vue**: CRM overview dengan leads, deals, contacts
- **leads.vue**: Lead management dengan scoring
- **deals.vue**: Deal pipeline dengan probability tracking
- **contacts.vue**: Contact management dengan communication history
- **companies.vue**: Company account management

#### Crypto Dashboard
**Lokasi:** `resources/js/Pages/dashboards/crypto/`
- **dashboard.vue**: Portfolio overview dengan market data
- **wallet.vue**: Cryptocurrency wallet management
- **transactions.vue**: Transaction history dan analysis
- **market-cap.vue**: Market capitalization data
- **currency-exchange.vue**: Exchange rates dan converter
- **buy-sell.vue**: Trading interface dengan order book

#### Jobs Dashboard
**Lokasi:** `resources/js/Pages/dashboards/jobs/`
- **dashboard.vue**: Jobs overview dengan statistics
- **search-jobs.vue**: Job search dengan filters
- **search-company.vue**: Company search dan discovery
- **search-candidate.vue**: Candidate search dan matching
- **jobs-list.vue**: Job listings dengan application tracking
- **job-post.vue**: Job posting creation
- **job-details.vue**: Detailed job information
- **candidate-details.vue**: Candidate profiles dan resumes
- **search-candidate.vue**: Advanced candidate search

#### Projects Dashboard
**Lokasi:** `resources/js/Pages/dashboards/projects/`
- **dashboard.vue**: Project overview dengan portfolio
- **projects-list.vue**: Project listing dengan status tracking
- **project-overview.vue**: Detailed project information
- **create-project.vue**: Project creation wizard

#### NFT Dashboard
**Lokasi:** `resources/js/Pages/dashboards/nft/`
- **dashboard.vue**: NFT portfolio overview
- **market-place.vue**: NFT marketplace interface
- **live-auction.vue**: Live auction tracking
- **nft-details.vue**: Detailed NFT information
- **create-nft.vue**: NFT creation process
- **wallet-integration.vue**: Wallet connection management

#### HRM Dashboard
**Lokasi:** `resources/js/Pages/dashboards/hrm.vue`
- Employee management
- Attendance tracking
- Payroll management
- Performance reviews
- Leave management

#### School Dashboard
**Lokasi:** `resources/js/Pages/dashboards/school.vue`
- Student management
- Course management
- Grade tracking
- Attendance system
- Parent portal

#### Courses Dashboard
**Lokasi:** `resources/js/Pages/dashboards/courses.vue`
- Course catalog
- Student enrollment
- Progress tracking
- Instructor management
- Content delivery

---

## Charts Components

Komponen-komponen untuk visualisasi data dengan berbagai library chart.

### Chart.js Charts
**Lokasi:** `resources/js/Pages/charts/chartjs-charts.vue`
- Line charts, bar charts, pie charts
- Doughnut charts, radar charts
- Polar area charts, scatter charts
- Mixed chart types
- Custom styling and animations

### Apex Charts
**Lokasi:** `resources/js/Pages/charts/apex-charts/`

#### Basic Charts
- **bar-chart.vue**: Bar charts dengan grouping dan stacking
- **line-chart.vue**: Line charts dengan multiple series
- **pie-chart.vue**: Pie charts dengan custom labels
- **column-chart.vue**: Column charts dengan animations

#### Advanced Charts
- **scatter-chart.vue**: Scatter plots dengan trend lines
- **bubble-chart.vue**: Bubble charts dengan size encoding
- **radar-chart.vue**: Radar charts untuk multi-dimensional data
- **polararea-chart.vue**: Polar area charts
- **heatmap-chart.vue**: Heatmaps untuk density visualization
- **funnel-chart.vue**: Funnel charts untuk conversion tracking
- **candlestick-chart.vue**: Candlestick charts untuk financial data
- **boxplot-chart.vue**: Box plots untuk statistical analysis
- **mixed-chart.vue**: Combination charts dengan multiple types
- **treemap-chart.vue**: Treemap untuk hierarchical data

### ECharts
**Lokasi:** `resources/js/Pages/charts/echart-charts.vue`
- 3D charts
- Geographic data visualization
- Sankey diagrams
- Sunburst charts
- Advanced statistical charts

---

## General UI Components

Komponen-komponen UI yang sering digunakan dalam aplikasi web.

### UI Elements

#### Basic Components
**Lokasi:** `resources/js/Pages/general/ui-elements/`
- **buttons.vue**: Button styles, sizes, states
- **badge.vue**: Badge variations dan positioning
- **alerts.vue**: Alert types dan dismissible alerts
- **breadcrumb.vue**: Breadcrumb navigation
- **button-group.vue**: Button groups dan toolbars
- **cards.vue**: Card layouts dan variations
- **images-figures.vue**: Image styles dan figure captions
- **links-interactions.vue**: Link styles dan interactive elements

#### Advanced UI
**Lokasi:** `resources/js/Pages/general/advanced-ui/`
- **accordion-collapse.vue**: Accordion panels dengan smooth animations
- **carousel.vue**: Image/content sliders dengan controls
- **modals-closes.vue**: Modal dialogs dengan various sizes
- **navbar.vue**: Navigation bars dengan dropdown menus
- **offcanvas.vue**: Slide-out panels dan sidebars
- **placeholders.vue**: Content placeholders dengan skeleton screens
- **ratings.vue**: Star ratings dan review systems
- **ribbons.vue**: Corner ribbons dan badges
- **sortable-js.vue**: Draggable elements dengan sorting
- **swiper-js.vue**: Touch-enabled sliders dan carousels
- **tour.vue**: Product tours dan step-by-step guides
- **media-player.vue**: Audio/video player controls
- **draggable-cards.vue**: Draggable card layouts

---

## Maps & Icons Components

Komponen-komponen untuk maps dan icon systems.

### Maps

#### Interactive Maps
**Lokasi:** `resources/js/Pages/maps/`
- **google.vue**: Google Maps integration dengan markers
- **leaflet.vue**: Leaflet maps dengan custom layers
- **jsvector.vue**: Vector maps dengan country data

### Icons

**Lokasi:** `resources/js/Pages/icons.vue`
- Icon library showcase
- Search functionality
- Category filtering
- Usage examples
- Custom icon creation

---

## Panduan Penggunaan Page Components

### Best Practices

1. **Pilih komponen yang tepat** sesuai kebutuhan fungsionalitas
2. **Kustomisasi props** untuk mengubah tampilan dan perilaku
3. **Integrasikan dengan layout** yang sesuai
4. **Pastikan responsive design** untuk mobile devices
5. **Optimalkan performa** untuk komponen yang kompleks

### Customization Tips

- Gunakan CSS classes untuk styling kustom
- Manfaatkan props untuk konfigurasi dinamis
- Integrasi dengan stores untuk state management
- Implementasi lazy loading untuk komponen besar
- Test pada berbagai devices dan browsers

### Integration Guidelines

- Gunakan router untuk navigation antar halaman
- Integrasikan dengan authentication system
- Implementasi error handling dan loading states
- Gunakan global stores untuk shared data
- Implementasi SEO optimization untuk halaman publik