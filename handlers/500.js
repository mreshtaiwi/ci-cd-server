"use strict";
module.exports = (error, req, res, next) => {
    //we can use   .json
    res.status(500).send({
        code: 500,
        route: req.path,
        message: `Server Error: ${error.message}`,
    });
};