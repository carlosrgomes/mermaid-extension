#!/bin/bash

# This script adds the necessary topic to your GitHub repository
# so it can be automatically listed in the Gemini CLI gallery.

REPO_TOPIC="gemini-cli-extension"

if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Please install it from https://cli.github.com/ and login with 'gh auth login'."
    exit 1
fi

echo "Adding topic '$REPO_TOPIC' to the current repository..."
gh repo edit --add-topic "$REPO_TOPIC"

if [ $? -eq 0 ]; then
    echo "Successfully added topic!"
else
    echo "Failed to add topic. Make sure you are inside a git repository linked to GitHub."
    exit 1
fi
