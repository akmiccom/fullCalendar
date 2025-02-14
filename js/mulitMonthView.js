document.addEventListener("DOMContentLoaded", function () {

    const api_key = 'AIzaSyCpxgo436kPeLR8BcPMO_jfu1pmju3KXdg';
    // const api_key = propcess.env.GOOGLE_CALLENDAR_API_KEY;
    
    
    const date = new Date();
    date.setMonth(date.getMonth()-2);

    let calendarEl = document.getElementById("calendar");
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "multiMonth18Month",
      multiMonthMaxColumns: 4,
      initialDate: date,
      views: {
      multiMonth18Month: {
        type: 'multiMonth',
        duration: { months: 18 },
    }},
    contentHeight: 'auto',
    headerToolbar: false,
    
    // ADD google api and google id
    googleCalendarApiKey: api_key,
    // events: 'mkyaguchi@gmail.com',
    // events: 'c35a464706be06c3f02a9ffee684b2cab7fcefd3bbd21cc88ee12023b72cf0d7@group.calendar.google.com',
    events: 'v59uk2r77vq65dbpumcfnqaq40@group.calendar.google.com',
    });

    calendar.render();
  });