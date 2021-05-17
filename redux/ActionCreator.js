import * as ActionTypes from './actionTypes'

export const NewestArr = (id, title, artist, description, image, price, views, date ) => ({
    type:ActionTypes.NEWEST_RENDERING,
    payload: {
        id: id,
        title: title,
        artist: artist,
        description: description,
        image: image,
        price: price,
        views: views,
        date: date,
    }
})