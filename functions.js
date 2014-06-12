function WiFiDown() {
        var down = confirm("Take down wlan0 ?");
        if(down) {
        } else {
                alert("Action cancelled");
        }
}

function UpdateNetworks() {
	var existing = document.getElementById("networkbox").getElementsByTagName('div').length;
	document.getElementById("Networks").value = existing;
}

function AddNetwork() {
	var Networks = document.getElementById('Networks').value;
        document.getElementById('networkbox').innerHTML += '<div id="Networkbox'+Networks+'" class="Networkboxes">Network ' + Networks + '<br /> \
<span class="tableft">SSID :</span><input type="text" name="ssid'+Networks+'" onkeyup="CheckSSID(this)"><br> \
<span class="tableft">Password :</span><input type="password" name="psk'+Networks+'" onkeyup="CheckPSK(this)"></div>';
	Networks++;
	document.getElementById('Networks').value=Networks;
}

function AddScanned(network) {
	var Networks = document.getElementById('Networks').value;
        document.getElementById('networkbox').innerHTML += '<div id="Networkbox' + Networks + '" class="Networkboxes">Network ' + Networks + '<br /> \
<span class="tableft">SSID :</span><input type="text" name="ssid'+Networks+'" id="ssid'+Networks+'" onkeyup="CheckSSID(this)"><br> \
<span class="tableft">Password :</span><input type="password" name="psk'+Networks+'" onkeyup="CheckPSK(this)"></div>';
	document.getElementById('ssid' + Networks).value = network;
        Networks++;
        document.getElementById('Networks').value = Networks;
}

function CheckSSID(ssid) {
	if(ssid.value.length>31) {
		ssid.style.background='#FFD0D0';
		document.getElementById('Save').disabled = true;
	} else {
		ssid.style.background='#D0FFD0'
		document.getElementById('Save').disabled = false;
	}
}

function CheckPSK(psk) {
	if(psk.value.length < 8) { 
		psk.style.background='#FFD0D0';
		document.getElementById('Save').disabled = true;
	} else {
		psk.style.background='#D0FFD0';
		document.getElementById('Save').disabled = false;
	}
}

function DeleteNetwork(network) {
	element = document.getElementById('Networkbox'+network);
	element.parentNode.removeChild(element);
//        var Networks = document.getElementById('Networks').value;
//	Networks--
//	document.getElementById('Networks').value = Networks;
	// Enble save so that user can commit the changes
	document.getElementById('Save').disabled = false;	
}
