raspap-webgui
=============
Started and modified from here (http://sirlagz.net/2013/02/08/raspap-webgui/)

Requirements
============
A raspberry pi with raspbian running on it. You will need to ssh into it to set this up.

The Packages required for the WebGUI are:
* lighttpd
* php5-cgi
* git

Steps
=====
1. Install required packages

  `sudo apt-get install lighttpd php5-cgi git`
2. Enable php in lighttpd

  ```
  sudo lighty-enable-mod fastcgi-php
  sudo service restart
  ```
3. Edit `/etc/sudoers` to allow the *www-data* user to call the necessary commands. Add the following line to the end of the file.


  ```
  www-data ALL=(ALL) NOPASSWD:/sbin/ifdown wlan0,/sbin/ifup wlan0,/bin/cat /etc/wpa_supplicant/wpa_supplicant.conf,/bin/cp /tmp/wifidata /etc/wpa_supplicant/wpa_supplicant.conf,/sbin/wpa_cli scan_results,/sbin/wpa_cli scan,/bin/cp /tmp/hostapddata /etc/hostapd/hostapd.conf,/etc/init.d/hostapd start,/etc/init.d/hostapd stop,/etc/init.d/dnsmasq start,/etc/init.d/dnsmasq stop,/bin/cp /tmp/dhcpddata /etc/dnsmasq.conf
  ```
4. Once those modifications are done, git clone the files to `/var/www`. Make sure that there are no files in the `/var/www` directory. There was a default lighttpd index file that I had to delete.

  `git clone https://github.com/rjpcomputing/raspap-webgui.git /var/www`
5. Set the files ownership to `www-data` user.

  `sudo chown -R www-data:www-data /var/www`
* It should be up and running!
