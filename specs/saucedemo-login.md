# Saucedemo Login Flow Test Plan

## 1. Successful Login
### 1.1 standard_user
- **Preconditions**: Browser is at `https://www.saucedemo.com`.
- **Steps**:
    1. Enter `standard_user` into `#user-name`.
    2. Enter `secret_sauce` into `#password`.
    3. Click `#login-button`.
- **Expected Assertions**:
    - URL should be `https://www.saucedemo.com/inventory.html`.
    - Element `.inventory_list` should be visible.

## 2. Error Handling
### 2.1 locked_out_user
- **Preconditions**: Browser is at `https://www.saucedemo.com`.
- **Steps**:
    1. Enter `locked_out_user` into `#user-name`.
    2. Enter `secret_sauce` into `#password`.
    3. Click `#login-button`.
- **Expected Assertions**:
    - URL remains `https://www.saucedemo.com/`.
    - Element `[data-test="error"]` should be visible with text: `"Epic sadface: Sorry, this user has been locked out."`

### 2.2 Empty Username
- **Preconditions**: Browser is at `https://www.saucedemo.com`.
- **Steps**:
    1. Leave `#user-name` empty.
    2. Enter `secret_sauce` into `#password`.
    3. Click `#login-button`.
- **Expected Assertions**:
    - URL remains `https://www.saucedemo.com/`.
    - Element `[data-test="error"]` should be visible with text: `"Epic sadface: Username is required"`

### 2.3 Empty Password
- **Preconditions**: Browser is at `https://www.saucedemo.com`.
- **Steps**:
    1. Enter `standard_user` into `#user-name`.
    2. Leave `#password` empty.
    3. Click `#login-button`.
- **Expected Assertions**:
    - URL remains `https://www.saucedemo.com/`.
    - Element `[data-test="error"]` should be visible with text: `"Epic sadface: Password is required"`

### 2.4 Invalid Credentials
- **Preconditions**: Browser is at `https://www.saucedemo.com`.
- **Steps**:
    1. Enter `foo` into `#user-name`.
    2. Enter `bar` into `#password`.
    3. Click `#login-button`.
- **Expected Assertions**:
    - URL remains `https://www.saucedemo.com/`.
    - Element `[data-test="error"]` should be visible with text: `"Epic sadface: Username and password do not match any user in our system"`
