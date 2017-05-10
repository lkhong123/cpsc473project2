import Ember from 'ember';
import Option from 'quiz/models/option';
import Poll from 'quiz/models/poll';

const polls = [
    Poll.create({
        id: '1',
        question: 'Which runtime environment will you need in order to run Ember CLI for development?',
        options: [
            Option.create({
                id: '1',
                value: 'Ruby',
                votes: 0
            }),
            Option.create({
                id: '2',
                value: 'Node.js',
                votes: 0
            }),
            Option.create({
                id: '3',
                value: 'Python',
                votes: 0
            }),
        ]
    }),

    Poll.create({
        id: '2',
        question: 'Which of the following commands installs Ember CLI?',
        options: [
            Option.create({
                id: '4',
                value: 'apt-get install ember-cli',
                votes: 3
            }),
            Option.create({
                id: '5',
                value: 'npm install -g ember-cli',
                votes: 4
            }),
            Option.create({
                id: '6',
                value: 'None of these',
                votes: 2
            }),
        ]
    })
];

export default Ember.Service.extend({
    createPoll(poll) {
        //  poll.set('id', (polls.length + 1).toString());
        polls.pushObject(poll);
        return poll;
    },

    getPollById(id) {
        return this.getPolls().findBy('id', id);
    },

    getPolls() {
        return polls;
    },

    newPoll() {
        return Poll.create({
            options: [
                Option.create({
                    votes: 0
                }),
                Option.create({
                    votes: 0
                }),
                Option.create({
                    votes: 0
                })
            ]
        });
    }
});
