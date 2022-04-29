'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    team: String,
    builder: String,
    class: String,
    botname: String,
} );

module.exports = mongoose.model( 'Robots', courseSchema );
