
const { OFFICIAL_EMAIL } = require("../config/envConfig");
const mathService = require("../services/mathService");
const aiService = require("../services/aiService");
const { validateInput } = require("../utils/validateInput");

exports.handleBFHL = async (req, res) => {
  try {
    const key = Object.keys(req.body)[0];
    const value = req.body[key];

    if (!validateInput(key, value)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid request payload"
      });
    }

    let data;

    switch (key) {
      case "fibonacci":
        data = mathService.fibonacci(value);
        break;

      case "prime":
        data = mathService.primeFilter(value);
        break;

      case "lcm":
        data = mathService.lcm(value);
        break;

      case "hcf":
        data = mathService.hcf(value);
        break;

      case "AI":
        data = await aiService.askAI(value);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          error: "Unsupported operation"
        });
    }

    return res.status(200).json({
      is_success: true,
      official_email: OFFICIAL_EMAIL,
      data
    });

  } catch (error) {
    return res.status(500).json({
      is_success: false,
      error: "Processing failed"
    });
  }
};
