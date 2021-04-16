"use strict";

const Subscriber = require("../models/subscriber");

module.exports = {
    index: (req, res, next) => {
        Subscriber.find()
        .then(subscribers => {
            res.locals.subscribers = subscribers;
            next()
        })
        .catch(error => {
            console.log(`Error fetching subscriber data: $error.message`);
            next(error);
        })
    },
    indexView: (req, res) => {
        res.render("/subscribers/index");
    }, 
    new: (req, res) => {
        res.render("/subscribers/new");
    }, 
    create: (req, res, next) => {
        let newSubscriber = new Subscriber({
            name: req.body.name,
            email: req.body.email, 
            zipCode: req.body.zipCode
        });
        subscriber.create(newSubscriber)
        .then( subscriber => {
            req.flash("success", `${subscriber.name}'s account created successfully!`);
            res.locals.subscriber = subscriber;
            res.locals.redirect = "/subscribers";
            next()
        })
        .catch (error => {
            console.log(`Error creating Vibez user: ${error.message}`);
            res.locals.redirect = "/subscribers/new";
            req.flash(
                "error",
                `Failed to create user account because: ${error.message}.`
            );
            next();
        })
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if(redirectPath != undefined)res.redirect(redirectPath);
        else next();
    },
    show: (req, res, next) => {
        let subscriberId = req.params.id;
        Subscriber.findById(subscriberId)
        .then(subscriber => {
            res.locals.subscriber = subscriber;
            next();
        })
        .catch (error => {
            console.log(`Error fetching subscriber by ID: ${error.message}`);
        })
    },
    showView: (req, res) => {
        res.render(subscribers/show);
    },
    edit: (req, res, next) => {
        let subscriberId = req.params.id;
        Subscriber.findById(subscriberId)
        .then(subscriber => {
            res.render("/subscribers/edit", {subscriber: subscriber});
        })
        .catch(error => {
            console.log(`Error fetching subsirber by ID: ${error.message}`);
            next(error);
        })
    },
    update: (req, res, next) => {
        let subscriberId = req.params.id;
        let updatesSubscriber = new Subscriber({
            name: req.body.name,
            email: req.body.email, 
            zipCode: req.body.zipCode
        });

        Subscriber.findByIdAndUpdate(subscriberId, updatesSubscriber)
        .then(subscriber => {
            res.locals.subscriber = subscriber;
            res.local.redirect = `/subscribers/${subscriber._id}`;
            next();
        })
        .catch(eror => {
            console.log(`Error fetching subscriber by ID: ${error.message}`);
            next(error);
        })
    },
    delete: (req, res, next) => {
        let subscriberId = req.params.id;
        Subscriber.findByIdAndRemove(subscriberId)
        .then(() => {
            res.locals.redirect = `/subscribers`;
            next();
        })
        .catch(error => {
            console.log(`Error fetching subscriber by ID: ${error.message}`);
            next(error);
        });
    }
} 