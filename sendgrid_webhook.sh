function localtunnel {
  lt --subdomain myuniquesubdomain1479haight --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
