import moment from "moment";

const now = new Date()

export default [
    {
        'title': 'All Day Event very title',
        'allDay': true,
        'start': new Date(2020, 4, 0),
        'end': new Date(2020, 4, 1)
    },
    {
        'title': 'Meeting',
        'start': new Date(2015, 4, 12, 10, 30, 0, 0),
        'end': new Date(2015, 4, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
        'title': 'Verteilte Systeme',
        'start': new Date(2020, 4, 20, 10, 30, 0, 0),
        'end': new Date(2020, 4, 21, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
        resource:"id: 1",

    },

    {
        start: moment().toDate(),
        end: moment()
            .add(1, "days")
            .toDate(),
        title: "Some title"
    },

    ]