function handleEvent(event) {
    if (event.participantIDs.length === 0) return;
    try {
        switch (event.type) {
            case 'event': {
                switch (event.logMessageType) {
                    case "log:subscribe":
                        global.plugins.events.get('subcribe')({ event });
                        break;
                    case "log:unsubscribe":
                        global.plugins.events.get('unsubcribe')({ event });
                        break;
                    case "log:user-nickname":
                        global.plugins.events.get('user-nickname')({ event });
                        break;
                    case "log:thread-call":
                        global.plugins.events.get('thread-call')({ event });
                        break;
                    case "log:thread-name":
                    case "log:thread-color":
                    case "log:thread-icon":
                    case "log:thread-approval-mode":
                    case "log:thread-admins":
                        global.plugins.events.get('thread-update')({ event });
                        break;
                    default:
                        break;
                }
                break;
            }
            case 'change_thread_image':
                global.plugins.events.get('change_thread_image')({ event });
                break;
            default:
                break;
        }
    } catch (err) {
        console.error(err);
    }
}
