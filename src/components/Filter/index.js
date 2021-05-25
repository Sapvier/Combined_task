export const filterArray = (param = '1', tickets) => {
    if (param === 'no-stops') {
        return tickets.filter(ticket => ticket.segments[0].stops.length === 0 || ticket.segments[1].stops.length === 0)
    } else if (param === 'one-stop') {
        return tickets.filter(ticket => ticket.segments[0].stops.length === 1 || ticket.segments[1].stops.length === 1)
    }
    else if (param === 'two-stops') {
        return tickets.filter(ticket => ticket.segments[0].stops.length === 2 || ticket.segments[1].stops.length === 2)
    }
    else if (param === 'three-stops') {
        return tickets.filter(ticket => ticket.segments[0].stops.length === 3 || ticket.segments[1].stops.length === 3)
    }
    else if(param === 'all-stops') {

    }
}