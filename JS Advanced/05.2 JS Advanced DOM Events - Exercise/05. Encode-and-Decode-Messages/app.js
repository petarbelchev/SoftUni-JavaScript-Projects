function encodeAndDecodeMessages() {
    document.getElementsByTagName('button')[0].addEventListener('click', encode);
    document.getElementsByTagName('button')[1].addEventListener('click', decode);
    let message = document.getElementsByTagName('textarea')[0];
    let receivedMsg = document.getElementsByTagName('textarea')[1];

    function encode() {
        let output = '';
        for (let i = 0; i < message.value.length; i++) {
            output += String.fromCharCode(message.value.charCodeAt(i) + 1);
        }
        message.value = '';
        receivedMsg.value = output;
    }

    function decode() {
        let output = '';
        for (let i = 0; i < receivedMsg.value.length; i++) {
            output += String.fromCharCode(receivedMsg.value.charCodeAt(i) - 1);
        }
        receivedMsg.value = output;
    }
}