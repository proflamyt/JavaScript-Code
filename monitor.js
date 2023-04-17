import { watch , open} from 'fs/promises';



(
    async () => {
        const watcher = watch('./');
        let commandDesctiptor;
        try {

        commandDesctiptor = await open('command', 'r');
                        
        } catch (error) {
            console.log("create file command")
        }   
        
        commandDesctiptor.on('change', async()=> {
                        
            const fileSize = (await commandDesctiptor.stat()).size
            const buffer = Buffer.alloc(fileSize)
            const offset = 0; const length = fileSize;
            await commandDesctiptor.read(buffer, offset, length, 0)
            console.log(buffer.toString())
        })

        for await (const event of watcher) {
            if (event.eventType === 'change' && event.filename === "command") {
                commandDesctiptor.emit("change")

            }
            
        }
    })()


