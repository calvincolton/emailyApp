function localtunnel {
  lt -s haight2001ox00ashbury --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
