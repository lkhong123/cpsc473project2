import Ember from 'ember';
import Option from 'quiz/models/option';
import Poll from 'quiz/models/poll';

export default Ember.Route.extend({

    init() {
        this._super(...arguments);
        this.sockjs.on('messageReceived', this, 'messageReceived');
    },

    messageReceived(msgReceived) {
        msgReceived = JSON.parse(msgReceived);

        if (msgReceived.healder === 'response') {
            console.log('responded');
        }
    },

    actions: {
        createPoll(poll) {
            this.get('store').createPoll(poll);
            let pollForSending = {
                header: 'poll',
                question: poll.question,
                choice1: poll.options[0].value,
                choice2: poll.options[1].value,
                choice3: poll.options[2].value,
                id: '3',
                time: '60'
            };

            let tempSockjs = this.sockjs;
            let everySec = setInterval((function() {
                tempSockjs.sendInfo(JSON.stringify(pollForSending));
                pollForSending.time = parseInt(pollForSending.time) - 1;

                if (pollForSending.time < 0) {
                    clearInterval(everySec);
                }
            }), 1000);

            this.sockjs.sendInfo(JSON.stringify(pollForSending));
            this.transitionTo('polls.poll', poll);
        }
    },

    model() {
        return this.get('store').newPoll();
    },

    store: Ember.inject.service()
});
