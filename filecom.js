import { watch , open} from 'fs/promises';


(
    async () => {

        try {
            const watcher = watch('./');
            const commandDesctiptor = await open('command', 'r');

            for await (const event of watcher) {
                if (event.eventType === 'change' && event.filename === "command") {
                    const content = await commandDesctiptor.read()
                    console.log(content)

                }
                
            }
        } catch (error) {
            console.log("create file command")
        }     

    }
)()