export const sortArray = (param = 'price', tickets) => {
    return [...tickets].sort((a, b) => {
        if (param === 'price') {
            return a[param] - b[param];
        } else if (param === 'speed') {
            return ((a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))
        } else if (param === 'optimal') {
            return Math.round(a['price'] / 10000) - Math.round(b['price'] / 10000) || (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
        }
    })
}