#!/bin/bash

# Set the service file name
SERVICE_FILE="sad-lamp.service"

# Get the current directory
CURRENT_DIR="$(pwd)"

# Check if the service file exists in the current directory
if [ -e "$CURRENT_DIR/$SERVICE_FILE" ]; then
    # Move the service file to the correct systemd directory
    sudo mv "$CURRENT_DIR/$SERVICE_FILE" "/etc/systemd/system/$SERVICE_FILE"

    # Add WorkingDirectory parameter under [Service] in the service file
    sudo sed -i "/\[Service\]/a WorkingDirectory=$CURRENT_DIR" "/etc/systemd/system/$SERVICE_FILE"

    # Reload systemd configuration
    sudo systemctl daemon-reload

    # Start the service
    sudo systemctl start "$SERVICE_FILE"

    # Enable the service on boot
    sudo systemctl enable "$SERVICE_FILE"

    echo "Service installed and started successfully."
else
    echo "Error: $SERVICE_FILE not found in the current directory."
fi
