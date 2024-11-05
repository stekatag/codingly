---
title: How to Activate Windows 10/11 with PowerShell Commands in Minutes
excerpt: Learn how to quickly activate your Windows 10 or 11 operating system
  using PowerShell commands. This step-by-step guide provides easy-to-follow
  instructions, from entering a product key to completing activation through a
  KMS server.
publishDate: 2024-11-05T22:33:00+02:00
image: /assets/4xfefdpqrxqqkqxmcincmh.jpg
category: technology
author: stefan-gogov
tags:
  - Windows Activation
  - Windows 10
  - Windows 11
  - PowerShell
  - KMS Activation
  - Windows Tips
  - System Administration
---
## How to Activate Windows 10/11 with PowerShell Commands in Minutes

Activating Windows 10 or Windows 11 is essential for accessing the full range of features and getting official support. One quick method is by using PowerShell commands to connect with a KMS (Key Management Service) server. Here’s a step-by-step guide on how to activate your Windows using PowerShell.

> **Disclaimer:** This guide is for educational purposes only. Activating Windows using KMS servers without a legitimate license is not recommended. Microsoft offers legitimate ways to purchase or acquire Windows licenses.

### Step 1: Open PowerShell as Administrator

First, open PowerShell with administrator privileges. To do this:

1. Press the Windows key on your keyboard.
2. Type "PowerShell" into the search bar.
3. Right-click on Windows PowerShell and select Run as administrator.

### Step 2: Enter the Product Key

Once you have PowerShell open, you’ll need to enter the Windows product key. Run the following command in PowerShell:

```powershell
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
```

This command will install the specified product key for Windows. Be sure to press Enter after entering the command.

### Step 3: Set the KMS Server

Next, you’ll need to connect to a KMS server to complete activation. In PowerShell, type:

```
slmgr /skms kms8.msguides.com
```

This command will set your KMS server to `kms8.msguides.com`, which allows Windows to validate the product key and activate.

### Step 4: Activate Windows

Finally, enter the following command to activate Windows:

```
slmgr /ato
```

PowerShell will connect to the KMS server and verify the product key. Once verified, your Windows 10 or 11 should be activated successfully.

### Confirming Activation

To confirm the activation, you can use this command:

```
slmgr /xpr
```

This will display the activation status in a pop-up window, verifying that your Windows OS is fully activated.

### Final Thoughts

By following these PowerShell commands, you can activate Windows 10 or 11 without needing to go through the traditional activation wizard. Remember that using a KMS server is intended for legitimate purposes, such as activating a licensed copy in a corporate or educational environment.
