document.addEventListener('DOMContentLoaded', function () {

    // Google Calendar API
    const api_key = 'AIzaSyCpxgo436kPeLR8BcPMO_jfu1pmju3KXdg';
    const multiMInitialDate = new Date();
    multiMInitialDate.setMonth(multiMInitialDate.getMonth()-2);

    let calendarEl = document.getElementById('calendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {

        // plugins settings
        schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
        // plugins: [ dayGridPlugin, momentPlugin ],

        // initial settings
        initialView: 'listYear',
        initialDate: new Date(),
        initialDate: '2025-04-01',

        // locale: 'ja', // Langage settings
        timeZone: 'Asia/Tokyo',
        // themeSystem: 'bootstrap5', // use bootstrap5 CDN
        height: '1000px',
        width: 'auto',
        // weekNumbers: true, // 第何週目か表示
        // dayMaxEvents: true, // allow "more" link when too many events
        navLinks: true, // can click day/week names to navigate views
        editable: true,

        // headerToolbar settings
        // https://fullcalendar.io/docs/headerToolbar
        headerToolbar: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'dayGridWeek4,listMonth3,multiWeek18,dayGridMonth,dayGridWeek,dayGridDay,listYear,listMonth',
        },
        
        // CalenderViews settings
        // https://fullcalendar.io/docs/view-specific-options
        // https://fullcalendar.io/docs/date-formatting
        views: {
            multiWeek18: {
                type: 'dayGridWeek',
                duration: { months: 18 },
                titleFormat: { year: '2-digit' },
                multiMonthMaxColumns: 1,
            },
            multiMonth18: {
                type: 'multiMonth',
                duration: { months: 18 },
                titleFormat: { year: '2-digit' },
                multiMonthMaxColumns: 1,
            },
            dayGridMonth: {
                titleFormat: { year: 'numeric', month: 'numeric' },
            },
            dayGridWeek: {
                titleFormat: { year: 'numeric', month: 'numeric' },
            },
            listYear: {
                listDayFormat: {month: 'short', day: 'numeric'},
                // listDayFormat: false,
                listDaySideFormat: { weekday: 'short'},
                // listDaySideFormat: false,
            },
            listMonth3: {
                type: 'listMonth',
                duration: { months: 12 },
                titleFormat: { year: '2-digit', month: 'short' },
                listDayFormat: {month: 'short', day: 'numeric'},
                // listDayFormat: false,
                listDaySideFormat: { weekday: 'short'},
                // listDaySideFormat: false,
            },
            dayGridWeek4: {
                type: 'dayGridWeek',
                duration: { days:10, weeks: 3},
                titleFormat: { year: '2-digit', month: 'short' },
                dayHeaderFormat: { weekday: 'short', day: 'numeric' },
            },
        },

        // footerToolbar settings
        footerToolbar: {
            left: '',
            center: 'doubleLeft,prev,next,doubleRight',
            right: ''
        },

        // customButtons settings
        // 二月戻ると進む
        customButtons: {
            doubleLeft: {
                text: '',
                icon: 'chevrons-left',
                click: () => {
                    calendar.prev();
                    calendar.prev();
                }
            },
            doubleRight: {
                text: '',
                icon: 'chevrons-right',
                click: () => {
                    calendar.next();
                    calendar.next();
                }
            }
        },

        // buttonText settings
        buttonText: {
            today: 'TODAY',
            day: 'D',
            week: 'W',
            month: 'M',
            year: 'Y',
            listYear: 'LY',
            listMonth: 'LM',
            prevYear: 'PY',
            nextYear: 'NY',
            multiMonth18: 'Y',
            multiWeek18: 'Y',
            listMonth3: 'L3',
            dayGridWeek4: 'W4',
        },

        // Google Calendar Settings
        googleCalendarApiKey: api_key,
        // Google Calendar ID settings
        events: 'https://fullcalendar.io/api/demo-feeds/events.json',
        events: 'mkyaguchi@gmail.com',
        events: 'v59uk2r77vq65dbpumcfnqaq40@group.calendar.google.com',
    });

    calendar.render();
});


function getEvents() {
    document.addEventListener('DOMContentLoaded', () => {
        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'local',
            headerToolbar: {
                left: 'doubleLeft,prev,next,doubleRight',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,timeGridDay,listMonth'
            },
            footerToolbar: {
                left: '',
                center: 'doubleLeft,prev,next,doubleRight',
                right: ''
            },
            buttonText: {
                month: '月',
                week: '週',
                day: '日',
                list: '一覧'
            },
            customButtons: {
                doubleLeft: {
                    text: '',
                    icon: 'chevrons-left',
                    click: () => {
                        // 二月戻る
                        calendar.prev();
                        calendar.prev();
                    }
                },
                doubleRight: {
                    text: '',
                    icon: 'chevrons-right',
                    click: () => {
                        // 二月進む
                        calendar.next();
                        calendar.next();
                    }
                },

            }
        });

        calendar.render();
    });

}