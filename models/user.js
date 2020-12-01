const mongoose = require('mongoose')

const User = mongoose.model('User', {
        player: {
                type: Boolean,
                required: true
                },
        username: {
                type: String,
                required: true,
                minlength: 1,
                trim: true,
                unique: true
        },
        suspended: {
                type: Boolean,
                required: true
        },
        name: {
                type: String,
                required: true,
                minlength: 1, 
                trim: true
        },
        image: {
                type: String,
                required: false,
                minlength: 1,
        },
        description: {
                type: String,
                required: false,
                minlength: 1,
                trim: true
        },
        location: {
            type: String,
            required: false,
            minlength: 1,
            trim: true
        },
        organization: {
            type: String,
            required: false,
            minlength: 1,
            trim: true
        },
        sports: {
            type: String,
            required: false,
            minlength: 1,
            trim: true
        },
        contact: {
            type: String,
            required: false,
            minlength: 1,
            trim: true
        },
        accomplishments: {
            type: Array,
            required: false,
            minlength: 1
        },
        // experience: [{title: 'Point Guard', organization: 'Los Angeles Lakers', league: "NBA", stats: {'2019': '25 ppg, 10apg'},
        // description: 'Led Lakers to a championship in the NBA Bubble 2020, averaging almost 30 ppg in the Finals against the Miami Heat',
        // years: '2018-2020'},
        // {title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
        // description: 'Made the NBA Finals in all four years, came back from a 3-1 deficit and won a championship in the 2016 NBA FInals', years: '2014-2018'},
        // {title: 'Small Forward', organization: 'Miami Heat', league: "NBA", stats:{},
        // description: 'Made the NBA Finals in all four years, delivered two championships and won Finals MVP in 2012 and 2013', years: '2010-2014'},
        // {title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
        // description: 'Took the team to an NBA Finals in 2009, averaged over 25 ppg', years: '2003-2010'}]
})

module.exports = { User }