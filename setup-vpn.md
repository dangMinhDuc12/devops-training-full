## Install OpenVPN on Server
### Download OpenVPN
```
wget https://raw.githubusercontent.com/Nyr/openvpn-install/master/openvpn-install.sh
```
### Set permission for downloaded file
```
chmod +x openvpn-install.sh
```
### Install and create/remove/revoke OpenVPN users
```
sudo bash openvpn-install.sh
```
**Note: ** Using TCP is the protocol since many clients do not support UDP protocol when creating connection.

## Uninstall OpenVPN on Server
- Use the option (3) Remove OpenVPN when running `openvpn-install.sh`
- After checking the status of service openvpn, if it still exists. Run the command below to cleanup the service.
```
sudo apt -f install & sudo apt purge openvpn
```