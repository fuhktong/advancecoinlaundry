# Deployment Setup Instructions

## GitHub Actions Auto-Deployment

This repository is configured with GitHub Actions to automatically deploy to your web host when code is pushed to the `main` branch.

## Required GitHub Secrets

You need to configure these secrets in your GitHub repository settings:

### 1. Navigate to Repository Settings
- Go to your GitHub repository
- Click on "Settings" tab
- Click on "Secrets and variables" > "Actions"

### 2. Add the following secrets:

#### `SERVER_SSH_KEY`
- Your private SSH key for connecting to the web host
- Generate with: `ssh-keygen -t rsa -b 4096 -C "github-actions"`
- Copy the contents of the private key file

#### `REMOTE_HOST`
- Your web host's hostname or IP address
- Example: `yourhost.com` or `123.456.789.0`

#### `REMOTE_USER`
- Your SSH username for the web host
- Usually your hosting account username

#### `REMOTE_PATH`
- The full path to your website directory on the server
- Example: `/home/username/public_html/` or `/var/www/html/`

## Setup Steps

### 1. Generate SSH Key Pair
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions" -f ~/.ssh/github_actions
```

### 2. Add Public Key to Web Host
Copy the public key to your web host:
```bash
ssh-copy-id -i ~/.ssh/github_actions.pub username@yourhost.com
```

Or manually add the contents of `github_actions.pub` to `~/.ssh/authorized_keys` on your server.

### 3. Add Private Key to GitHub Secrets
- Copy the entire contents of the private key file `github_actions`
- Add it as `SERVER_SSH_KEY` secret in GitHub

### 4. Configure Other Secrets
Add the remaining secrets (`REMOTE_HOST`, `REMOTE_USER`, `REMOTE_PATH`) in GitHub.

## How It Works

1. When you push to `main` branch, GitHub Actions triggers
2. Code is checked out and PHP is set up
3. Files are deployed to your web host via SSH
4. PHP syntax is validated after deployment
5. You'll see success/failure status in GitHub Actions tab

## Testing the Deployment

After setting up secrets, push any change to the main branch:

```bash
git add .
git commit -m "Test deployment"
git push origin main
```

Check the "Actions" tab in your GitHub repository to see the deployment progress.

## Troubleshooting

- **SSH Connection Failed**: Verify SSH key is correctly added to server
- **Permission Denied**: Check file permissions on remote server
- **Path Not Found**: Verify `REMOTE_PATH` is correct
- **PHP Syntax Errors**: Check the Actions log for specific file errors

## Security Notes

- Never commit SSH keys to the repository
- Use GitHub Secrets for all sensitive information
- Regularly rotate SSH keys
- Limit SSH key permissions on the server