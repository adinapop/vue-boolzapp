Vue.config.devtools = true;

new Vue (
    {
        el: "#app",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },

                {
                    name: 'Luca',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],

            currentUserIndex: 0,
            newMessage: "",
        },
        
        methods: {
            // function per immagine dinamica, associata direttamene al nome utente
            getImg: function(contact) {
                return "./img/avatar" + contact.avatar + ".jpg";
            },

            // function per il datetime
            getCurrentDateTime: function() {
                const dateTime = dayjs();
                return dateTime.format("DD/MM/YYYY HH:mm:ss")
            },

            // function per la prima lettera maiuscola
            toUpperCase: function(word) {
                word.charAt(0).toUpperCase() + word.slice(1);
            },
            
            // function per indicare quale esatto user voglio
            thisChat: function(index) {
                return this.currentUserIndex = index;
            },

            colorChat: function(index) {
                if (index === this.currentUserIndex) {
                    return "current";
                } else {
                    return "nothing";
                }
            },

            // function per controllare se il messaggio è sent o no, per poterlo inserire nella clsse sent o recevied
            controllMessage: function(status) {
                if (status === "sent") {
                    return true;
                } else {
                    return false;
                }
            },
            
            // function per inserire un nuovo messaggio all'interno dell'oggetto status:Sent perché deve essere nella casella verde
            addNewMessage: function() { 
                this.newMessage = this.newMessage[0].toUpperCase() + this.newMessage.slice(1);
                this.contacts[this.currentUserIndex].messages.push(
                    {
                        date: this.getCurrentDateTime(), 
                        text: this.newMessage, 
                        status: "sent"
                    }
                    );
                this.newMessage = ""; 
                this.receiveAnswer();
            },

            // function per risposta
            receiveAnswer: function() {
                setTimeout(() => {
                    return this.contacts[this.currentUserIndex].messages.push(
                        {
                            date: this.getCurrentDateTime(), 
                            text: "Ok", 
                            status: "received"
                        }
                        );
                }, 2000)
            },

            // function per il filter
            
        }
    }
);
