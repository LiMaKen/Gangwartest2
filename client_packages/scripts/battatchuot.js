var cursor_status = false;
mp.keys.bind(0x76, true, function() {
    
    if (cursor_status == false) {
        mp.gui.cursor.visible = true;
        cursor_status = true;
    } else {
        cursor_status = false;
        mp.gui.cursor.visible = false;
    }
    //mp.gui.chat.push('F7 key is pressed. This message will be shown until you release the key, because "keyhold" is true.');
});