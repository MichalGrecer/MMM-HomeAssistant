# MMM-HomeAssistant

MMM-HomeAssistant is a simple, lightweight module for the MagicMirror² ecosystem. It allows you to embed your **Home Assistant** dashboard directly into your smart mirror using an iframe.

## Description

This module is designed for users who want a quick and easy way to view their Home Assistant Lovelace UI on their MagicMirror. It is highly customizable in terms of window dimensions to fit your specific screen layout.


---

## Installation

1. Navigate to your MagicMirror `modules` directory:
   ```bash
   cd ~/MagicMirror/modules
   ```

2. Clone this repository:
    ```bash
    git clone https://github.com/MichalGrecer/MMM-HomeAssistant.git
    ```


## Configuration

To use this module, add the following configuration block to the modules array in your config/config.js file:

```javascript
{
    module: "MMM-HomeAssistant",
    position: "middle_center", // Choose any position that fits your needs
    config: {
        url: "http://192.168.1.XXX:8123", // Replace with your Home Assistant URL
        width: "1120px",
        height: "720px",
        scrolling: "no"
    }
},
```

## Configuration Options

| Option | Description | Default |
| :--- | :--- |
| `url` | The full URL of your Home Assistant instance. | http://localhost:8123 |
| `width` | The width of the iframe (supports px or %). | 1120px |
| `height` | The height of the iframe (supports px or %). | 720px |
| `scrolling` | Enable or disable scrollbars ("yes", "no", or "auto"). | no |


## Important Notes
* **X-Frame-Options:** Ensure your Home Assistant configuration allows being embedded in an iframe. You might need to add your MagicMirror's IP to the `trusted_proxies` or configure `use_x_frame_options: false` in your HA `configuration.yaml` if you encounter connection issues.
* **Security:** If you are accessing your mirror remotely, ensure you are using a secure connection (HTTPS).