#!/bin/bash

sleep 5;

# Check system language
language=$(locale | grep LANG)

if [[ $language == *"pt"* ]]; then
	# Use the default language
	rm -f "/opt/regataos-prime/www/js/translations.js"

elif [[ $language == *"en"* ]]; then
	# Use the en_US language
	cp -f "/opt/regataos-prime/www/js/translations/english.js" "/opt/regataos-prime/www/js/translations.js"

else
	# Use the en_US language
	cp -f "/opt/regataos-prime/www/js/translations/english.js" "/opt/regataos-prime/www/js/translations.js"

fi

# Updtae system info
sudo -H env DISPLAY=:0 /opt/regataos-prime/scripts/prime-settings-system-info.sh > /tmp/regataos-prime/prime-info.txt
