# RxValue Electron

Adds IPC classes that work similar to Electron's builtin `ipcMain` and `ipcRenderer`.

For `IpcMain`, the callback passed to `handle(funcitonName, handle)` should return an `RxValue` or an `RxList`.
A channel will be opened to the client, the RxValue will be subscribed to, and new values will automatically be piped
to the client. The channel will be closed and the RxValue unsubscribed when an "unsubscribe" message is sent
from the client.

For `IpcRender`, simpy call `getValue(functionName, ...args)` or `getList(functionName, ...args)`. An `RxValue`
or `RxList` will be returned. Upon subscribing to the returned RxValue, a channel will be opened to the server,
the function will be invoked on the server, and all values from the server will be piped to the return RxValue.
Upon unsubscribing from the RxValue, an "unsubscribe" message will be sent to the server, and the channel will be
closed. The channel will not be open upon further subscriptions. Therefore, once unsubscribed, the RxValue will be dead.
