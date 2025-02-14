document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    const currentYear = new Date().getFullYear();
    
    // Google Calendar API Key
    const apiKey = 'AIzaSyCpxgo436kPeLR8BcPMO_jfu1pmju3KXdg';
    const calendarId = 'v59uk2r77vq65dbpumcfnqaq40@group.calendar.google.com';

    // Google Calendar APIからイベントを取得する関数
    function fetchEvents() {
        const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const events = data.items;
                addEventsToCalendar(events);
            })
            .catch(error => console.error('Error fetching events:', error));
    }

    // イベントをカレンダーに追加する関数
    function addEventsToCalendar(events) {
        // イベントの日付とタイトルをカレンダーに追加
        events.forEach(event => {
            const eventDate = new Date(event.start.dateTime || event.start.date);
            const eventTitle = event.summary;

            // イベントが表示される日付を特定
            const dayElement = document.querySelector(`.day[data-date="${eventDate.toISOString().split('T')[0]}"]`);
            if (dayElement) {
                const eventElement = document.createElement('div');
                eventElement.className = 'event';
                eventElement.textContent = eventTitle;
                dayElement.appendChild(eventElement);
            }
        });
    }

    // カレンダーの作成
    for (let m = 0; m < 13; m++) {
        const year = m < 12 ? currentYear : currentYear + 1;
        const month = m % 12;

        // Create month header
        const monthHeader = document.createElement('div');
        monthHeader.className = 'month-header';
        monthHeader.textContent = `${year} ${months[month]} `;
        calendar.appendChild(monthHeader);

        // Get the number of days in the month
        const lastDate = new Date(year, month + 1, 0).getDate();

        // Create days of the month
        for (let i = 1; i <= lastDate; i++) {
            const dayElement = document.createElement('div');
            const dayOfWeek = new Date(year, month, i).getDay();
            dayElement.className = 'day';
            dayElement.setAttribute('data-date', `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`);
            if (dayOfWeek === 0) {
                dayElement.classList.add('sunday');
            } else if (dayOfWeek === 6) {
                dayElement.classList.add('saturday');
            }

            const dateElement = document.createElement('div');
            dateElement.className = 'date';
            dateElement.textContent = i;

            const dayOfWeekElement = document.createElement('div');
            dayOfWeekElement.className = 'day-of-week';
            dayOfWeekElement.textContent = daysOfWeek[dayOfWeek];

            dayElement.appendChild(dateElement);
            dayElement.appendChild(dayOfWeekElement);
            calendar.appendChild(dayElement);
        }
    }

    // Google Calendarのイベントを取得
    fetchEvents();
});


// document.addEventListener('DOMContentLoaded', function () {
//     const calendar = document.getElementById('calendar');
//     const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//     const months = [
//         'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
//         'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
//     ];
//     const currentYear = new Date().getFullYear();

//     for (let m = 0; m < 13; m++) {
//         const year = m < 12 ? currentYear : currentYear + 1;
//         const month = m % 12;

//         // Create month header
//         const monthHeader = document.createElement('div');
//         monthHeader.className = 'month-header';
//         monthHeader.textContent = `${year} ${months[month]} `;
//         calendar.appendChild(monthHeader);

//         // Get first day of the month
//         const lastDate = new Date(year, month + 1, 0).getDate();

//         // Fill in the days
//         for (let i = 1; i <= lastDate; i++) {
//             const dayElement = document.createElement('div');
//             const dayOfWeek = new Date(year, month, i).getDay();
//             dayElement.className = 'day';
//             if (dayOfWeek === 0) {
//                 dayElement.classList.add('sunday');
//             } else if (dayOfWeek === 6) {
//                 dayElement.classList.add('saturday');
//             }

//             const dateElement = document.createElement('div');
//             dateElement.className = 'date';
//             dateElement.textContent = i;

//             const dayOfWeekElement = document.createElement('div');
//             dayOfWeekElement.className = 'day-of-week';
//             dayOfWeekElement.textContent = daysOfWeek[dayOfWeek];

//             dayElement.appendChild(dateElement);
//             dayElement.appendChild(dayOfWeekElement);
//             calendar.appendChild(dayElement);
//         }
//     }
// });