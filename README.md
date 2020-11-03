# wasend
WhatsApp Send URL Generator. Help you to generate url to send whatsapp message.

# installation
`npm i wasend --save`

# how to use
```
const wasend = require('wasend');
OR
import wasend from 'wasend';
```

### generate(string phoneNumber, string message)
**Simple message**
```
let url = wasend.generate('6287883138099', 'Hello, My name is Yoza Wiratama');
```

**HTML message**, in case you use simple wyswyg editor.
```
const msg = `<h1><b>Hello,</b></h1> My Name is <b>Yoza Wiratama.</b><br>I have some hobby, for examples :<br><ul><li><b>BOLD</b></li><li><i>ITALIC</i></li><li><s>STRIKE</s></li></ul><br>Thank you very much.`
let url = wasend.generate('6287883138099', msg);
```

**Support List Convertion**
```
<ul>
<li>Test 1</li>
<li>Test 2</li>
</ul>

become

- Test 1
- Test 2
```

# test
`npm run test`

# license
MIT 2.0

# note
I just create this package less than 1 hour, to support my project. If you find any issues, just tell me, or may be you can contribute more.

### next
if I have more time, this is my next 
- Ordered list convertion
- escape anchor html
- etc

# Thank you
