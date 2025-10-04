<script lang="js" setup>
import { ref, onMounted, defineAsyncComponent } from 'vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import timeGridPlugin from "@fullcalendar/timegrid";
import rrulePlugin from '@fullcalendar/rrule'
import { INITIAL_EVENTS } from "@/shared/data/applications/calendar";
import { Modal } from "bootstrap"
import Pageheader from '@/components/pageheader/pageheader.vue';
import { Head } from '@inertiajs/vue3';
const fullCalendar = ref(null);

const FullCalendar = defineAsyncComponent(() => import ('@fullcalendar/vue3'))

const events = ref(
    [{
        title: "Calendar Events",
        id: "1",
        bg: "primary",
        icon: 'ri-calendar-line',
    },
    {
        title: "Birthday Events",
        id: "2",
        bg: "secondary",
        icon: 'ri-cake-2-line',
    },
    {
        title: "Holiday Calendar",
        id: "3",
        bg: "success",
        icon: 'ri-gift-line',
    },
    {
        title: "Office Events",
        id: "4",
        bg: "danger",
        icon: 'ri-building-line',
    },
    {
        title: "Festival Events",
        id: "6",
        bg: "info",
        icon: 'ri-tent-line',
    },
    {
        title: "Timeline Events",
        id: "7",
        bg: "warning",
        icon: 'ri-time-line',
    },
    {
        title: "Other Events",
        id: "5",
        bg: "teal",
        icon: 'ri-timeline-view',
    },
    ]);

const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, rrulePlugin],
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    initialView: "dayGridMonth",
    events: INITIAL_EVENTS,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    droppable: true,
    eventReceive: handleEventReceive,
    select: function (arg) {

        // Fill newEvent dates
        newEvent.value.start = arg.start
        newEvent.value.end = arg.end
        newEvent.value.title = ''
        newEvent.value.color = 'bg-primary-transparent'
        titleError.value = false
        // Show modal using Bootstrap JS
        bootstrapModalInstance.show()
        // Unselect dates after selection
        fullCalendar.value.getApi().unselect()
    },
    eventClick: function (arg) {
        openDeleteModal(arg.event)
    },
};

// Handle external event dragging into the calendar
function handleEventReceive(info) {
    if (info.draggedEl.classList.contains('fc-event')) {
        const title = info.draggedEl.querySelector('.fc-event-main')?.innerText;
        const className = info.draggedEl.className;

        // Add the event to FullCalendar
        fullCalendar.value?.getApi().addEvent({
            title: title,
            start: info.event.start,
            allDay: info.event.allDay,
            className: className, // Optional: Add the className to style the event
        });
    }
}

onMounted(() => {
    new Draggable(document.getElementById("external-events"), {
        itemSelector: ".fc-event",
        eventData: (eventEl) => {
            let event = {
                title: eventEl.innerText,
                duration: "01:00"
            };
            return event;
        }
    });
});

const dataToPass = {
    title: "Applications",
    currentpage: "Full Calendar",
    activepage: "Full Calendar"
}

//  Add Event

const picked = ref(new Date());
const picked1 = ref(new Date());
const eventModal = ref(null)
let bootstrapModalInstance = null

const newEvent = ref({
    title: '',
    start: null,
    end: null,
    color: 'bg-primary-transparent',
})

const titleError = ref(false)

function saveEvent() {
    if (!newEvent.value.title.trim()) {
        titleError.value = true
        return
    }
    titleError.value = false

    fullCalendar.value.getApi().addEvent({
        title: newEvent.value.title,
        start: newEvent.value.start,
        end: newEvent.value.end,
        allDay: true,
        classNames: [newEvent.value.color],
    })
    bootstrapModalInstance.hide()
}

function closeModal() {
    bootstrapModalInstance.hide()
}

onMounted(() => {
    // Initialize Bootstrap modal instance for control
    bootstrapModalInstance = new Modal(eventModal.value)
})

//  Delet event 

const deleteModal = ref(null)
let bootstrapDeleteModalInstance = null
const eventToDelete = ref(null) // store the event object to delete

function openDeleteModal(event) {
    eventToDelete.value = event
    bootstrapDeleteModalInstance.show()
}

function closeDeleteModal() {
    bootstrapDeleteModalInstance.hide()
}

function confirmDeleteEvent() {
    if (eventToDelete.value) {
        eventToDelete.value.remove() // remove the event from FullCalendar
        eventToDelete.value = null
    }
    closeDeleteModal()
}

onMounted(() => {
    bootstrapDeleteModalInstance = new Modal(deleteModal.value)
})
</script>

<template>
    <Head title="Full Calendar | Vyzor - Laravel & Vue " />
    <Pageheader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-3">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">All Events</div>
                    <button class="btn btn-primary btn-wave" data-bs-toggle="modal" data-bs-target="#addEvent"><i
                            class="ri-add-line align-middle me-1 fw-medium d-inline-block"></i>Create New Event</button>
                </div>
                <div class="card-body p-0">
                    <ul id="external-events" class="mb-0 p-3 list-unstyled column-list">
                        <template v-for="(event) in events" :key="event.id">
                            <li :class="['fc-event', 'mb-2', 'fc-h-event', 'fc-daygrid-event', 'fc-daygrid-block-event', `bg-${event.bg}`]"
                                :data-class="`bg-${event.bg}`" :data-event='JSON.stringify({ title: event.title })'>
                                <div :class="`fc-event-main text-fixed-white`">{{ event.title }}</div>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body p-0">
                    <div class="p-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <h6 class="fw-medium mb-0">
                                Upcoming Events
                            </h6>
                            <a href="javascript:void(0);" class="fs-13 text-muted text-decoration-underline">View All<i
                                    class="ti ti-arrow-narrow-right"></i></a>
                        </div>
                    </div>
                    <div id="full-calendar-activity">
                        <div class="p-3">
                            <ul class="list-unstyled mb-0 fullcalendar-events-activity">
                                <li>
                                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                                        <p class="mb-1 fw-medium">
                                            Annual School Day
                                        </p>
                                        <span class="badge bg-primary mb-1">02 Mar, 2025</span>
                                    </div>
                                    <p class="mb-0 text-muted fs-13">
                                        A celebration of the school year with various events and activities for students
                                        and staff.
                                    </p>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                                        <p class="mb-1 fw-medium">
                                            Science Fair
                                        </p>
                                        <span class="badge bg-secondary mb-1">17 Mar, 2025</span>
                                    </div>
                                    <p class="mb-0 text-muted fs-13">
                                        Students will showcase their science projects. Open to all parents and students.
                                    </p>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                                        <p class="mb-1 fw-medium">
                                            Parent-Teacher Meeting
                                        </p>
                                        <span class="badge bg-warning mb-1">15 Mar, 2025</span>
                                    </div>
                                    <p class="mb-0 text-muted fs-13">
                                        An important event where parents meet teachers to discuss the progress of their
                                        children.
                                    </p>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                                        <p class="mb-1 fw-medium">
                                            Spring Break
                                        </p>
                                        <span class="badge bg-info mb-1">13 Mar,2025</span>
                                    </div>
                                    <p class="mb-0 text-muted fs-13">
                                        The students get a break for the spring holidays. No school during this period.
                                    </p>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                                        <p class="mb-1 fw-medium">
                                            Holiday Celebrations
                                        </p>
                                        <span class="badge bg-success mb-1">Due Date</span>
                                    </div>
                                    <p class="mb-0 text-muted fs-13">
                                        Celebrating the upcoming national holiday with various cultural activities and
                                        festivities.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="col-xxl-9">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Full Calendar</div>
                </div>
                <div class="card-body">
                    <div id='calendar2'>
                        <FullCalendar ref="fullCalendar" :options="calendarOptions" />
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="modal fade" id="createEventModal" aria-labelledby="createEventModalLabel" ref="eventModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="createEventModalLabel">Create Event</h6>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="eventForm" @submit.prevent="saveEvent">
                        <div class="mb-3">
                            <label for="eventTitle" class="form-label">Event Title</label>
                            <input type="text" class="form-control" placeholder="Enter Event" id="eventTitle"
                                v-model="newEvent.title" autocomplete="off" required />
                            <div class="invalid-feedback" v-if="titleError">
                                Please enter an event title.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="eventDateRange" class="form-label">Event Date Range</label>
                            <Datepicker class="form-control custom-date-picker" autoApply placeholder="Choose date" v-model="picked" />
                        </div>
                        <div class="my-3">
                            <label for="eventColor" class="form-label">Event Color:</label>
                            <select id="eventColor" class="form-control" v-model="newEvent.color" name="Event-Color">
                                <option value="bg-primary-transparent" selected>Primary</option>
                                <option value="bg-success-transparent">Success</option>
                                <option value="bg-danger-transparent">Danger</option>
                                <option value="bg-warning-transparent">Warning</option>
                                <option value="bg-secondary-transparent">Secondary</option>
                                <option value="bg-info-transparent">Info</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" @click="closeModal" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary" id="saveEventButton" @click="saveEvent">
                        Save Event
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="deleteEventModal" aria-labelledby="deleteEventModalLabel" ref="deleteModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="deleteEventModalLabel">Delete Event</h6>
                    <button type="button" class="btn-close" @click="closeDeleteModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">Are you sure you want to delete this event?</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeDeleteModal" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-danger" id="deleteEventButton" @click="confirmDeleteEvent">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!--End::row-1 -->

    <!-- Add Event Modal -->
    <div class="modal fade" id="addEvent" tabindex="-1" aria-labelledby="addEventLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="addEventLabel1">Add Event</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row gy-3">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label" for="eventType">Event Type:</label>
                                <select class="form-control" data-trigger id="eventType">
                                    <option value="bg-primary">Primary</option>
                                    <option value="bg-secondary">Secondary</option>
                                    <option value="bg-success">Success</option>
                                    <option value="bg-info">Info</option>
                                    <option value="bg-warning">Warning</option>
                                    <option value="bg-danger">Danger</option>
                                    <option value="bg-teal">Teal</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="form-label" for="eventName">Event Name:</label>
                                <input type="text" class="form-control" placeholder="Enter event" id="eventName">
                            </div>
                        </div>
                       <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="fromDate">From:</label>
                                <div class="form-group">
                                    <div class="input-group salesDatePicker">
                                        <div class="input-group-text text-muted"><i class="ri-calendar-line"></i> </div>
                                        <Datepicker placeholder="From Date" class="form-control custom-date-picker" autoApply v-model="picked"
                                            time-picker-inline />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="toDate">To:</label>
                                <div class="form-group">
                                    <div class="input-group salesDatePicker">
                                        <div class="input-group-text text-muted"><i class="ri-calendar-line"></i> </div>
                                        <Datepicker placeholder="To Date" class="form-control custom-date-picker" autoApply v-model="picked1"
                                            time-picker-inline />
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="form-group">
                                <label class="form-label" for="description">Description:</label>
                                <textarea class="form-control" id="event-description" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="addEventButton">Add Event</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Add Event Modal -->
</template>

<style scoped>
/* Add your styles here */
</style>
